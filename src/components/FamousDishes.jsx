import TravelCard from "./TravelCard";

const dishes = [
  {
    id: 1,
    name: "Hyderabadi Biryani",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    location: "Hyderabad, India",
    rating: 4.9,
    price: 420,
    description: "Slow-cooked basmati rice with saffron and tender meat.",
  },
  {
    id: 2,
    name: "Ramen Flight",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800",
    location: "Tokyo, Japan",
    rating: 4.7,
    price: 680,
    description: "Four regional broths served tasting-style.",
  },
  {
    id: 3,
    name: "Neapolitan Pizza",
    image: "https://images.unsplash.com/photo-1548365328-8b849e6f8b6a?w=800",
    location: "Naples, Italy",
    rating: 4.8,
    price: 520,
    description: "Wood-fired pizza with buffalo mozzarella and basil.",
  },
  {
    id: 4,
    name: "Tapas Trail",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    location: "Seville, Spain",
    rating: 4.6,
    price: 350,
    description: "Curated small plates with local pairings.",
  },
  {
    id: 5,
    name: "Pho Night",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    location: "Hanoi, Vietnam",
    rating: 4.7,
    price: 280,
    description: "Aromatic beef broth with fresh herbs and rice noodles.",
  },
  {
    id: 6,
    name: "Taco Mesa",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
    location: "Mexico City, Mexico",
    rating: 4.8,
    price: 260,
    description: "Street tacos with handmade tortillas and salsas.",
  },
  {
    id: 7,
    name: "Coastal Thali",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    location: "Kerala, India",
    rating: 4.7,
    price: 310,
    description: "Seafood thali with coconut-forward flavors.",
  },
  {
    id: 8,
    name: "Pastry Atelier",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800",
    location: "Paris, France",
    rating: 4.9,
    price: 590,
    description: "Signature desserts and seasonal patisserie.",
  },
];

export default function FamousDishes() {
  return (
    <section className="px-10 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Food Experiences</h2>
          <p className="text-gray-500 mt-2">
            Taste the most iconic foods from every region.
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:shadow-md">
          View All Food Tours
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dishes.map((dish) => (
          <TravelCard
            key={dish.id}
            title={dish.name}
            image={dish.image}
            location={dish.location}
            description={dish.description}
            category="Cuisine"
            rating={dish.rating}
            price={dish.price}
          />
        ))}
      </div>
    </section>
  );
}
