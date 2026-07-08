import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Weather from './components/Weather'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
      <Weather/>
   </div>
  )
}

export default App
