import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <section id="spacer">
        <h1>Hello World! From React</h1>
        <button type='button' className="btn btn-info btn-large">Send</button>
      </section>
    </>
  )
}

export default App
