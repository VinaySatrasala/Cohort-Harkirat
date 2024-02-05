import { lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const  DashBoard = lazy(()=>import("./Components/DashBoard"));
const Landing = lazy(()=> import("./Components/landing")); 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        Top Bar
      </div>
      <BrowserRouter>
        <Appbar></Appbar> 
        <Routes>
          {/* //!Search for suspense API */}
          
          <Route path="dashboard" element={<DashBoard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          // console.log(window);
          // ! Can also be achived using window.location.href = "/" --> Drawback is client side routing cannot be achived since hard reload happens again
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dash
      </button>
    </div>
  );
}

export default App;
