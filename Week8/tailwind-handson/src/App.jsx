import { RevenueCard } from './Components/RevenueCard'
import './App.css'

function App() {

  return (
    <div className='grid grid-cols-3'>
      <RevenueCard title = {"amount pending"} amount = {"92,312.20"} orderCount = {13 }></RevenueCard>

    </div>
  )
}

export default App
