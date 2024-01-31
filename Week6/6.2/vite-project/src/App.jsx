import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  // const [todos, setTodos] = useState([])
  // useEffect(()=>{
  //   axios.get("http://localhost:3000").then(function(response){
  //     setTodos(response.data.todos);
  //   });
  // },[])
  // return (
  //   <div>
  //     {todos.map((todo) => {
  //       return (
  //         <Todos title={todo.title} description={todo.description}></Todos>
  //       )
  //     })}
  //   </div>
  // )
  const [click , setClick] = useState(2);

  return(
    <div>
    <button onClick={function(){
      setClick(1)
    }}>{1}</button>
    <button onClick={function(){
      setClick(2)
    }}>{2}</button>
    <button onClick={function(){
      setClick(3)
    }}>{3}</button>
    <button onClick={function(){
      setClick(4)
    }}>{4}</button>
    <Todos id = {click}></Todos>
  </div>
  )
}

function Todos({id}){
  const [todo,setTodo] = useState({});
  const click  = 0;
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id).then(function(response){
      setTodo(response.data.todo);
    })
  },[todo , id])
  return(
    <div>

      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  )
}

export default App
