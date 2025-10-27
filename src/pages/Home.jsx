import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveCurrent } from '../utils/storage'
import PublishHelp from '../components/PublishHelp'

export default function Home() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [services, setServices] = useState('')
  const [contact, setContact] = useState('')
  const [color, setColor] = useState('indigo')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: name || 'My Site',
      description,
      services: services.split(',').map(s => s.trim()).filter(Boolean),
      contact,
      color
    }
    saveCurrent(data)
    navigate('/preview')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center relative transition-all duration-700">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0 transition-all duration-700" />
      <div className="relative z-10 w-full max-w-xl mx-auto animate-fadein">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg transition-all duration-700">Generate a Beautiful Website for Your Business in <span className="text-blue-300">5 Minutes</span></h1>
        <p className="text-lg text-blue-100 text-center mb-8 transition-all duration-700">AI-powered website builder that creates stunning, responsive marketing websites instantly. No coding required.</p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl transform transition-all duration-700 hover:scale-105">
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Business Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg" placeholder="the one" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Describe Your Business</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg" rows={3} placeholder="create a gym site"></textarea>
          </div>
          <p className="text-center text-gray-600 text-sm mb-2">You'll create a free account first so we can save your website progress</p>
          <button type="submit" className="w-full py-3 text-lg font-bold bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">Create My Website <span className="text-xl">→</span></button>
        </form>
      </div>
      <PublishHelp />
    </div>
  )
}
