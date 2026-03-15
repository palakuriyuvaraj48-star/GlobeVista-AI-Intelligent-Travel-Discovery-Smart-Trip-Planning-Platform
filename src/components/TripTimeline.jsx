export default function TripTimeline({ title, subtitle, steps }) {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-blue-50 p-6 shadow-sm">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Journey Plan</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h2>
          {subtitle ? <p className="mt-2 text-sm text-slate-600">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md">
                {step.icon}
              </div>
              {index !== steps.length - 1 ? <div className="h-full w-px bg-teal-200" /> : null}
            </div>
            <div className="flex-1 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{step.title}</p>
              <p className="mt-1 text-sm text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
