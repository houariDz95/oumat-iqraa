'use client'
import { fetchFromAPI } from '@/utils/fetchFromApi';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {IoMdArrowDropleft} from 'react-icons/io';
import Loader from '../Loader';

const SearchResults = ({keyword}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true)
          try {
              const res  = await fetchFromAPI(`search/${keyword}`);
              setData(res)
          } catch (error) {
              alert(error)
          }finally{
              setIsLoading(false)
          }
      }
      fetchData()
  }, [keyword])

  
    return (
    <div className=" max-w-4xl mx-auto mt-6">
      <div className="mt-10 text-right">
        <h2 className="text-xl p-2 mb-2 "> الكتب</h2>
        <div className="flex items-start flex-col">
          {isLoading && <div className='w-full h-14 flex-center'>
            <Loader />
          </div>
          }
          {data.length ? data?.map(item => (
              <div key={item.bookId} className="flex items-center gap-2 p-2 text-md">
                <IoMdArrowDropleft className='text-gray-300'/>
                <Link className=" text-[#707805] cursor-pointer hover:underline" href={`${item?.bookId}`}>{item?.bookTitle} </Link> · بقلم
                <Link className=" text-[#707805] cursor-pointer hover:underline" href={`/books/${item.authorId.replace(/\/$/, "")}?name=${item?.authorTitle}`}> {item?.authorTitle}</Link>
            </div>
            )) : <h2 className="text-lg font-base text-black">لا توجد نتائج بحث للكتب</h2>}
        </div>
      </div>
    </div>
  )
}

export default SearchResults