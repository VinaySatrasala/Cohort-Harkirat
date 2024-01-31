import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {`Normal usage of wrapper components`}
      <CardWrapper innerComponent={<TextComponent/>}/>
      {/* Actual usage */}
      <CardWrapper>hi there {`what ever written here can be accessed using props.children in CardWrapper component`}</CardWrapper>
    </div>
  )
}



function CardWrapper(props){
  {`This will logs what ever places inside tags of card wrapper components`}
  console.log(props.children);
    // border : 2px solid black
    return (
      <div style = {{border : "2 px solid black"}}>
        {props.innerComponent}
      </div>
    )
}

function TextComponent(){
  return (
    <div>
      Hello....!
    </div>
  )
}
export default App
