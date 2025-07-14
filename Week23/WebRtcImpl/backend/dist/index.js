"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const webSocketServer = new ws_1.WebSocketServer({ port: 8080 });
let senderSocket = null;
let receiverSocket = null;
webSocketServer.on("connection", (client) => {
    client.on("error", console.log);
    client.on("message", (data) => {
        let parsedData = null;
        try {
            parsedData = JSON.parse(data);
        }
        catch (e) {
            client.send(JSON.stringify({
                STATUS: "400",
                message: "Expected JSON",
            }));
            return;
        }
        const sendIfOpen = (socket, message) => {
            if (socket && socket.readyState === ws_1.WebSocket.OPEN) {
                socket.send(message);
            }
        };
        switch (parsedData.type) {
            case "sender":
                senderSocket = client;
                break;
            case "receiver":
                receiverSocket = client;
                break;
            case "createOffer":
                if (client !== senderSocket)
                    return;
                sendIfOpen(receiverSocket, JSON.stringify({
                    type: "createOffer",
                    sdp: parsedData.sdp
                }));
                break;
            case "createAnswer":
                if (client !== receiverSocket)
                    return;
                sendIfOpen(senderSocket, JSON.stringify({
                    type: "createAnswer",
                    sdp: parsedData.sdp
                }));
                break;
            case "iceCandidates":
                const message = JSON.stringify({
                    type: "iceCandidates",
                    candidate: parsedData.candidates
                });
                const toSend = client === senderSocket ? receiverSocket : senderSocket;
                sendIfOpen(toSend, message);
                break;
            default:
                client.send(JSON.stringify({
                    STATUS: "400",
                    message: "Unknown type"
                }));
        }
    });
});
