import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (value) => {
    if (!value.trim()) return 'Email is required'
    if (!EMAIL_REGEX.test(value)) return 'Enter a valid email address'
    return ''
  }

  const validatePassword = (value) => {
    if (!value) return 'Password is required'
    if (value.length < MIN_PASSWORD_LENGTH) return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
    if (!PASSWORD_REGEX.test(value)) return 'Password must be letters or numbers only'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const eErr = validateEmail(email)
    const pErr = validatePassword(password)
    setEmailError(eErr)
    setPasswordError(pErr)
    
    if (!eErr && !pErr) {
      setIsLoading(true)
      setTimeout(() => {
        onLogin()
      }, 1000)
    }
  }

  const handleSocialLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      onLogin()
    }, 800)
  }

  return (
    <div className="login-container min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background with Travel Theme */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md transition duration-300">
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/40 to-blue-500/40 border border-cyan-400/60 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError(validateEmail(e.target.value))
                  }}
                  onBlur={() => setEmailError(validateEmail(email))}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 focus:bg-white/15 transition"
                />
              </div>
              {emailError && (
                <p className="mt-2 text-sm text-amber-300/90 font-medium">
                  {emailError}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setPasswordError(validatePassword(e.target.value))
                  }}
                  onBlur={() => setPasswordError(validatePassword(password))}
                  placeholder="Min 4 letters or numbers"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 focus:bg-white/15 transition"
                />
              </div>
              {passwordError && (
                <p className="mt-2 text-sm text-amber-300/90 font-medium">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In to Explore'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleSocialLogin}
              disabled={isLoading}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 hover:scale-[1.03] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button
              type="button"
              onClick={handleSocialLogin}
              disabled={isLoading}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 hover:scale-[1.03] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-xs text-white/50 mt-6">
            Demo credentials: Any email format • Password: 1234
          </p>
        </div>
      </div>
    </div>
  )
}
