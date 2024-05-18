import { useState } from 'react'
import HeaderSection from './components/Header'
import './styles/App.css'
import Cards from './components/CardSection'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  // const [data, setData] = useState('')

  return (
    <>
      <HeaderSection currentScore={currentScore} bestScore={bestScore} />
      <Cards currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} />
    </>
  )
}

export default App
