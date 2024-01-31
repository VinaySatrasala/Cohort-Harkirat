import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title={"Vinay2"}></Header>
    </>
  );
}

function HeaderWithButton() {
  `Pushing the state down to minimize the re-renders
  as you see previously state variables used to be in App component
  ---> or can use react memo(check docs)`
       
  const [name, setName] = useState("Vinay");
  return (
    <div>
      <button
        onClick={function () {
          setName(Math.random());
        }}
      >
        {"Click Me"}
      </button><br />
      {`My name is ${name}`}
    </div>
  );
}

function Header({ title }) {
  return <>{title}</>;
}

export default App;
