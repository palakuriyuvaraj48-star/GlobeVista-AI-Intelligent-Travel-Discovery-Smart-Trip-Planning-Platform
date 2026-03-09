const dishes = [
  {
    id: 1,
    name: "Hyderabadi Biryani",
    city: "Hyderabad",
    description: "Aromatic basmati rice layered with tender meat, saffron, and slow-cooked spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1200",
  },
  {
    id: 2,
    name: "Goan Prawn Curry",
    city: "Goa",
    description: "A coastal curry with coconut, tamarind, and fresh prawns served best with rice.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200",
  },
  {
    id: 3,
    name: "Mysore Masala Dosa",
    city: "Mysuru",
    description: "Crisp dosa spread with spiced chutney and filled with flavorful potato masala.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1200",
  },
  {
    id: 4,
    name: "Amritsari Kulcha",
    city: "Amritsar",
    description: "Tandoor-baked bread stuffed with spiced potato and served with chole and pickle.",
    image: "https://images.unsplash.com/photo-1626132647523-66cb2e7d5f4d?w=1200",
  },
  {
    id: 5,
    name: "Kolkata Kathi Roll",
    city: "Kolkata",
    description: "Paratha-wrapped skewered fillings with chutney, onions, and a sharp spice kick.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200",
  },
  {
    id: 6,
    name: "Madurai Jigarthanda",
    city: "Madurai",
    description: "A chilled dessert drink with milk, almond gum, ice cream, and house-made syrup.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200",
  },
];

export default function FamousDishes() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-100">Famous Dishes</p>
          <h1 className="mt-3 text-4xl font-bold">Taste the signature dishes behind every destination</h1>
          <p className="mt-3 max-w-2xl text-amber-100">
            Food discovery now feels like part of the booking journey instead of a placeholder page.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article key={dish.id} className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
              <img src={dish.image} alt={dish.name} loading="lazy" className="h-56 w-full object-cover" />
              <div className="space-y-3 p-5">
                <h2 className="text-xl font-semibold text-slate-900">{dish.name}</h2>
                <p className="text-sm font-medium text-orange-600">{dish.city}</p>
                <p className="text-sm leading-6 text-slate-600">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
