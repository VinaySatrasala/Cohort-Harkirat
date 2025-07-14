import { WebSocketServer, WebSocket } from "ws";

const webSocketServer = new WebSocketServer({ port: 8080 });

let senderSocket: WebSocket | null = null;
let receiverSocket: WebSocket | null = null;

webSocketServer.on("connection", (client) => {
    client.on("error", console.log);

    client.on("message", (data: any) => {
        let parsedData: any = null;
        try {
            parsedData = JSON.parse(data);
        } catch (e) {
            client.send(
                JSON.stringify({
                    STATUS: "400",
                    message: "Expected JSON",
                })
            );
            return;
        }

        const sendIfOpen = (socket: WebSocket | null, message: string) => {
            if (socket && socket.readyState === WebSocket.OPEN) {
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
                if (client !== senderSocket) return;
                sendIfOpen(receiverSocket, JSON.stringify({
                    type: "createOffer",
                    sdp: parsedData.sdp
                }));
                break;
            case "createAnswer":
                if (client !== receiverSocket) return;
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
