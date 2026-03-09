export default function TravelOptions({ place, onBook }) {
  return (
    <section id="travel" className="scroll-mt-36 space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Travel Options to reach {place.name}</h2>
        <p className="text-sm text-slate-300">Flexible routes with premium support.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {place.travelOptions.map((option) => (
          <article
            key={option.id}
            className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 transition duration-300 hover:shadow-xl"
          >
            <div className="mb-3 inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-200">
              {option.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{option.mode}</h3>
            <p className="text-sm text-slate-300">Duration: {option.duration}</p>
            <p className="text-sm text-slate-300">{option.tripType}</p>
            <p className="mt-2 text-sm font-semibold text-cyan-300">
              Starting {"\u20B9"}
              {option.startingPrice.toLocaleString("en-IN")}
            </p>
            <button
              type="button"
              onClick={() =>
                onBook({
                  id: `${place.id}-${option.id}`,
                  title: `${place.name} ${option.mode} Transfer`,
                  basePrice: option.startingPrice,
                  duration: option.duration,
                  nights: 1,
                  destinations: [place.name],
                })
              }
              className="mt-3 h-9 w-full rounded-lg bg-indigo-600 text-xs font-semibold text-white transition duration-300 hover:bg-indigo-700"
            >
              BOOK NOW
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
