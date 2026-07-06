import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Currency from './Currency'

function App() {

  return (
    <div style={{display:'flex', flexDirection:'column', justifyItems:'center',alignItems:'center'}}>
      <Currency/>
    </div>
  )
}

export default App
