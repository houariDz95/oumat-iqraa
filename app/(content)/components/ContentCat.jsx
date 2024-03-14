"use client"
import { usePathname, useSearchParams } from "next/navigation";
import Category from "./Category";
import { atCategories, stCategories } from "@/constants";
import { cn } from "@/lib/utils";

const ContentCat = () => {
    const path = usePathname()
    const searchParams = useSearchParams()
    const catQuery = searchParams.get('cat');
    const categories = path === "/stories" ? stCategories : atCategories;
    const allQueryFilter =  path === "/stories" ? "كل القصص" :  "كل المقالات"

    const parts = path.split("/"); // Split the path by '/'
    const id = parts[parts.length - 1];

    return (
    <div className={cn(id !== "articles" && id !== "stories" ? "hidden" : "block")}>
      <div className=" px-5 sm:px-10  md:px-24  xl:px-32 flex flex-col">
          <h1 className='mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl'><span className='text-primary'>#</span>{catQuery ? catQuery : allQueryFilter}</h1>
          <span className="mt-2 inline-block">
          اكتشف المزيد من الفئات ووسّع معرفتك!
          </span>
      </div>
      <div className=" px-0 md:px-10 xl:px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-border py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((cat, i) => (
          <Category
              key={i}
              link={cat.path ? `${path}?cat=${cat.path}` : `${path}`}
              name={cat.name}
              active={catQuery === cat.path || (cat.name === allQueryFilter && !catQuery)}
          />
      ))}
      </div>
    </div>
  )
}

export default ContentCat