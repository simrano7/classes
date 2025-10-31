import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import First from './First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <First/>
      
   </div>
  )
}

export default App
