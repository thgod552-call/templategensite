import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'templategen_user'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  function handleLogout() {
    localStorage.removeItem(STORAGE_KEY)
    navigate('/login')
  }
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-white drop-shadow">TemplateGen</Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-3 text-sm items-center">
          <Link to="/" className="text-white hover:text-indigo-200 px-2 py-1 rounded transition">Home</Link>
          <Link to="/login" className="text-white hover:text-indigo-200 px-2 py-1 rounded transition">Login</Link>
          <Link to="/premium" className="text-white hover:text-blue-300 px-2 py-1 rounded transition font-semibold">Premium</Link>
          <button onClick={handleLogout} className="px-3 py-1 bg-white text-indigo-600 rounded shadow hover:bg-gray-100 transition">Sign Out</button>
        </nav>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-indigo-700 bg-opacity-90 px-4 py-3 flex flex-col space-y-2 text-sm">
          <Link to="/" className="text-white hover:text-indigo-200 px-2 py-1 rounded transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/login" className="text-white hover:text-indigo-200 px-2 py-1 rounded transition" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/premium" className="text-white hover:text-blue-300 px-2 py-1 rounded transition font-semibold" onClick={() => setMenuOpen(false)}>Premium</Link>
          <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="px-3 py-1 bg-white text-indigo-600 rounded shadow hover:bg-gray-100 transition">Sign Out</button>
        </nav>
      )}
    </header>
  )
}
