import React, { useState } from 'react'

const monthlyPlans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for testing',
    features: [
      'Create website with AI',
      'Edit with AI',
      'Preview website',
      'No publishing',
    ],
    popular: false,
  },
  {
    name: 'Basic',
    price: 12,
    description: 'Billed monthly',
    features: [
      'Single page website',
      'One website',
      '100 monthly AI edits',
      'Hosting included',
      'Free logo',
      '$1 custom domain*',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 24,
    description: 'Billed monthly',
    features: [
      'Many pages',
      'One website',
      '300 monthly AI edits',
      'Hosting included',
      'Free logo',
      '$1 custom domain*',
    ],
    popular: true,
  },
]

const annualPlans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for testing',
    features: [
      'Create website with AI',
      'Edit with AI',
      'Preview website',
      'No publishing',
    ],
    popular: false,
  },
  {
    name: 'Basic',
    price: 10,
    description: 'Billed annually at $120/year',
    features: [
      'Single page website',
      'One website',
      '100 monthly AI edits',
      'Hosting included',
      'Free logo',
      '$1 custom domain*',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 20,
    description: 'Billed annually at $240/year',
    features: [
      'Many pages',
      'One website',
      '300 monthly AI edits',
      'Hosting included',
      'Free logo',
      '$1 custom domain*',
    ],
    popular: true,
  },
]

export default function Premium() {
  const [billing, setBilling] = useState('monthly')
  const plans = billing === 'monthly' ? monthlyPlans : annualPlans;
  return (
  <div className="min-h-screen w-full flex flex-col items-center justify-center py-0 px-0 transition-all duration-700 animate-fadein" style={{background: 'linear-gradient(180deg, #233a7b 0%, #2d3997 100%)'}}>
  <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg transition-all duration-700">Choose Your Perfect <span className="text-blue-300">Plan</span></h1>
  <p className="text-lg text-blue-100 text-center mb-4 transition-all duration-700">Build stunning websites with AI-powered tools. Start for free or unlock premium features with our paid plans.</p>
  <div className="flex justify-center mb-4">
        <div className="bg-blue-950 bg-opacity-60 rounded-full flex gap-2 p-2">
          <button onClick={() => setBilling('monthly')} className={`px-4 py-2 rounded-full font-semibold text-white ${billing==='monthly' ? 'bg-blue-600' : ''} transition-all duration-300`}>Monthly</button>
          <button onClick={() => setBilling('annual')} className={`px-4 py-2 rounded-full font-semibold text-white ${billing==='annual' ? 'bg-blue-600' : ''} transition-all duration-300`}>Annual</button>
          <span className="px-4 py-2 rounded-full font-semibold text-blue-300">2 months free</span>
        </div>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-2 md:px-8 justify-center items-center">
        {plans.map((plan, idx) => (
          <div key={plan.name}
            className={`relative flex flex-col items-center p-8 rounded-2xl shadow-lg bg-white ${plan.popular ? 'border-2 border-blue-400 z-10 scale-105 md:scale-110 shadow-2xl' : 'border border-blue-100'} transform transition-all duration-700 hover:scale-105 animate-fadein`}
            style={plan.popular ? { marginTop: '-32px', marginBottom: '-32px', background: '#fff' } : {}}>
            {plan.popular && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-base shadow-lg">Most Popular</span>
            )}
            <h2 className="text-2xl font-bold mb-2 text-blue-900">{plan.name}</h2>
            <div className="text-4xl font-extrabold text-blue-600 mb-2">${plan.price}<span className="text-base font-normal text-gray-500">/month</span></div>
            {plan.description && <div className="text-gray-500 mb-2 text-base">{plan.description}</div>}
            <ul className="mb-6 space-y-2 text-left w-full">
              {plan.features.map((f, i) => (
                <li key={i} className={`flex items-center gap-2 text-base`}> 
                  {f.startsWith('No') ? (
                    <span className="text-red-400">✗</span>
                  ) : (
                    <span className="text-blue-500">✓</span>
                  )}
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 text-lg font-bold bg-[#297cff] text-white rounded-xl shadow hover:bg-blue-600 transition-all duration-300 mt-2">Get Started Now</button>
          </div>
        ))}
      </div>
  <div className="mt-4 text-center text-gray-300 text-sm">
        Building sites for clients? <a href="#" className="underline text-blue-200">Learn about agency benefits</a>
      </div>
    </div>
  )
}
