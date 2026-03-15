import FeatureButton from "./FeatureButton"

export default function FeaturesGrid(){
  const features=[
    {title:"Popular Places",icon:"🌍",route:"/explore"},
    {title:"Hidden Places",icon:"🏞️",route:"/hidden-places"},
    {title:"States",icon:"🗺️",route:"/states"},
    {title:"Events",icon:"🎉",route:"/events"},
    {title:"Famous Dishes",icon:"🍜",route:"/food"},
    {title:"Pubs",icon:"🍺",route:"/pubs"},
    {title:"Movies",icon:"🎬",route:"/movies"},
    {title:"Malls",icon:"🛍️",route:"/malls"},
    {title:"Budget Planner",icon:"💰",route:"/budget-planner"},
    {title:"Compare Hotels",icon:"🏨",route:"/compare-hotels"},
    {title:"Travel Preferences",icon:"⚙️",route:"/travel-preferences"},
    {title:"Recommendations",icon:"🤖",route:"/recommendations"},
    {title:"Hotels",icon:"🏩",route:"/hotels"},
    {title:"Restaurants",icon:"🍽️",route:"/restaurants"},
    {title:"Experiences",icon:"🎟️",route:"/experiences"},
    {title:"Transport",icon:"✈️",route:"/transport"},
    {title:"Map Explorer",icon:"📍",route:"/map"}
  ]
  return(
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Explore All Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature,index)=>(
          <FeatureButton
            key={index}
            title={feature.title}
            icon={feature.icon}
            route={feature.route}
          />
        ))}
      </div>
    </section>
  )
}
