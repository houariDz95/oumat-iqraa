import BannerSm from "@/banners/BannerSm";
import Link from "next/link";
import { AiFillTags } from "react-icons/ai";


const Sidebar = ({categories, articles}) => {
  return ( 
    <div className="w-full border p-6">
      <h2 className="text-white bg-black px-2.5 py-1.5 flex-center w-fit mb-2">
      <AiFillTags size={22}/>
        فئات
      </h2>
      <div className="w-full flex flex-wrap gap-2">
        {categories.map((cat, i) =>
          <button className="text-lg border w-fit p-2 hover:text-primary" key={i}>
            <Link href={articles ? cat.path ? `/articles?cat=${cat.path}` : '/articles' : cat.path ? `/stories?cat=${cat.path}` : '/stories'}>
              {cat.name}
            </Link>
          </button>
        )}
      </div>
      <div id="container-6b3890282dbcd2ff77e5aedcafd49c1a"></div>
    </div>
  )
}

export default Sidebar
