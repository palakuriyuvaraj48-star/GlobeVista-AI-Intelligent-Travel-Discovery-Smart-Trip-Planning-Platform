import Card from '../components/Card'
import VoiceAssistantWidget from '../components/VoiceAssistant'

export default function VoiceAssistant() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487045876428-df0c4e8b1736?w=1920"
          alt="Voice Assistant"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Smart Assistant</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Voice Assistant</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Ask naturally. Get intelligent travel guidance.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Card className="p-6">
          <p className="text-sm font-extrabold text-slate-900 dark:text-white">Try voice prompts</p>
          <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">Suggest hotel in Jaipur</div>
            <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">Best time to visit Paris</div>
            <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">Calculate budget for 5 days in Bali</div>
            <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">Show dress code for palace</div>
          </div>
        </Card>
      </section>

      <VoiceAssistantWidget />
    </div>
  )
}
