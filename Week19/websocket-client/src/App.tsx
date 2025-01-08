import "./App.css"
import Client2 from "./components/client2";
import Client1 from "./components/client1";

function App() {
  return (
    <div className="flex h-screen bg-black">
      <Client1/>
      <Client2 />
    </div>
  );
}

export default App;
