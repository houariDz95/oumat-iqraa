'use client'

import Image from "next/image"
import BookCard from "./BookCard"

const AuthorDetails = ({data}) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
        <div className="flex justify-center gap-4 flex-col-reverse md:flex-row md:items-start items-center">
            <div className="">
                <Image src={data.img} alt={data.name} width={300} height={400} className="object-cover" />
            </div>
            <div className="text-right flex-1 p-4 md:p-0">
                <h1 className="text-xl text-[#707805] font-semibold">{data.name}</h1>
                <p className="text-black leading-8 p-2">{data.description}</p>
            </div>
        </div>
        <div>
            <h1 className="text-xl font-semibold text-black mt-4">
            الكتب المُؤلّفة للكاتب {data.name} ({data?.books?.length} كتاب)
            </h1>
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-5 p-2 mt-10  w-full justify-items-end'>
                {data?.books?.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default AuthorDetails