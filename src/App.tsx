import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InlineButtons from './components/InlineButtons'
import Inputs from './components/Inputs'
import Toggle from './components/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hello</p>
      <InlineButtons />
    </>
  )
}

export default App
