export default function Loader() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-52 animate-pulse bg-slate-200" />
          <div className="space-y-3 p-5">
            <div className="h-5 w-2/3 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="h-10 animate-pulse rounded-xl bg-slate-200" />
              <div className="h-10 animate-pulse rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
