function normalizeApiBaseUrl(raw) {
  const base = (raw || '').trim()
  if (!base) return 'http://localhost:5000/api'

  const withoutTrailingSlash = base.endsWith('/') ? base.slice(0, -1) : base
  return withoutTrailingSlash.endsWith('/api') ? withoutTrailingSlash : `${withoutTrailingSlash}/api`
}

const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL)

export async function apiFetch(path, { token, method = 'GET', body } = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const msg = data?.message || 'Request failed'
    const err = new Error(msg)
    err.status = res.status
    err.data = data
    throw err
  }

  return data
}

export const authApi = {
  register: (payload) => apiFetch('/auth/register', { method: 'POST', body: payload }),
  login: (payload) => apiFetch('/auth/login', { method: 'POST', body: payload }),
}

export const userApi = {
  profile: (token) => apiFetch('/users/profile', { token }),
  updatePreferences: (token, preferences) => apiFetch('/users/preferences', { token, method: 'PUT', body: { preferences } }),
  toggleFavorite: (token, favorite) => apiFetch('/users/favorites', { token, method: 'POST', body: { favorite } }),
}

export const bookingsApi = {
  create: (token, payload) => apiFetch('/bookings', { token, method: 'POST', body: payload }),
  list: (token) => apiFetch('/bookings', { token }),
  remove: (token, id) => apiFetch(`/bookings/${id}`, { token, method: 'DELETE' }),
}

export const destinationsApi = {
  list: () => apiFetch('/destinations'),
  create: (token, payload) => apiFetch('/destinations', { token, method: 'POST', body: payload }),
}
