import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let todos = [{title : "Go to Gym" , description : "From 8 to 9 PM"}];
function App() {
  const [count, setTodos] = useState(todos);

  return (
    <div>
    <h1>hello</h1>
    </div>
  )
}

function Todos(props){
  return(
    <div>
          <h1>{props.title}</h1>
          <h2>{props.description}</h2>
    </div>
  )
}

export default App
