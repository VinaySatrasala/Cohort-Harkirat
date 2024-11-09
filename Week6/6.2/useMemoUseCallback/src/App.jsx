import {memo, useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// * USE MOMO
// function App() {
//   const [count, setCount] = useState(0)
//   const [value , setValue] = useState(1)

//   // this expensiev operation run for every rerender for counter buttKLJVKLDSJVSon -- we need store thre value
//   let valc = useMemo(()=>{  
//     let c = 100;
//     for(let i = 1;i<=value;i++){
//       c+=i;
//     }},[value])
//   // Now as above only run the code if value changes until that the memoized value is reused
//   return (
//     <>
//       <div className="card">
//         <input onChange={function(e){
//           console.log(e);
//           setValue(e.target.value)
//         }}></input> <br></br>
//         <p>sum is {valc}</p>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>

//     </>
//   )
// }


//* USE CALL BACK
// TODO : create a butoon component
// In this button component re render for every rerender of state varables since not memoized
function App(){
  const [count , setCount] = useState(0);
  const fn = useCallback(()=>{
    return "hello";
  },[])
  return(
    <div>
      <ButtonCompnent></ButtonCompnent>
      <ButtonCompnentF fn = {fn}></ButtonCompnentF>
      <button onClick={()=>{setCount(count+1)}}>{"click me" + count} </button>
    </div>
  )
}
// function ButtonCompnent(){
//   console.log("reernderd");
//   return(
    
//     <button>Clicked</button>
//   )
// }
//  so memoize button component

const  ButtonCompnent = memo(()=>{
  console.log("reernderd");

  return(
    <button>Clicked</button>
  )
});

// Now it will not re render every time 

// Now pass a function as params to button component
// unless input change this will not re-render 
// but in this case it will re-render since react not smart enough to check equality of funcions so wrap that fun in use callback
const ButtonCompnentF = memo(({fn})=>{
  console.log("function one");
  return(
    <button>Clicked</button>
  )
})

export default App
