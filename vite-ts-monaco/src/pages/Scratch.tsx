import React from 'react'
import NaviBar from '../components/NaviBar'
const ScratchPage: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <NaviBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Monaco ts Editor</h1>
            <p className="py-6">
              ここではドラッグアンドドロップで簡単に式を組むことが出来ます。
              <br></br>
              色々なコードがあなたを待っています。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScratchPage
