'use client'
import Image from "next/image"
import BookCard from "./BookCard"
import { useEffect, useState } from "react"
import { fetchFromAPI } from "@/utils/fetchFromApi"
import Loader from "../Loader"
import { useRouter } from "next/navigation"

const AuthorDetails = ({id}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const isObjectEmpty = Object.keys(data).length === 0;
    const router = useRouter();
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res  = await fetchFromAPI(`contributors/${id}`);
                setData(res)
            } catch (error) {
                alert(error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    }, [id])

    if(isLoading) return  <div className="w-full h-48 flex-center">
        <Loader />    
    </div>

    if (isObjectEmpty) {
      return (
        <div className='min-h-[50vh] max-w-4xl text-lg mx-auto text-center my-10 p-4'>
          <br />
          إن البيانات غير متوفرة لهذا الكاتب. سنقوم بإصلاح هذا قريبًا.
          <br />
          <span onClick={router.back} className='text-blue-500 cursor-pointer underline'>
            العودة إلى الصفحة السابقة
          </span>
        </div>
      );
    }
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