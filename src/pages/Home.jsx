import { useState } from 'react';
import { destinations } from '../data/destinations';
import { hotels } from '../data/hotels';
import HeroSection from "../components/HeroSection"

import PopularPlaces from "../components/PopularPlaces";
import HiddenPlaces from "../components/HiddenPlaces";
import States from "../components/States";
import Events from "../components/Events";
import FamousDishes from "../components/FamousDishes";
import Pubs from "../components/Pubs";
import Movies from "../components/Movies";
import Malls from "../components/Malls";
import HotelDeals from "../components/HotelDeals";
import RestaurantDiscovery from "../components/RestaurantDiscovery";
import ExperiencesMarketplace from "../components/ExperiencesMarketplace";

import FeaturesGrid from "../components/FeaturesGrid";

const trending = [
  { id: 1, name: 'Paris', country: 'France', rating: 4.9, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
  { id: 2, name: 'Dubai', country: 'UAE', rating: 4.8, image: 'https://images.unsplash.com/photo-1465410460893-7f6a7d2a3c1b' },
  { id: 3, name: 'Tokyo', country: 'Japan', rating: 4.7, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99' },
  { id: 4, name: 'Bali', country: 'Indonesia', rating: 4.8, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
];

const travelCategories = [
  { name: 'Beaches', icon: '🏖️' },
  { name: 'Mountains', icon: '🏔️' },
  { name: 'Cities', icon: '🌆' },
  { name: 'Adventure', icon: '🧗' },
  { name: 'Culture', icon: '🎭' },
  { name: 'Food', icon: '🍽️' },
];

const smartTools = [
  { icon: '🤖', title: 'AI Trip Planner', desc: 'Let AI plan your perfect trip.', link: '/ai-trip-planner' },
  { icon: '💸', title: 'Budget Calculator', desc: 'Estimate your travel costs easily.', link: '/budget-calculator' },
  { icon: '🗺️', title: 'Travel Map Explorer', desc: 'Explore destinations visually.', link: '/explore' },
  { icon: '✨', title: 'Destination Recommender', desc: 'Get personalized suggestions.', link: '/destination-recommender' },
];

const featuredHotels = hotels.slice(0, 3);

const inspirationGallery = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  'https://images.unsplash.com/photo-1468421870903-4df1664ac249',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
];

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-20 w-full bg-white">
      <HeroSection />
      <FeaturesGrid />
      <PopularPlaces />
      <HiddenPlaces />
      <States />
      <Events />
      <FamousDishes />
      <Pubs />
      <Movies />
      <Malls />
      <HotelDeals />
      <RestaurantDiscovery />
      <ExperiencesMarketplace />
      <Recommendations />
    </div>
  );
}
