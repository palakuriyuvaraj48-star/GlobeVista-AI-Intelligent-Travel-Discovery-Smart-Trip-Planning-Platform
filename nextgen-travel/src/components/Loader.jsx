export default function Loader() {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="flex items-center gap-3 rounded-3xl border border-slate-200/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/40">
        <svg className="w-6 h-6 animate-spin text-cyan-500" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
        <span className="text-slate-700 font-semibold dark:text-slate-200">Loading...</span>
      </div>
    </div>
  )
}
