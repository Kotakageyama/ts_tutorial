import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="grid grid-col-4 gap-2 grid-flow-col">
      <div className="card w-70 bg-primary text-primary-content p-2 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Editor</h2>
          <p>コードを書いて作成できます</p>
          <div className="card-actions justify-end">
            <Link to="/editor">
              <button className="btn">使ってみる</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-70 bg-base-100 shadow-xl p-2">
        <div className="card-body">
          <h2 className="card-title">Scratch</h2>
          <p>ドラックアンドドロップで作成できます</p>
          <div className="card-actions justify-end">
            <Link to="/scratch">
              <button className="btn btn-primary">使ってみる</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
