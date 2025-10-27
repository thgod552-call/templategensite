import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getShared } from '../utils/storage'

export default function Site() {
  const { id } = useParams()
  const navigate = useNavigate()
  const data = getShared(id)

  if (!data) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold">Site not found</h2>
        <p className="mt-2 text-sm text-gray-600">No shared site matches that id.</p>
        <div className="mt-4">
          <button onClick={() => navigate('/')} className="px-3 py-2 bg-gray-200 rounded">Back home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-2xl mx-auto mt-8 animate-fadein transform transition-all duration-700 hover:scale-105">
      <header className={`mb-6`}>
        <h1 className={`text-3xl font-bold text-${data.color}-600`}>{data.name}</h1>
        <p className="mt-2 text-gray-700">{data.description}</p>
      </header>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold">Services</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          {(data.services||[]).map((s,i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">{data.contact}</p>
      </section>
    </div>
  )
}
