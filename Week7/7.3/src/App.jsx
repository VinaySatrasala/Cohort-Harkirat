import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue,RecoilRoot } from 'recoil'
import { homeAtom, jobsAtom, messageAtom, networkAtom, totalNotifications } from './store/atoms/atoms'



function App(){
  return(
    <RecoilRoot>
      <Bar></Bar>
    </RecoilRoot>
  )
}
function Bar() {
  const home = useRecoilValue(homeAtom);
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const message = useRecoilValue(messageAtom);
  const total = useRecoilValue(totalNotifications);
  return (
    <div>
      <button>Home {home}</button>
      <button>network {network}</button>
      <button>jobs {jobs}</button>
      <button>message {message}</button>
      <button>me {total}</button>
    </div>
  )
}

export default App
