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
