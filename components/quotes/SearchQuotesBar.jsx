'use client'
import { quotesCategories } from "@/constants";
import { useRouter } from "next/navigation";
import quotesData from "@/constants/quotes.json"

const SearchQuotesBar = ({quotesCat}) => {
  const router = useRouter()

  const handleClick = (cat) => {
    router.push(`/quotes?cat=${cat}`)
  }

  return (
    <div className="flex flex-col h-fit md:w-[260px] w-full border border-gray-300 ">
      <div className="w-full bg-white border-b border-gray-300 p-4 text-black text-xl font-medium">
        <h2 className="font-semibold">مقتطفات متنوعة</h2>
      </div>
       {quotesCategories.map((item, i) => (
        <div key={`${item}-${i}`} 
        onClick={() => handleClick(item)}
        className={`cursor-pointer ${item === quotesCat ?  'text-secondary' : 'text-gray-500'} flex-between px-4 text-lg py-2 gap-2 p-2 rounded-md`}>
          {item} <span className={`border rounded-full w-12 flex-center py-1 text-sm ${item === quotesCat ?  'border-secondary' : 'border-gray-500'}`}>{quotesData[item].length}</span>
        </div>
       ))}
    </div>
  )
}

export default SearchQuotesBar