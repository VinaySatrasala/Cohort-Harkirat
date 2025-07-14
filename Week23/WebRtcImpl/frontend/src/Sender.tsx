import { useEffect, useRef, useState } from "react";

export const Sender = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const pcRef = useRef<RTCPeerConnection | null>(null);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);

        ws.onopen = () => {
            ws.send(JSON.stringify({ type: "sender" }));
        };

        ws.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            const pc = pcRef.current;
            if (!pc) return;

            if (message.type === "createAnswer") {
                await pc.setRemoteDescription(new RTCSessionDescription(message.sdp));
            } else if (message.type === "iceCandidates") {
                await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
            }
        };
    }, []);

    const initiateConnection = async () => {
        if (!socket) {
            alert("No WebSocket connection found.");
            return;
        }

        const pc = new RTCPeerConnection();
        pcRef.current = pc;

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.send(JSON.stringify({
                    type: "iceCandidates",
                    candidates: event.candidate
                }));
            }
        };

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach((track) => {
            pc.addTrack(track, stream);
        });

        // Optional: show local video preview
        const video = document.createElement("video");
        video.srcObject = stream;
        video.autoplay = true;
        video.muted = true;
        document.body.appendChild(video);

        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        socket.send(JSON.stringify({
            type: "createOffer",
            sdp: offer
        }));
    };

    return (
        <div>
            <h2>Sender</h2>
            <button onClick={initiateConnection}>Start Streaming</button>
        </div>
    );
};
