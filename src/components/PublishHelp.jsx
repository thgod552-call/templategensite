import React from 'react'

export default function PublishHelp() {
  return (
    <div className="max-w-2xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">How to Publish Your Website</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>Click <b>Download Site</b> after generating your website to get the HTML file.</li>
        <li>Go to <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Netlify Drop</a> and drag your HTML file to instantly publish it for free.</li>
        <li>Or, use <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Vercel</a> or <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub Pages</a> for more options.</li>
        <li>Share your live site link with anyone!</li>
      </ol>
      <p className="mt-4 text-sm text-gray-500">Need help? Ask for step-by-step publishing instructions for your favorite platform.</p>
    </div>
  )
}
