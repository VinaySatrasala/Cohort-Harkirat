import { useEffect, useState } from "react";

export default function Client2() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [messages, setMessages] = useState<MessageEvent[]>([]);
  const [m, setM] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Cleanup function
    return () => {
      socket.close();
    };
  }, []);

  const SendMessage = () => {
    if (m.trim()) {
      socket?.send(m);
      setM(""); // Clear input field after sending
    }
  };

  if (!socket) {
    return (
      <div className="w-1/2 flex flex-col justify-center items-center p-4">
        <div className="bg-red-300 h-full w-full flex items-center justify-center rounded shadow-md">
          <p className="text-lg font-semibold text-gray-800">
            Connecting to server
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-gray-800 min-h-screen">
      <p className="text-2xl font-bold text-white mb-4">Client 2</p>

      <div className="w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={m}
            onChange={(e) => setM(e.target.value)}
            className="flex-1 p-2 rounded-l-md border border-gray-500 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={SendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:ring focus:ring-blue-500"
          >
            Send
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow-inner h-64 overflow-y-auto">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Messages:</h2>
          <ul className="list-disc pl-4 space-y-2">
            {messages.map((m, index) => (
              <li key={index} className="text-gray-600">
                {m.data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
