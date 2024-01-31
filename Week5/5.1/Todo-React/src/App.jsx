import { useState } from 'react'

import './App.css'

let todos_initial = [
  {
    title : "Todo 1",
    description : "Desc 1",
    completed : true
  },
  {
    title : "Todo 2",
    description : "Desc 2",
    completed : false
  }
]

function App() {
  const [todos, setTodos] = useState(todos_initial);
  function addTodo(){
      setTodos([...todos,{
        title : "Random title",
        description:"Random description",
        completed : true
      }]);
  }


  return (
    <div>
      <button onClick={addTodo}>Add a Random Todo</button>
      {todos.map(function(todo){
        return <Todos title = {todo.title} description = {todo.description}/>
      })}
    </div>
  )
}

function Todos(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
