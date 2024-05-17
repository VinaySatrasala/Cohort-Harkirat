import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import './App.css'

function App() {
  const [todos,setTodos] = useState([{id : 1,name:"vinay"}]);
  // fetch("http://localhost:3000/todos").then(
  //   async function(res){
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   }
  // );
  return (
    <div>
      {/* <CreateTodo></CreateTodo> */}
      {/* <Todos todos={todos} name= {"hello"}></Todos> */}
      <Disp name={"vinay"} last = {"kumar"} ></Disp>
    </div>
  )
}
function Disp({name , last}){
  console.log(last[]);
  return <h1>hello</h1>
}


export default App
