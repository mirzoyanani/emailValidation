import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EmailInput from './EmailInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <EmailInput/>
    </div>
  )
}

export default App
