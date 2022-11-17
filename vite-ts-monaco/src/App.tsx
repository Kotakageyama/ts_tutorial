import React, { useState } from 'react'
import NaviBar from './components/NaviBar'
import Home from './components/Home'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto w-full">
      <NaviBar />
      <div className="hero min-h-screen bg-base-200 pt-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Monaco ts Editor</h1>
            <p className="py-6">
              ここでは簡単に式を組むことが出来ます。<br></br>
              色々なコードがあなたを待っています。
            </p>
            <Home />
          </div>
        </div>
      </div>
      <Home />
    </div>
  )
}

export default App
