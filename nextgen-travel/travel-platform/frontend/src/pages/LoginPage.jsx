import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, register } = useAuth()

  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'register') await register({ name, email, password })
      else await login({ email, password })
      navigate('/')
    } catch (err) {
      setError(err?.message || 'Auth failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl">
        <h1 className="text-2xl font-extrabold text-white">Travel Platform</h1>
        <p className="mt-1 text-sm font-semibold text-white/60">JWT authentication with MongoDB.</p>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 rounded-2xl px-4 py-2 text-sm font-extrabold transition ${mode === 'login' ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white/80'}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`flex-1 rounded-2xl px-4 py-2 text-sm font-extrabold transition ${mode === 'register' ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white/80'}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={submit} className="mt-5 space-y-3">
          {mode === 'register' ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-indigo-500/30"
              required
            />
          ) : null}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-indigo-500/30"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-indigo-500/30"
            required
          />

          {error ? <p className="text-sm font-semibold text-rose-300">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-extrabold text-white transition disabled:opacity-70"
          >
            {loading ? 'Please wait…' : mode === 'register' ? 'Create account' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
