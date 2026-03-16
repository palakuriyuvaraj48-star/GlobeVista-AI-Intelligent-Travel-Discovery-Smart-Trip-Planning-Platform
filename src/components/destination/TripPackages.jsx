import { useState } from 'react'

export default function TripPackages({ packages }) {
  const [nights, setNights] = useState(2)
  const [travelers, setTravelers] = useState(2)
  const [couponCode, setCouponCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false)

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'HIDDEN10') {
      setDiscountApplied(true)
    } else {
      setDiscountApplied(false)
      alert("Invalid coupon code")
    }
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Book Your Trip</h2>
      
      {/* Trip Calculator Settings */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-6 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-slate-700 mb-2">Duration (Nights)</label>
          <input 
            type="number" 
            min="1" 
            value={nights}
            onChange={(e) => setNights(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-slate-700 mb-2">Travelers</label>
          <input 
            type="number" 
            min="1" 
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>
        <div className="flex-[2] w-full flex gap-2">
          <div className="flex-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Coupon Code</label>
            <input 
              type="text" 
              placeholder="e.g. HIDDEN10" 
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <button 
            onClick={handleApplyCoupon}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors h-[50px] mt-auto"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {packages.map((pkg, idx) => {
          // Dynamic calculation based on user inputs
          const multiplier = (nights / 2) * (travelers / 2);
          const basePriceRaw = pkg.basePrice * multiplier;
          
          let discountAmount = 0;
          if (discountApplied) {
            discountAmount = basePriceRaw * 0.10; // 10% off
          }
          
          const discountedBase = basePriceRaw - discountAmount;
          const tax = discountedBase * 0.18; // 18% tax
          const platformFee = 899;
          const total = discountedBase + tax + platformFee;

          return (
            <div key={idx} className={`relative bg-white rounded-3xl p-8 border ${idx === 0 ? 'border-purple-200 shadow-xl shadow-purple-900/5' : 'border-slate-200 shadow-sm'} flex flex-col`}>
              {idx === 0 && (
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <p className="text-slate-500 font-medium mb-6 pb-6 border-b border-slate-100">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto bg-slate-50 p-6 rounded-2xl">
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex justify-between">
                    <span>Base price for {travelers} travelers</span>
                    <span>₹{Math.round(basePriceRaw).toLocaleString()}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-green-600 font-bold">
                      <span>HIDDEN10 Discount (10%)</span>
                      <span>-₹{Math.round(discountAmount).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Taxes & Fees (18%)</span>
                    <span>₹{Math.round(tax).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span>₹{platformFee}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 mb-6">
                  <span className="text-lg font-bold text-slate-900">Total Price</span>
                  <span className="text-3xl font-black text-slate-900">₹{Math.round(total).toLocaleString()}</span>
                </div>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-95 ${
                  idx === 0 
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-700' 
                    : 'bg-slate-900 text-white shadow-lg shadow-slate-900/30 hover:bg-slate-800'
                }`}>
                  Book Package
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
