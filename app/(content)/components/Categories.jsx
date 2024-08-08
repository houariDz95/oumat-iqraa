import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Categories = ({categories, currentSlug}) => {
  return (
    <div  className="px-0 md:px-10 xl:px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark  py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
        {categories.map(category => (
          <Link 
          href={`/categories/${category}`}
          className={cn(
            "inline-block py-1.5 md:py-2 px-6  md:px-10   rounded-full border-2 border-solid border-dark  hover:scale-105 transition-all ease duration-200 m-2",
             category === currentSlug && "bg-dark text-light" 
          )}
          >
           {category}#
          </Link>
        ))}
    </div>
  )
}

export default Categories