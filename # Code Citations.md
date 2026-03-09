# Code Citations

## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: LGPL-3.0
https://github.com/Frikanalen/frikanalen/blob/b4c4e118974aac3116f24fffaafcb29fdcf65782/packages/frontend/modules/ui/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: MIT
https://github.com/JamesJ0717/personal-site/blob/26b9b44d04a61a4d696508b133af5f18a0a9998f/src/components/layout.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/ckpd84/design/blob/392afb8035ae28e245cac1217cbb9e99e6692864/components/ui/icons/Mail.js

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/yoginderkumar/kiraya-web/blob/39a6d0778c8b6472a0e559c2a5cedb6aa80ec0d3/libs/kiraya-ui/src/lib/Icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: unknown
https://github.com/guitarjaku/Saypilot/blob/ae7c2c72609c0b47c0345e238b4c4da6e5251078/pages/influencer/index.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) =>
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: MIT
https://github.com/carlos060798/PortafolioAstro/blob/f4311af339e8c9845b847bf1154ce68739eebb50/src/components/Hero.jsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" 
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35
```


## License: BSD-3-Clause
https://github.com/dart-archive/polymer_elements/blob/c21587c6f0d8d7b8d2030ba76ca824e37beb3e8b/lib/src/google-signin/google-icons.html

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35
```


## License: unknown
https://github.com/rix1/rix1-builds/blob/97529544af808984cc541fe69653fafae1f0b0a8/apps/physical-100/src/components/icons.tsx

```
```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 4
const PASSWORD_REGEX = /^[a-zA-Z0-9]{4,}$/

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      onLogin()
    }
  }

  const handleGoogleLogin = () => {
    onLogin()
  }

  const handleFacebookLogin = () => {
    onLogin()
  }

  return (
    <div className="login-page min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      <div className="login-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
          alt="travel background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="login-card relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-400/50 flex items-center justify-center mb-5 shadow-lg">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l6.5-3.5M12 11l-6.5-3.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white text-center">NextGen Travel Explorer</h1>
            <p className="text-cyan-200/90 text-sm mt-2 font-light tracking-wide">Explore • Discover • Travel Smart</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="login-email" className="block text-sm font-semibold text-white/90 mb-2.5">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  id="login-email"
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
              {emailError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{emailError}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="login-password" className="block text-sm font-semibold text-white/90 mb-2.5">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  id="login-password"
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
              {passwordError && <p className="mt-2 text-sm text-amber-300/90 font-medium">{passwordError}</p>}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-300"
            >
              Sign In to Explore
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-6"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-b from-slate-950/80 to-slate-900/80 text-white/60 font-medium">Or connect with</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/12 border border-white/25 text-white font-semibold hover:bg-white/15 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35
```

