import TravelCard from "./TravelCard";
import { experiences } from "../data/experiences";

export default function ExperiencesMarketplace() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Experiences Marketplace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {experiences.slice(0, 12).map((exp) => (
          <TravelCard
            key={exp.id}
            title={exp.name}
            image={exp.image}
            location={exp.location}
            description={exp.description}
            category="Experience"
            rating={exp.rating}
            price={exp.price}
          />
        ))}
      </div>
    </section>
  );
}
