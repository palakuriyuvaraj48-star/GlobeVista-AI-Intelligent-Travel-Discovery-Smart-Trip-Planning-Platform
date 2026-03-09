import { useState, useEffect } from 'react';

export default function TravelWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addWish = () => {
    if (input) setWishlist([...wishlist, input]);
    setInput('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Travel Wishlist</h2>
      <div className="flex gap-4 mb-6">
        <input type="text" placeholder="Add destination" value={input} onChange={e => setInput(e.target.value)} className="rounded-xl border px-4 py-2 shadow-md flex-1" />
        <button onClick={addWish} className="bg-indigo-600 text-white rounded-xl px-6 py-2 shadow-md hover:bg-indigo-700 transition">Add</button>
      </div>
      <div className="mt-8 grid gap-4">
        {wishlist.map((wish, idx) => (
          <div key={idx} className="rounded-xl shadow-md p-4 hover:bg-indigo-50 transition">
            <div className="font-bold text-lg mb-2">{wish}</div>
          </div>
        ))}
      </div>
    </div>
  );
}