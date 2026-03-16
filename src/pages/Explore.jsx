import Events from "../components/Events"
import FamousDishes from "../components/FamousDishes"
import Pubs from "../components/Pubs"
import Movies from "../components/Movies"
import Malls from "../components/Malls"

export default function Explore() {
  return (
    <div className="p-10 space-y-16">
      <h1 className="text-3xl font-bold">Explore Experiences</h1>
      <Events />
      <FamousDishes />
      <Pubs />
      <Movies />
      <Malls />
    </div>
  )
}

