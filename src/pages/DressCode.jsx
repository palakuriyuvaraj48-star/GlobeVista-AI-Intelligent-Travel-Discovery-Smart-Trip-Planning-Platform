import { useState } from 'react'
import Hero from '../components/Hero'
import TravelCard from '../TravelCard'

const dressCodeGuides = [
  { id: 'temples', category: '🛕 Religious Temples & Sacred Sites', image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=800', rules: [
      { item: 'Shoulders', description: 'Must be covered - wear long sleeves or shawl' },
      { item: 'Knees', description: 'Cover knees with pants, skirts, or sarongs' },
      { item: 'Footwear', description: 'Remove shoes at temple entrance' },
      { item: 'Head Covering', description: 'May be required in some temples' },
      { item: 'Avoid', description: 'Tight, transparent, or revealing clothing' },
      { item: 'Accessories', description: 'Remove or cover religious symbols not your own' }
    ] },
  { id: 'beaches', category: '🏖️ Beach & Water Activities', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', rules: [
      { item: 'Swimwear', description: 'Wear appropriate swimming costumes' },
      { item: 'Cover-up', description: 'Bring sarong or t-shirt for non-swimming areas' },
      { item: 'Sunscreen', description: 'Essential for protection' },
      { item: 'Footwear', description: 'Flip-flops or water shoes recommended' },
      { item: 'Hat/Cap', description: 'Protects from sun' },
      { item: 'Casual Wear', description: 'Light, breathable clothing for evening' }
    ] },
  { id: 'winter', category: '❄️ Winter Destinations', image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800', rules: [
      { item: 'Insulation', description: 'Wear thermal layers underneath' },
      { item: 'Outer Jacket', description: 'Waterproof and windproof winter coat' },
      { item: 'Accessories', description: 'Hat, gloves, scarf for extremities' },
      { item: 'Footwear', description: 'Waterproof, insulated winter boots' },
      { item: 'Base Layer', description: 'Moisture-wicking thermal underwear' },
      { item: 'Socks', description: 'Thick wool or merino wool socks' }
    ] },
  { id: 'monsoon', category: '🌧️ Monsoon Season', image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800', rules: [
      { item: 'Raincoat', description: 'Waterproof rain jackets or ponchos essential' },
      { item: 'Footwear', description: 'Water-resistant shoes or waterproof boots' },
      { item: 'Umbrella', description: 'Carry collapsible umbrella' },
      { item: 'Fabric', description: 'Quick-dry materials preferred' },
      { item: 'Colors', description: 'Dark colors hide water stains better' },
      { item: 'Bag', description: 'Waterproof travel bag for electronics' }
    ] },
  { id: 'festivals', category: '🎉 Festival Attire', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800', rules: [
      { item: 'Traditional Wear', description: 'Consider wearing local festival attire' },
      { item: 'Colors', description: 'Bright, festive colors encouraged' },
      { item: 'Comfort', description: 'Wear comfortable walking shoes' },
      { item: 'Jewelry', description: 'Minimal jewelry for safety in crowds' },
      { item: 'Weather Appropriate', description: 'Check festival season weather' },
      { item: 'Comfortable Fit', description: 'Avoid tight clothing for mobility' }
    ] },
  { id: 'formal', category: '🎩 Fine Dining & Formal Events', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800', rules: [
      { item: 'Dress Code', description: "Check restaurant's dress code policy" },
      { item: 'Men', description: 'Dress pants, dress shirt, optional blazer or tie' },
      { item: 'Women', description: 'Formal dress, skirt, or dress pants' },
      { item: 'Footwear', description: 'Closed-toe dress shoes or elegant heels' },
      { item: 'Grooming', description: 'Well-groomed and polished appearance' },
      { item: 'Accessories', description: 'Elegant jewelry and watches' }
    ] },
  { id: 'desert', category: '🏜️ Desert & Hot Climates', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800', rules: [
      { item: 'Light Colors', description: 'White, beige, or light pastels reflect heat' },
      { item: 'Loose Fit', description: 'Breathable, loose-fitting clothing' },
      { item: 'Sun Protection', description: 'Long sleeves and pants for sun protection' },
      { item: 'Head Covering', description: 'Hat or headscarf essential' },
      { item: 'Sunglasses', description: 'UV protection sunglasses' },
      { item: 'Footwear', description: 'Closed-toe shoes for sand and rocks' }
    ] },
  { id: 'mountain', category: '⛰️ Mountains & Trekking', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', rules: [
      { item: 'Layers', description: 'Dress in multiple layers for temperature changes' },
      { item: 'Moisture-Wicking', description: 'Synthetic or wool base layer' },
      { item: 'Jacket', description: 'Waterproof and windproof outer layer' },
      { item: 'Footwear', description: 'Proper hiking boots for traction' },
      { item: 'Socks', description: 'Specialized hiking or wool socks' },
      { item: 'Accessories', description: 'Hat, gloves, and backpack essential' }
    ] }
]

export default function DressCode() {
  const [selectedGuide, setSelectedGuide] = useState(dressCodeGuides[0])

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920"
        title="Dress Code Guide"
        subtitle="Know what to wear for every destination and occasion"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Dress Code Guide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Comprehensive dress code recommendations for different destinations and occasions
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {dressCodeGuides.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedGuide.id === guide.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {guide.category.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="mb-12 opacity-0 animate-fadeIn">
          <div className="bg-gradient-to-br from-indigo-50 dark:from-slate-800 to-cyan-50 dark:to-slate-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="rounded-xl overflow-hidden h-80 md:h-full">
                <img
                  src={selectedGuide.image}
                  alt={selectedGuide.category}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                  {selectedGuide.category}
                </h3>
                <div className="space-y-4">
                  {selectedGuide.rules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-700 rounded-lg p-4 opacity-0 animate-fadeIn"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {rule.item}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {rule.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 opacity-0 animate-fadeIn">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Essential Packing Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Versatile Basics', desc: 'Pack neutral colors that mix and match easily' },
              { title: 'Comfortable Shoes', desc: 'Bring 2-3 pairs for different occasions' },
              { title: 'Weather Layers', desc: 'Prepare for temperature changes throughout day' },
              { title: 'Cultural Sensitivity', desc: 'Research local customs before visiting' },
              { title: 'Formal Options', desc: 'Include 1-2 formal pieces for special events' },
              { title: 'Quick-Dry Fabrics', desc: 'Choose materials that dry quickly' }
            ].map((tip, i) => (
              <div key={i} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${i * 50}ms` }}>
                <TravelCard title={tip.title} subtitle={tip.desc} />
              </div>
            ))}
          </div>
        </div>

        <div className="opacity-0 animate-fadeIn">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Universal Dos & Don'ts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border-2 border-emerald-200 dark:border-emerald-800">
              <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200 mb-6">
                ? Do's
              </h4>
              <ul className="space-y-3">
                {[
                  'Respect local dress codes and customs',
                  'Wear comfortable, appropriate footwear',
                  'Dress for the weather conditions',
                  'Cover religious symbols respectfully',
                  'Bring an extra outfit for unexpected situations',
                  'Keep shoes clean and presentable'
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-emerald-800 dark:text-emerald-200 opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="mr-3 font-bold">?</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
              <h4 className="text-xl font-bold text-red-900 dark:text-red-200 mb-6">
                ? Don'ts
              </h4>
              <ul className="space-y-3">
                {[
                  'Wear offensive or disrespectful clothing',
                  'Ignore local customs and traditions',
                  'Wear swimwear outside of beach areas',
                  'Show excessive skin in conservative areas',
                  'Wear shoes inside temples or homes',
                  'Ignore weather warnings in your choice'
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-red-800 dark:text-red-200 opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="mr-3 font-bold">?</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
