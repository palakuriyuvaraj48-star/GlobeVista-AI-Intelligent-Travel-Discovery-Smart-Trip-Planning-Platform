import { useNavigate } from "react-router-dom"

export default function FeatureButton({title,icon,route}){
  const navigate = useNavigate()
  return(
    <button
      onClick={()=>navigate(route)}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow hover:shadow-xl hover:scale-105 transition w-full"
    >
      <div className="text-3xl mb-2">
        {icon}
      </div>
      <h3 className="font-semibold">
        {title}
      </h3>
    </button>
  )
}
