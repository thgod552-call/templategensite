
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'templategen_user';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem(STORAGE_KEY);
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email }));
    navigate('/');
  }

  function handleSignup(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill all required fields.');
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email }));
    navigate('/');
  }

  function handleGoogleAuth() {
    alert('Google authentication is not implemented in this demo.');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 animate-fadein">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-2 drop-shadow-lg">{isSignup ? 'Sign Up' : 'Login to your account'}</h1>
        <p className="text-center text-gray-500 mb-6">{isSignup ? 'Create your account to get started' : 'Enter your details to continue'}</p>
        {isSignup ? (
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-300" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-300" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-300" placeholder="Password" />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="w-full py-3 text-lg font-bold bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2">Sign Up <span className="text-xl">→</span></button>
            <button type="button" onClick={handleGoogleAuth} className="w-full py-3 text-lg font-bold bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 mt-2">Sign up with Google</button>
            <div className="text-center mt-4 text-gray-500">
              Already have an account?{' '}
              <button type="button" className="text-indigo-600 underline" onClick={() => { setIsSignup(false); setError(''); }}>Login</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-300" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 text-lg focus:ring-2 focus:ring-indigo-400 transition-all duration-300" placeholder="Password" />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="w-full py-3 text-lg font-bold bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2">Login <span className="text-xl">→</span></button>
            <button type="button" onClick={handleGoogleAuth} className="w-full py-3 text-lg font-bold bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 mt-2">Login with Google</button>
            <div className="text-center mt-4 text-gray-500">
              Don't have an account?{' '}
              <button type="button" className="text-indigo-600 underline" onClick={() => { setIsSignup(true); setError(''); }}>Sign Up</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
