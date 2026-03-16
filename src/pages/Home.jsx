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
import Recommendations from "../components/Recommendations";

import FeaturesGrid from "../components/FeaturesGrid";

export default function Home() {
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
