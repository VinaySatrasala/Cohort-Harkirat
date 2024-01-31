import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value , setValue] = useState(1)

  // this expensiev operation run for every rerender for counter button -- we need store thre value
  let valc = useMemo(()=>{  
    let c = 100;
    for(let i = 1;i<=value;i++){
      c+=i;
    }},[value])
  // Now as above only run the code if value changes until that the memoized value is reused
  return (
    <>
      <div className="card">
        <input onChange={function(e){
          console.log(e);
          setValue(e.target.value)
        }}></input> <br></br>
        <p>sum is {valc}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
