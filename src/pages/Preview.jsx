import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrent, saveShared } from '../utils/storage'

function buildHtml(data) {
  const servicesHtml = (data.services || []).map(s => `<li class="py-1">${s}</li>`).join('\n')
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(data.name)}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-900">
  <header class="bg-${data.color}-600 text-white py-8">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold">${escapeHtml(data.name)}</h1>
      <p class="mt-2">${escapeHtml(data.description)}</p>
    </div>
  </header>
  <main class="max-w-4xl mx-auto p-6">
    <section class="mb-6">
      <h2 class="text-2xl font-semibold">About</h2>
      <p class="mt-2">${escapeHtml(data.description)}</p>
    </section>
    <section class="mb-6">
      <h2 class="text-2xl font-semibold">Services</h2>
      <ul class="mt-2 list-disc list-inside text-gray-700">
        ${servicesHtml}
      </ul>
    </section>
    <section>
      <h2 class="text-2xl font-semibold">Contact</h2>
      <p class="mt-2">${escapeHtml(data.contact)}</p>
    </section>
  </main>
</body>
</html>`
}

function escapeHtml(str='') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default function Preview() {
  const navigate = useNavigate()
  const data = getCurrent()
  const [shareLink, setShareLink] = React.useState('')
  if (!data) {
    navigate('/')
    return null
  }

  function handleDownload() {
    const html = buildHtml(data)
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${(data.name||'site').replace(/\s+/g,'_').toLowerCase()}.html`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  function handleShare() {
    const id = Date.now().toString(36)
    saveShared(id, data)
    setShareLink(`${window.location.origin}/site/${id}`)
  }

  return (
    <div className="space-y-6 animate-fadein">
      <div className={`rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105 bg-white bg-opacity-90 backdrop-blur-lg`}>
        <div className={`p-6 text-white`} style={{backgroundColor: undefined}}>
          {/* We'll style preview with Tailwind classes inline below */}
        </div>
        <div className="bg-white p-6 transition-all duration-700">
          <div className={`pb-4 border-b`}>
            <h1 className={`text-3xl font-bold text-${data.color}-600`}>{data.name}</h1>
            <p className="mt-2 text-gray-700">{data.description}</p>
          </div>

          <div className="mt-6 grid gap-6">
            <section>
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-2 text-gray-700">{data.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Services</h2>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {(data.services||[]).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-2 text-gray-700">{data.contact}</p>
            </section>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <button onClick={handleDownload} className="px-4 py-2 bg-green-600 text-white rounded">Download Site</button>
        <button onClick={handleShare} className="px-4 py-2 bg-indigo-600 text-white rounded">Share Link</button>
        <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-200 rounded">Back</button>
      </div>
      {shareLink && (
        <div className="mt-2 p-3 bg-gray-100 rounded-lg text-center text-blue-700 font-semibold shadow">
          <span>Shareable Link:</span>
          <input
            className="ml-2 px-2 py-1 rounded border border-blue-300 bg-white text-blue-700 font-mono w-2/3"
            value={shareLink}
            readOnly
            onFocus={e => e.target.select()}
          />
        </div>
      )}
    </div>
  )
}
