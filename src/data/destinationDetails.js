export const destinationDetails = {
  narkanda: {
    name: "Narkanda",
    country: "Himachal Pradesh, India",
    description: "Narkanda blends alpine forests, orchard valleys, and scenic Himalayan roads with a peaceful premium escape.",
    image: "https://images.unsplash.com/photo-1626021616110-388b14e59df1?w=1600",
    thumbnails: [
      "https://images.unsplash.com/photo-1605649487212-4d4ce3ae4e4a?w=400",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400",
      "https://images.unsplash.com/photo-1506461883276-594540eb3c47?w=400"
    ],
    activities: [
      { name: "Hatu Peak Sunrise", description: "Breathtaking 360-degree views of the Himalayas.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500", rating: 4.9 },
      { name: "Apple Orchard Walk", description: "Stroll through blooming valleys filled with crisp apples.", image: "https://images.unsplash.com/photo-1590005354167-198125cf3f32?w=500", rating: 4.7 },
      { name: "Mountain Trekking", description: "Guided trails through dense pine and oak forests.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500", rating: 4.8 },
      { name: "Nature Photography", description: "Capture the pristine beauty of the Shivalik range.", image: "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=500", rating: 4.6 }
    ],
    bestTime: {
      months: ["March to June", "September to November"],
      highlights: [
        { title: "Hatu Peak", description: "Clear skies offer unhindered views of the snow-capped mountains." },
        { title: "Apple Orchards", description: "Witness the harvest season in full swing during autumn." },
        { title: "Snow Viewpoints", description: "Winter months provide perfect skiing and snowboarding slopes." },
        { title: "Sunrise trails", description: "Crisp mornings perfect for early hikes." }
      ]
    },
    packages: [
      {
        name: "3D / 2N Package",
        description: "A quick getaway to rejuvenate in the mountains.",
        includes: ["Hotel stay (3 Star)", "Breakfast & Dinner", "Local transfer", "Guided Hatu Peak trek"],
        basePrice: 27980
      },
      {
        name: "5D / 4N Premium Package",
        description: "The ultimate luxury mountain experience.",
        includes: ["Premium stay (5 Star)", "All Meals included", "Private Sightseeing car", "Evening Campfire & Barbeque"],
        basePrice: 58414
      }
    ],
    travelOptions: [
      { type: "Car", duration: "8h 20m from Delhi", price: 7200 },
      { type: "Bus", duration: "10h 45m from Delhi", price: 1250 },
      { type: "Train", duration: "7h 45m (to Kalka)", price: 3590 },
      { type: "Flight", duration: "1h 10m (to Shimla)", price: 4500 }
    ],
    hotels: [
      { name: "Himalayan Vista Lodge", category: "4 Star", rating: 4.8, price: 9790, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500" },
      { name: "Pine Retreat Resort", category: "Luxury", rating: 4.9, price: 15400, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" },
      { name: "Snow Valley Stays", category: "3 Star", rating: 4.2, price: 4200, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500" }
    ]
  },
  goa: {
    name: "Goa",
    country: "India",
    description: "Sun, sand, and sea. The perfect beach getaway mixing Portuguese heritage with vibrant nightlife.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600",
    thumbnails: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400",
      "https://images.unsplash.com/photo-1534081075306-38374a2b2520?w=400",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400"
    ],
    activities: [
      { name: "Baga Beach Water Sports", description: "Jet skiing, parasailing, and banana boat rides.", image: "https://images.unsplash.com/photo-1534081075306-38374a2b2520?w=500", rating: 4.8 },
      { name: "Old Goa Heritage Walk", description: "Explore the ancient churches like Basilica of Bom Jesus.", image: "https://images.unsplash.com/photo-1590483257850-2f16ee0a7479?w=500", rating: 4.7 }
    ],
    bestTime: {
      months: ["November to February"],
      highlights: [
        { title: "Festivals", description: "Sunburn festival and Christmas celebrations." },
        { title: "Perfect Weather", description: "Pleasant temperatures around 25°C." }
      ]
    },
    packages: [
      {
        name: "3D / 2N Beach Retreat",
        description: "Relax by the shimmering waters of South Goa.",
        includes: ["Beachfront resort stay", "Breakfast", "Airport transfer"],
        basePrice: 18500
      }
    ],
    travelOptions: [
      { type: "Flight", duration: "2h 30m from Delhi", price: 5500 },
      { type: "Train", duration: "24h from Delhi", price: 2100 }
    ],
    hotels: [
      { name: "Taj Exotica Resort & Spa", category: "Luxury", rating: 4.9, price: 22000, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" }
    ]
  },
  bali: {
    name: "Bali Island",
    country: "Indonesia",
    description: "Tropical beaches, ancient temples, and vibrant culture await in Bali's serene landscapes.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600",
    thumbnails: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400"
    ],
    activities: [
      { name: "Uluwatu Temple Sunset", description: "Dramatic cliffside views and Kecak fire dance.", image: "https://images.unsplash.com/photo-1520038411261-0b5c1fb9811c?w=500", rating: 4.9 }
    ],
    bestTime: {
      months: ["April to October"],
      highlights: [
        { title: "Dry Season", description: "Ideal for beach excursions and scuba diving." }
      ]
    },
    packages: [
      {
        name: "5D / 4N Bali Explorer",
        description: "Discover the magic of Ubud and Seminyak.",
        includes: ["4 Star Hotel", "Daily Breakfast", "Ubud Tour", "Airport transfers"],
        basePrice: 45000
      }
    ],
    travelOptions: [
      { type: "Flight", duration: "9h 15m from Delhi", price: 18500 }
    ],
    hotels: [
      { name: "AYANA Resort Bali", category: "Luxury", rating: 4.9, price: 28000, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500" }
    ]
  }
}

// Fallback template for any unknown destination
export const genericDestination = {
  name: "Destination",
  country: "Worldwide",
  description: "A wonderful place waiting to be explored with beautiful landscapes and culture.",
  image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600",
  thumbnails: [],
  activities: [],
  bestTime: {
    months: ["Year-round"],
    highlights: [{ title: "Exploration", description: "Discover new sites anytime." }]
  },
  packages: [
    {
      name: "Standard Package",
      description: "A comfortable stay in a prime location.",
      includes: ["Accommodation", "Breakfast"],
      basePrice: 20000
    }
  ],
  travelOptions: [
    { type: "Flight", duration: "Varies", price: 10000 }
  ],
  hotels: [
    { name: "City Center Hotel", category: "4 Star", rating: 4.5, price: 8000, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" }
  ]
}
