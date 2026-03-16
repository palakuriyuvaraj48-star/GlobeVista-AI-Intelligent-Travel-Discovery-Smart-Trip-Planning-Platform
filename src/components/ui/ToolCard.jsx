import { Link } from 'react-router-dom'

export default function ToolCard({ title, description, icon, exampleOutput, linkTo }) {
  return (
    <Link to={linkTo} className="block h-full">
      <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-purple-200 h-full flex flex-col">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl group-hover:bg-purple-100 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-sm text-slate-600 mb-6 flex-grow">{description}</p>
        
        {exampleOutput && (
          <div className="rounded-lg bg-slate-50 p-4 border border-slate-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Example Output</h4>
            <div className="text-sm text-slate-700 whitespace-pre-wrap font-medium">
              {exampleOutput}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
