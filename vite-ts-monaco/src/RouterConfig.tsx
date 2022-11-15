import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import EditorPage from './pages/Editor'
import ScratchPage from './pages/Scratch'

export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/scratch" element={<ScratchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
