import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { authApi, userApi } from '../lib/api'

const AuthContext = createContext(null)

const TOKEN_KEY = 'tp_token'
const USER_KEY = 'tp_user'

function safeParse(json) {
  try {
    return JSON.parse(json)
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = localStorage.getItem(TOKEN_KEY) || ''
    const u = safeParse(localStorage.getItem(USER_KEY) || '')
    setToken(t)
    setUser(u)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    else localStorage.removeItem(TOKEN_KEY)
  }, [token])

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
    else localStorage.removeItem(USER_KEY)
  }, [user])

  const login = useCallback(async ({ email, password }) => {
    const { token: nextToken, user: nextUser } = await authApi.login({ email, password })
    setToken(nextToken)
    setUser(nextUser)
    return nextUser
  }, [])

  const register = useCallback(async ({ name, email, password }) => {
    const { token: nextToken, user: nextUser } = await authApi.register({ name, email, password })
    setToken(nextToken)
    setUser(nextUser)
    return nextUser
  }, [])

  const logout = useCallback(() => {
    setToken('')
    setUser(null)
  }, [])

  const refreshProfile = useCallback(async () => {
    if (!token) return null
    const { user: fresh } = await userApi.profile(token)
    setUser(fresh)
    return fresh
  }, [token])

  const value = useMemo(
    () => ({ token, user, loading, login, register, logout, refreshProfile, isAuthed: Boolean(token) }),
    [token, user, loading, login, register, logout, refreshProfile]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
