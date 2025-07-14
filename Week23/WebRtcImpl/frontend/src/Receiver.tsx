import { useEffect } from "react";

export const Receiver = () => {
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");

        const video = document.createElement("video");
        video.autoplay = true;
        video.controls = true;
        document.body.appendChild(video);

        const pc = new RTCPeerConnection();
        const remoteStream = new MediaStream();
        video.srcObject = remoteStream;

        pc.ontrack = (event) => {
            console.log("Receiver got track:", event.track);
            remoteStream.addTrack(event.track);
        };

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.send(JSON.stringify({
                    type: "iceCandidates",
                    candidates: event.candidate
                }));
            }
        };

        socket.onopen = () => {
            socket.send(JSON.stringify({ type: "receiver" }));
        };

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            if (message.type === "createOffer") {
                await pc.setRemoteDescription(new RTCSessionDescription(message.sdp));
                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);

                socket.send(JSON.stringify({
                    type: "createAnswer",
                    sdp: answer
                }));
            } else if (message.type === "iceCandidates") {
                try {
                    await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
                } catch (e) {
                    console.error("Error adding ICE candidate", e);
                }
            }
        };
    }, []);

    return <div>Receiver Initialized</div>;
};
