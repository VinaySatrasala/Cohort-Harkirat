import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSetRecoilState , RecoilRoot, useRecoilState} from 'recoil'
import { todoAtom } from './store/atoms/todo'


// TODO:
// 2 input boxes (title , description) => atom
// button
// todo=>atom
// filter(gym) => atom
// selector (the current set of todos)

function App() {

  return (
    <RecoilRoot>
      <Todo></Todo>
    </RecoilRoot>
  )
}

function Todo(){
  const [todos,setTodo] = useRecoilState(todoAtom);-
  let input1="";
  let input2="";
  function hinp1(e){
    input1 = e.target.value;
  }

  function hinp2(e){
    input2 = e.target.value;
  }

  function addInput(){
    const obj = {
      title : input1,
      description: input2
    }
    setTodo(todos => {[...todos,obj]});
  }
  return (
    <>
    <input type="text" placeholder='title' onChange={hinp1}/>
    <input type="text" placeholder='description' onChange={hinp2}/>
    <button onClick={addInput}>Add</button>
    </>
  )
}

export default App
