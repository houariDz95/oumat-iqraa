import Link from "next/link";
import { atCategories } from "@/constants";
import { AiFillTags } from "react-icons/ai";


const Sidebar = () => {
  return ( 
    <div className="w-full border p-6">
      <h2 className="text-white bg-black px-2.5 py-1.5 flex-center w-fit mb-2">
      <AiFillTags size={22}/>
        فئات
      </h2>
      <div className="w-full flex flex-wrap gap-2">
        {atCategories.map((cat, i) =>
          <button className="text-lg border w-fit p-2 hover:text-primary" key={i}>
            <Link href={cat.path ? `/articles?cat=${cat.path}` : '/articles'}>
              {cat.name}
            </Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default Sidebar
