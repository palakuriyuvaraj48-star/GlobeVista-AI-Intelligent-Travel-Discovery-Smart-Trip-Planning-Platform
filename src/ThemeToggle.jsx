import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-full bg-white/20 px-3 py-2 text-sm font-semibold transition hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30"
    >
      {dark ? '🌙 Dark Mode' : '☀ Light Mode'}
    </button>
  )
}
