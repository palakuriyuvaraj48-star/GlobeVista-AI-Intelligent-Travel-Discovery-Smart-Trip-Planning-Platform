export const themes = [
  {
    name: "Beachside Escapes",
    description: "Sun, sand, and premium coastal stays with curated activities.",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
    packages: [
      {
        id: "beach-1",
        title: "Goa + Gokarna Seaside Trail",
        duration: "5D/4N",
        durationDays: 5,
        destinations: ["Goa", "Gokarna"],
        rating: 4.7,
        popularity: 94,
        basePrice: 18990,
        inclusions: ["Beachfront hotel", "Breakfast", "Airport transfer", "Water sports pass"],
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
      },
      {
        id: "beach-2",
        title: "Andaman Coral Discovery",
        duration: "6D/5N",
        durationDays: 6,
        destinations: ["Andaman", "Havelock"],
        rating: 4.8,
        popularity: 91,
        basePrice: 26990,
        inclusions: ["Resort stay", "Island ferry", "Snorkeling", "Daily breakfast"],
        image:
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
      },
      {
        id: "beach-3",
        title: "Maldives Overwater Indulgence",
        duration: "4D/3N",
        durationDays: 4,
        destinations: ["Maldives"],
        rating: 4.9,
        popularity: 97,
        basePrice: 54990,
        inclusions: ["Overwater villa", "Dinner cruise", "Seaplane transfer"],
        image:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
      },
    ],
  },
  {
    name: "Hilly Hideaways",
    description: "Cool weather mountain retreats with scenic routes and cozy stays.",
    heroImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600",
    packages: [
      {
        id: "hill-1",
        title: "Himachal Snowline Journey",
        duration: "5D/4N",
        durationDays: 5,
        destinations: ["Manali", "Solang", "Kasol"],
        rating: 4.6,
        popularity: 89,
        basePrice: 17990,
        inclusions: ["Mountain hotel", "Cab transfer", "Bonfire evening", "Breakfast"],
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
      },
      {
        id: "hill-2",
        title: "Sikkim and Darjeeling Panorama",
        duration: "6D/5N",
        durationDays: 6,
        destinations: ["Gangtok", "Darjeeling"],
        rating: 4.7,
        popularity: 88,
        basePrice: 21990,
        inclusions: ["Hill-view rooms", "Toy train pass", "Sightseeing", "Breakfast and dinner"],
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
      },
      {
        id: "hill-3",
        title: "Uttarakhand Valley Explorer",
        duration: "4D/3N",
        durationDays: 4,
        destinations: ["Mussoorie", "Rishikesh"],
        rating: 4.5,
        popularity: 85,
        basePrice: 14990,
        inclusions: ["Hotel stay", "Local transfer", "Adventure add-on credits"],
        image:
          "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1200",
      },
    ],
  },
  {
    name: "Nature Getaways",
    description: "Lakes, forests, and eco experiences for restorative travel.",
    heroImage:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1600",
    packages: [
      {
        id: "nature-1",
        title: "Kerala Backwaters Retreat",
        duration: "5D/4N",
        durationDays: 5,
        destinations: ["Alleppey", "Munnar", "Kochi"],
        rating: 4.8,
        popularity: 92,
        basePrice: 19990,
        inclusions: ["Houseboat stay", "Resort stay", "Breakfast", "Sightseeing"],
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
      },
      {
        id: "nature-2",
        title: "Sri Lanka Wildlife Circuit",
        duration: "6D/5N",
        durationDays: 6,
        destinations: ["Colombo", "Yala", "Kandy"],
        rating: 4.6,
        popularity: 87,
        basePrice: 32990,
        inclusions: ["Safari pass", "Premium hotels", "Airport transfers"],
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
      },
      {
        id: "nature-3",
        title: "Contemporary Bali Green Escape",
        duration: "5D/4N",
        durationDays: 5,
        destinations: ["Bali", "Ubud"],
        rating: 4.7,
        popularity: 90,
        basePrice: 37990,
        inclusions: ["Boutique villa", "Temple trails", "Cultural dinner"],
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
      },
    ],
  },
];

export const findThemeByName = (themeName) =>
  themes.find((theme) => theme.name.toLowerCase() === decodeURIComponent(themeName || "").toLowerCase());

export const findPackageById = (packageId) =>
  themes.flatMap((theme) => theme.packages).find((item) => item.id === packageId);

export const getDestinationMeta = (destinationName) => {
  const name = decodeURIComponent(destinationName || "");
  const relatedPackages = themes
    .flatMap((theme) => theme.packages.map((pkg) => ({ ...pkg, themeName: theme.name })))
    .filter((pkg) => pkg.destinations.some((destination) => destination.toLowerCase() === name.toLowerCase()));

  return {
    name,
    description:
      relatedPackages.length > 0
        ? `${name} is featured across curated themed holidays with premium stays and local experiences.`
        : `${name} offers a balanced mix of comfort, local culture, and premium travel options.`,
    hotels: [
      { id: `${name}-h1`, name: `${name} Grand Retreat`, price: 6990 },
      { id: `${name}-h2`, name: `${name} Vista Residency`, price: 8490 },
    ],
    restaurants: [
      { id: `${name}-r1`, name: `${name} Spice Kitchen`, price: 1490 },
      { id: `${name}-r2`, name: `${name} Harbor Bistro`, price: 1890 },
    ],
    suggestedPackages: relatedPackages,
  };
};
