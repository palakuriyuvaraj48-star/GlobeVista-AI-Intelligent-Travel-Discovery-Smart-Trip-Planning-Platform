import React from 'react'
import { exploreData } from '../data/exploreData'
import useAdvancedFilter from '../hooks/useAdvancedFilter'

const CATEGORIES = ['Hotel', 'Restaurant', 'Rental', 'Transportation', 'Popular Place']

function Stars({ value }) {
  const rounded = Math.round(value || 0)
  return <span className="text-amber-500">{`${'\u2605'.repeat(rounded)}${'\u2606'.repeat(5 - rounded)}`}</span>
}

export default function Explore() {
  const {
    activeCategory,
    searchTerm,
    selectedFilters,
    sortOption,
    filteredData,
    trending,
    recommendations,
    activeFilterConfig,
    groupedSelectedFilters,
    setSearchTerm,
    setSortOption,
    switchCategory,
    toggleFilter,
    resetAll,
    getRelatedSuggestions,
  } = useAdvancedFilter(exploreData)

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-cyan-50/40 to-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-extrabold text-red-600">DEBUG ACTIVE</h1>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Enterprise Dynamic Explore</h1>
          <p className="mt-2 text-sm text-slate-600">Category-specific filtering, search, trending, and AI-style recommendations</p>
        </header>

        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => switchCategory(category)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-cyan-600 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
            <div className="md:col-span-7">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by title or location..."
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-500"
              />
            </div>
            <div className="md:col-span-3">
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-cyan-500"
              >
                <option value="rating_desc">Rating High - Low</option>
                <option value="price_asc">Price Low - High</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={resetAll}
                className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">{activeCategory} Filters</h2>
          <div className="space-y-4">
            {activeFilterConfig.map((group) => (
              <div key={group.key}>
                <p className="mb-2 text-sm font-semibold text-slate-700">{group.key}</p>
                <div className="flex flex-wrap gap-2">
                  {group.options.map((option) => {
                    const token = `${group.key}:${option}`
                    const active = selectedFilters.includes(token)

                    return (
                      <button
                        key={token}
                        type="button"
                        onClick={() => toggleFilter(group.key, option)}
                        className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
                          active
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-300'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-400">Selected Filters: {JSON.stringify(groupedSelectedFilters)}</p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Trending (Top 3 by Review Count)</h3>
            <ul className="mt-3 space-y-2">
              {trending.map((item) => (
                <li key={item.id} className="text-sm text-slate-600">
                  {item.title} ({item.reviews.length} reviews)
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">AI-Style Recommendations</h3>
            <ul className="mt-3 space-y-2">
              {recommendations.map((item) => (
                <li key={item.id} className="text-sm text-slate-600">
                  {item.title} ({item.rating.toFixed(1)})
                </li>
              ))}
            </ul>
          </section>
        </div>

        {filteredData.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-800">No results found</h2>
            <p className="mt-2 text-slate-500">Adjust search and filter settings to see results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredData.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500">{item.domain}</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.location}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>

                <div className="mt-3 flex items-center justify-between">
                  <Stars value={item.rating} />
                  <span className="text-sm font-semibold text-slate-700">{item.rating.toFixed(1)}</span>
                </div>

                <p className="mt-2 text-xs text-slate-500">Review Count: {item.reviews.length}</p>
                {typeof item.price === 'number' ? (
                  <p className="mt-1 text-xs text-slate-500">Price: {'\u20B9'}{item.price.toLocaleString()}</p>
                ) : null}

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Reviews</p>
                  <div className="space-y-2">
                    {item.reviews.map((review, index) => (
                      <div key={`${item.id}-${review.user}-${index}`} className="rounded-lg bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-slate-700">{review.user}</p>
                          <Stars value={review.stars} />
                        </div>
                        <p className="mt-1 text-xs text-slate-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Related Suggestions</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {getRelatedSuggestions(item).map((related) => (
                      <li key={related.id}>{related.title}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
