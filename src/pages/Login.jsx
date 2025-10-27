import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'templategen_user'

export default function Login() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem(STORAGE_KEY)
    if (user) {
      navigate('/')
    }
  }, [navigate])

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !name) {
      setError('Please enter your name and email.')
      return
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, name }))
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 animate-fadein">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-700 hover:scale-105 animate-fadein">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6 drop-shadow-lg transition-all duration-700">Welcome to TemplateGen</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-300" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-300" placeholder="you@email.com" />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full py-3 text-lg font-bold bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2">Login <span className="text-xl">→</span></button>
        </form>
      </div>
    </div>
  )
}
