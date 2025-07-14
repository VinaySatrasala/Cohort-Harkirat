import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';
import { createClient } from 'redis';

const client = createClient();
const server = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

// Map to associate user IDs with WebSocket connections
const userConnections = new Map();

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws, req:any) {
    // Extract user ID from query parameter (if applicable)
    const userId = new URL(req.url, `http://${req.headers.host}`).searchParams.get("userId");
    console.log("connected",userId)
    if (userId) {
        userConnections.set(Number(userId), ws);
        console.log(`User connected: ${userId}`);
    }

    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log(`Message received from ${userId || 'unknown user'}:`, data.toString());
    });

    ws.on('close', () => {
        // Remove the client from the map when it disconnects
        if (userId) {
            userConnections.delete(userId);
            console.log(`User disconnected: ${userId}`);
        }
    });

    ws.send('Hello! Message From Server!!');
});

server.listen(8080, function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});

async function redisConnect() {
    try {
        await client.connect();
        console.log("Redis connected");

        // Subscribe to the "status" channel
        await client.subscribe("status", (message) => {
            console.log("Received message from Redis:", message);

            // Assume the message contains JSON with a userId and data
            const { id, code,lang } = JSON.parse(message);

            // Find the WebSocket connection for the userId and send the data
            const ws = userConnections.get(Number(id));
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(lang);
            } else {
                console.log(`No active connection for userId: ${id}`    );
            }
        });
    } catch (error) {
        console.error("Error connecting to Redis or subscribing:", error);
    }
}

// Start the Redis connection
redisConnect();
