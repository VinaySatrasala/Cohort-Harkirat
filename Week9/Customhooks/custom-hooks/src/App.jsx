import { Component, useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import { useDimensions } from "./hooks/useDimensions";
import { useInterval } from "./hooks/useInterval";

function App() {
  const [count,setCount] = useState(0);
  useInterval(()=>{
    setCount(c => c +1)
  },1)
  
  return (
    <>
    <p>{count}</p>
    </>
  );
}


export default App;
