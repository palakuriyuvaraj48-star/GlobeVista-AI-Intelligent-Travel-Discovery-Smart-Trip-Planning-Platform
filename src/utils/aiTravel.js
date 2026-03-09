const basePlans = {
  Goa: [
    "Arrival and resort check-in",
    "Baga Beach walk and sunset cafe",
    "Calangute water sports",
    "Old Goa churches and heritage trail",
    "Dudhsagar day trip",
    "Beach relaxation and departure",
  ],
  Jaipur: [
    "Arrival and palace hotel check-in",
    "Amber Fort and Jal Mahal",
    "City Palace and Hawa Mahal",
    "Bapu Bazaar and local dinner",
    "Nahargarh sunset and departure prep",
  ],
  Kerala: [
    "Arrival in Kochi and waterfront stroll",
    "Fort Kochi food trail",
    "Alleppey backwater cruise",
    "Munnar tea estate visit",
    "Ayurveda wellness and departure",
  ],
  Bali: [
    "Arrival in Seminyak and beach sunset",
    "Ubud temples and rice terraces",
    "Nusa Penida island day tour",
    "Cafe hopping and spa session",
    "Beach club and departure",
  ],
};

const interestActivities = {
  nature: ["Waterfall visit", "Scenic viewpoint stop", "Eco trail or garden walk"],
  food: ["Local food tour", "Signature restaurant reservation", "Night market tasting"],
  adventure: ["Outdoor adventure slot", "Guided thrill activity", "Sunset action experience"],
  culture: ["Heritage museum", "Old town walk", "Landmark monument visit"],
};

export function generateTripPlan({
  destination = "",
  days = 3,
  budget = 30000,
  interests = [],
  travelType = "solo",
}) {
  const normalizedDestination = destination.trim() || "Goa";
  const base = basePlans[normalizedDestination] || [
    `Arrival in ${normalizedDestination}`,
    `${normalizedDestination} city discovery`,
    "Signature sightseeing experience",
    "Leisure and departure",
  ];

  const chosenInterestActivities = interests.flatMap((interest) => interestActivities[interest] || []);
  const itinerary = Array.from({ length: Number(days) || 1 }, (_, index) => {
    const baseItem = base[index] || `${normalizedDestination} flexible exploration`;
    const extra =
      chosenInterestActivities[index % Math.max(1, chosenInterestActivities.length)] || "Free exploration";

    return {
      day: `Day ${index + 1}`,
      title: baseItem,
      summary: `${travelType[0].toUpperCase()}${travelType.slice(1)}-friendly plan within approximately Rs ${Math.round(
        budget / Math.max(1, Number(days) || 1)
      ).toLocaleString("en-IN")} per day`,
      activities: [baseItem, extra, "Dinner and rest"],
    };
  });

  return itinerary;
}

export function getDestinationRecommendations({
  budget = "medium",
  climate = "moderate",
  interests = [],
  interest = "",
  weather = "",
}) {
  const selectedClimate = weather || climate;
  const selectedInterest = interest || interests[0] || "beach";

  const destinations = [
    {
      id: "goa",
      name: "Goa",
      country: "India",
      climate: "tropical",
      interests: ["beach", "food"],
      budget: "medium",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Ideal for coastal stays, nightlife, and seafood experiences.",
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      climate: "tropical",
      interests: ["beach", "culture", "adventure"],
      budget: "medium",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      description: "A balanced pick for island relaxation, temples, and scenic adventures.",
    },
    {
      id: "phuket",
      name: "Phuket",
      country: "Thailand",
      climate: "tropical",
      interests: ["beach", "adventure", "food"],
      budget: "low",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      description: "Great for value-driven beach breaks with water sports and food trails.",
    },
    {
      id: "maldives",
      name: "Maldives",
      country: "Maldives",
      climate: "tropical",
      interests: ["beach", "luxury"],
      budget: "luxury",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
      description: "Best for premium overwater stays, romantic escapes, and ocean experiences.",
    },
    {
      id: "manali",
      name: "Manali",
      country: "India",
      climate: "cold",
      interests: ["adventure", "moderate"],
      budget: "low",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      description: "A strong match for mountain trips, cool weather, and outdoor activities.",
    },
    {
      id: "jaipur",
      name: "Jaipur",
      country: "India",
      climate: "moderate",
      interests: ["culture", "food"],
      budget: "medium",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      description: "Strong for heritage travel, city discovery, and curated local dining.",
    },
  ];

  const budgetOrder = { low: 1, medium: 2, luxury: 3 };
  const currentBudget = budgetOrder[budget] || 2;

  const filtered = destinations.filter((destination) => {
    const destinationBudget = budgetOrder[destination.budget] || 2;
    const budgetMatch = budget === "luxury" ? destinationBudget >= 2 : destinationBudget <= currentBudget;
    const climateMatch =
      selectedClimate === "warm" ||
      selectedClimate === "cool"
        ? destination.climate === (selectedClimate === "cool" ? "cold" : "tropical")
        : selectedClimate === "moderate"
        ? destination.climate === "moderate"
        : destination.climate === selectedClimate;
    const interestMatch = destination.interests.includes(selectedInterest);

    return budgetMatch && climateMatch && interestMatch;
  });

  return (filtered.length > 0 ? filtered : destinations.slice(0, 4)).slice(0, 4);
}

export function getChatReply(message) {
  const text = message.toLowerCase();
  if (text.includes("jaipur") && text.includes("hotel")) {
    return "Top Jaipur stays: Rambagh Palace, heritage city hotels, and centrally located palace-view stays.";
  }
  if (text.includes("best time") && text.includes("paris")) {
    return "Best time to visit Paris is April to June and September to October for mild weather and manageable crowds.";
  }
  if (text.includes("budget") && text.includes("kerala")) {
    return "For a budget Kerala trip, combine Kochi, Alleppey, and Munnar with mid-range stays and local transport.";
  }
  if (text.includes("goa")) {
    return "Goa works best for beach breaks, nightlife, seafood trails, and short luxury getaways.";
  }
  return "I can help with destinations, hotels, budgets, seasons, and itineraries. Try asking for a city, trip type, or budget.";
}
