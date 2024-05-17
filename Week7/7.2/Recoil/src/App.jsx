import { useContext, useState } from "react";
import { CountContext } from "./context";
import "./App.css";
import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re");
  return (
    <div>
      <CountRenderer />
      <Buttons></Buttons>
      <EvenOdd></EvenOdd>
    </div>
  );
}

function EvenOdd() {
  const even = useRecoilValue(evenSelector);
  return <div>
    {even ? "Even" : null}
  </div>;
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  let ele = <p></p>;
  function cb(e) {
    return e + 1;
  }
  return (
    <div>
      <button
        onClick={() => {
          // !This counter part to setCount(count + 1) -->means when you pass a callback as params call back will
          // ! be given present count as input so using arrow can be writen as setCount(c => c+1)
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
      {ele}
    </div>
  );
}

export default App;
