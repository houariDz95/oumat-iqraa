
import Link from "next/link";
import { popularCategories } from "@/constants";

const Categories = () => {
  return (
    <div className="w-full relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-8">
      {popularCategories.map((category) =>(
        <Link 
        href={`/articles?cat=${category.path}`}
        className="flex items-center justify-center gap-3 h-[80px]  text-black font-semibold"
        key={category.path} 
        style={{background: category.color}}>
          <h1 className="text-xl">{category.icon}</h1>
          <h4>{category.name}</h4>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Categories