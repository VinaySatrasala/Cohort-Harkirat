import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos] = useState(0);
  useEffect(()=>{
    (res)=>{
      const json = res.json();
      setTodos(json);
    }
  } , [todos])
  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} desc={todo.desc}></Todo>)}
    </div> 
  )
}

function Todo({title , desc}){
  <div>
    <h1>{title}</h1>
    <h2>{desc}</h2>
  </div>
}

export default App
