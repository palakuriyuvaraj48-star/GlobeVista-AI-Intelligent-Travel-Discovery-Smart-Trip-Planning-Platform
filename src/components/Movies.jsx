import TravelCard from "./TravelCard";

const cinemaExperiences = [
  {
    id: 1,
    name: "IMAX Premiere Night",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800",
    location: "New York, USA",
    rating: 4.8,
    price: 1200,
    description: "Front-row access to opening night screenings.",
  },
  {
    id: 2,
    name: "Art House Marathon",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800",
    location: "Paris, France",
    rating: 4.6,
    price: 760,
    description: "Curated classics with filmmaker Q&A sessions.",
  },
  {
    id: 3,
    name: "Drive-In Retro",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800",
    location: "Los Angeles, USA",
    rating: 4.7,
    price: 540,
    description: "Classic films under the stars with diner snacks.",
  },
  {
    id: 4,
    name: "Rooftop Cinema",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800",
    location: "Singapore",
    rating: 4.5,
    price: 880,
    description: "Open-air screenings with skyline views.",
  },
  {
    id: 5,
    name: "Festival Pass",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800",
    location: "Toronto, Canada",
    rating: 4.9,
    price: 2100,
    description: "Access to the top premieres and workshops.",
  },
  {
    id: 6,
    name: "Luxury Cinema Suites",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800",
    location: "Dubai, UAE",
    rating: 4.8,
    price: 1600,
    description: "Private suites with chef-curated menus.",
  },
  {
    id: 7,
    name: "Indie Spotlight",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800",
    location: "Berlin, Germany",
    rating: 4.6,
    price: 620,
    description: "Emerging filmmakers and underground premieres.",
  },
  {
    id: 8,
    name: "Classic Noir Night",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800",
    location: "Chicago, USA",
    rating: 4.7,
    price: 510,
    description: "Black-and-white screenings with live jazz.",
  },
];

export default function Movies() {
  return (
    <section className="px-10 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Movies & Cinema</h2>
          <p className="text-gray-500 mt-2">
            Catch the latest movies and cinema experiences.
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:shadow-md">
          See Showtimes
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cinemaExperiences.map((movie) => (
          <TravelCard
            key={movie.id}
            title={movie.name}
            image={movie.image}
            location={movie.location}
            description={movie.description}
            category="Cinema"
            rating={movie.rating}
            price={movie.price}
          />
        ))}
      </div>
    </section>
  );
}
