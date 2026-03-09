import { useMemo } from 'react'
import useAdvancedFilter from '../hooks/useAdvancedFilter'
import { ADVANCED_TRAVEL_DATA } from '../data/advancedTravelData'

const DOMAINS = ['Temple', 'Mountain', 'Hill', 'Beach']
const CATEGORIES = ['Hotel', 'Restaurant', 'Rental', 'Transportation', 'Popular Place']

function renderStars(value, maxStars = 5) {
  const stars = Math.round(value)
  return `${'\u2605'.repeat(stars)}${'\u2606'.repeat(maxStars - stars)}`
}

export default function AdvancedTravelExplorer({ title, subtitle, initialCategory = '' }) {
  const initialCategories = initialCategory ? [initialCategory] : []

  const {
    selectedDomains,
    selectedCategories,
    searchTerm,
    filteredData,
    isAllDomainsSelected,
    setSearchTerm,
    setDomainFromDropdown,
    toggleDomain,
    toggleCategory,
    resetFilters,
    allDomainsLabel,
  } = useAdvancedFilter({
    data: ADVANCED_TRAVEL_DATA,
    initialCategories,
  })

  const relatedPlacesMap = useMemo(() => {
    const map = {}
    ADVANCED_TRAVEL_DATA.forEach((item) => {
      map[item.id] = ADVANCED_TRAVEL_DATA.filter(
        (candidate) => candidate.domain === item.domain && candidate.id !== item.id,
      ).slice(0, 3)
    })
    return map
  }, [])

  const selectedDropdownValue = selectedDomains.length === 1 ? selectedDomains[0] : allDomainsLabel

  return (
    <section className="w-full bg-gradient-to-b from-slate-100 via-cyan-50 to-white py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
          <p className="mt-2 text-slate-600">{subtitle}</p>
        </header>

        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Search by title or location</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search hotels, restaurants, places..."
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Domain dropdown</label>
              <select
                value={selectedDropdownValue}
                onChange={(event) => setDomainFromDropdown(event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              >
                <option value={allDomainsLabel}>{allDomainsLabel}</option>
                {DOMAINS.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="button"
                onClick={resetFilters}
                className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-slate-700">Domains</p>
            <div className="flex flex-wrap gap-3">
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={isAllDomainsSelected}
                  onChange={() => toggleDomain(allDomainsLabel)}
                  className="h-4 w-4 accent-cyan-600"
                />
                {allDomainsLabel}
              </label>
              {DOMAINS.map((domain) => (
                <label
                  key={domain}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedDomains.includes(domain)}
                    onChange={() => toggleDomain(domain)}
                    className="h-4 w-4 accent-cyan-600"
                  />
                  {domain}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-slate-700">Categories</p>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <label
                  key={category}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="h-4 w-4 accent-cyan-600"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>

        {filteredData.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
            No results found for the selected filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredData.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-900">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500">{item.domain}</span>
                </div>

                <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.location}</p>
                <p className="mt-3 text-sm text-slate-700">{item.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-500">{renderStars(item.rating)}</span>
                  <span className="text-sm text-slate-600">{item.rating.toFixed(1)}</span>
                </div>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Reviews ({item.reviews.length})</p>
                  <div className="space-y-2">
                    {item.reviews.map((review, index) => (
                      <div key={`${item.id}-${review.user}-${index}`} className="rounded-lg bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-slate-800">{review.user}</p>
                          <span className="text-xs text-amber-500">{renderStars(review.stars)}</span>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Related places</p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {relatedPlacesMap[item.id].map((related) => (
                      <li key={related.id}>
                        {related.title} ({related.domain})
                      </li>
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
