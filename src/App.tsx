import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>Spencer Richardson</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me! {count}
        </button>
        <p>
          Hi Sarah!
        </p>
      </div>
    </>
  )
}

export default App
