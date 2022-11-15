import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mockup-window border bg-base-300">
      <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
    </div>
  )
}

export default App
