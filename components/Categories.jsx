
import Link from "next/link";
import { popularCategories } from "@/constants";

const Categories = () => {
  return (
    <div className="flex gap-2 flex-wrap mt-8">
      {popularCategories.map((category) =>(
        <Link 
        href={`/articles?cat=${category.path}`}
        className="flex items-center justify-center gap-3 md:w-1/5 lg:w-1/4 xl:w-[16%] sm:w-2/5 w-full  h-[80px]  text-black font-semibold"
        key={category.path} 
        style={{background: category.color}}>
          <h1 className="text-xl">{category.icon}</h1>
          <h4>{category.name}</h4>
        </Link>
      ))}
    </div>
  )
}

export default Categories