"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importStar(require("ws"));
const http_1 = __importDefault(require("http"));
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
const server = http_1.default.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});
// Map to associate user IDs with WebSocket connections
const userConnections = new Map();
const wss = new ws_1.WebSocketServer({ server });
wss.on('connection', function connection(ws, req) {
    // Extract user ID from query parameter (if applicable)
    const userId = new URL(req.url, `http://${req.headers.host}`).searchParams.get("userId");
    console.log("connected", userId);
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
function redisConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Redis connected");
            // Subscribe to the "status" channel
            yield client.subscribe("status", (message) => {
                console.log("Received message from Redis:", message);
                // Assume the message contains JSON with a userId and data
                const { id, code, lang } = JSON.parse(message);
                // Find the WebSocket connection for the userId and send the data
                const ws = userConnections.get(Number(id));
                if (ws && ws.readyState === ws_1.default.OPEN) {
                    ws.send(lang);
                }
                else {
                    console.log(`No active connection for userId: ${id}`);
                }
            });
        }
        catch (error) {
            console.error("Error connecting to Redis or subscribing:", error);
        }
    });
}
// Start the Redis connection
redisConnect();
