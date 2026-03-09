import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-100 ${className}`}
      aria-label="Toggle theme"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-slate-900/5 text-slate-700 dark:bg-white/10 dark:text-slate-100">
        {theme === 'dark' ? (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 18a6 6 0 110-12 6 6 0 010 12zm0-16a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 5.64a1 1 0 011.42 0l.7.7A1 1 0 114.93 7.76l-.7-.7a1 1 0 010-1.42zm14.85 14.85a1 1 0 011.42 0l.7.7a1 1 0 11-1.41 1.41l-.7-.7a1 1 0 010-1.41zM2 13a1 1 0 110-2h1a1 1 0 110 2H2zm19 0a1 1 0 110-2h1a1 1 0 110 2h-1zM4.22 18.36a1 1 0 010-1.42l.7-.7A1 1 0 116.34 17.6l-.7.7a1 1 0 01-1.42 0zm14.85-14.85a1 1 0 010-1.42l.7-.7a1 1 0 111.41 1.41l-.7.7a1 1 0 01-1.41 0z" />
          </svg>
        ) : (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.64 13a1 1 0 00-1.05-.14A8 8 0 1111.14 2.4a1 1 0 00-1.19-1.19A10 10 0 1022 14.19a1 1 0 00-.36-1.19z" />
          </svg>
        )}
      </span>
      <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
