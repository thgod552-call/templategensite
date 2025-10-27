import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Preview from './pages/Preview'
import Site from './pages/Site'
import Login from './pages/Login'
import Premium from './pages/Premium'
import Header from './components/Header'

const STORAGE_KEY = 'templategen_user'

function RequireAuth({ children }) {
  const user = localStorage.getItem(STORAGE_KEY)
  const location = useLocation()
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default function App() {
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  return (
    <div className="min-h-screen">
      {!isLogin && <Header />}
      <main className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/preview" element={<RequireAuth><Preview /></RequireAuth>} />
          <Route path="/site/:id" element={<RequireAuth><Site /></RequireAuth>} />
          <Route path="/premium" element={<RequireAuth><Premium /></RequireAuth>} />
        </Routes>
      </main>
    </div>
  )
}
