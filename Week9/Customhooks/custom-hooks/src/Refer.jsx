import { Component, useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [render,setRender] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setRender(r => !r);
    },5000);
  },[])
  return (
    <>
      {render ? <Comp2/>:<div>cd</div>}
      {/* <Mycomp></Mycomp> */}
      {/* <Comp></Comp> */}
      {/* <Comp1></Comp1> */}
    </>
  )
}
// Function based
function Mycomp(){
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={incrementCount}>Inc</button>
    </>
  )
}

// Class based
class Comp extends Component{
  constructor(props){
    super(props);
    this.state  = {count : 0};
  }
  incCount = () => {
    this.setState({count : this.state.count + 1})
  }

  render(){
    return(
      <>
      <p>{this.state.count}</p>
      <button onClick={this.incCount}>IncClsss</button>
      </>
    )
  }
}

// Life Cycle events
function Comp1(){
  useEffect(()=>{
    console.log("Mounted");
    return ()=>{
      // return function run for clean up happen
      console.log("Unmounted");
    }
  },[])
}

// Life cycle using class
class Comp2 extends Component{
  componentDidMount(){
    console.log("for mounting component")
  }

  componentWillUnmount(){
    console.log("When un mounted")
  }

  render(){
    return <div>Comp2</div>
  }
}
export default App
