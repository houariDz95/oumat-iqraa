'use client'
import Link from 'next/link';
import {IoMdArrowDropleft} from 'react-icons/io';

const SearchResults = ({data}) => {
    return (
    <div className=" max-w-4xl mx-auto mt-6">
      <div className="mt-10 text-right">
        <h2 className="text-xl p-2 mb-2 "> الكتب</h2>
        <div className="flex items-start flex-col">
          {data.length ? data?.map(item => (
              <div key={item.bookId} className="flex items-center gap-2 p-2 text-md">
                <IoMdArrowDropleft className='text-gray-300'/>
                <Link className=" text-[#707805] cursor-pointer hover:underline" href={`${item?.bookId}`}>{item?.bookTitle} </Link> · بقلم
                <Link className=" text-[#707805] cursor-pointer hover:underline" href={`/books/${item?.authorId}`}> {item?.authorTitle}</Link>
            </div>
            )) : null}
        </div>
      </div>
    </div>
  )
}

export default SearchResults