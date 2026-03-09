const palaces = [
  {
    id: 1,
    name: "Topkapi Palace",
    country: "Turkey",
    description: "An Ottoman landmark overlooking the Bosphorus with imperial courtyards and treasury halls.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200",
  },
  {
    id: 2,
    name: "Grand Palace",
    country: "Thailand",
    description: "Bangkok's richly decorated royal complex known for gilded spires and temple architecture.",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200",
  },
  {
    id: 3,
    name: "Mysore Palace of Europe",
    country: "Romania",
    description: "Peles Castle delivers palace-like grandeur, alpine surroundings, and ornate royal interiors.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
  },
  {
    id: 4,
    name: "Royal Palace of Madrid",
    country: "Spain",
    description: "A monumental European residence with ceremonial halls, grand staircases, and art collections.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200",
  },
  {
    id: 5,
    name: "Catherine Palace",
    country: "Russia",
    description: "An opulent baroque estate celebrated for its blue facade and the legendary Amber Room.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
  },
  {
    id: 6,
    name: "Versailles Palace",
    country: "France",
    description: "The palace that defines grandeur, featuring mirrored galleries, formal gardens, and royal apartments.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
  },
];

export default function ForeignPalaces() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-indigo-700 to-sky-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">Foreign Palaces</p>
          <h1 className="mt-3 text-4xl font-bold">Global palace picks for luxury-led itineraries</h1>
          <p className="mt-3 max-w-2xl text-sky-100">
            Add international royal landmarks to the same premium travel browsing experience as hotels and events.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {palaces.map((palace) => (
            <article key={palace.id} className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
              <img src={palace.image} alt={palace.name} loading="lazy" className="h-56 w-full object-cover" />
              <div className="space-y-3 p-5">
                <h2 className="text-xl font-semibold text-slate-900">{palace.name}</h2>
                <p className="text-sm font-medium text-sky-700">{palace.country}</p>
                <p className="text-sm leading-6 text-slate-600">{palace.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
