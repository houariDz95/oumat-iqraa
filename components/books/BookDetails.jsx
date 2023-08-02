'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import {IoMdArrowDropleft} from 'react-icons/io'
const BookDetails = ({data}) => {
    const router = useRouter();
    const handelClick = (cat) => {
      router.push(`/books?cat=${cat}&page=1`)
    }
    const isObjectEmpty = Object.keys(data).length === 0;
    if (isObjectEmpty) {
      return (
        <div className='min-h-[50vh] max-w-4xl text-lg mx-auto text-center my-10 p-4'>
          <br />
          إن البيانات غير متوفرة لهذا الكتاب. سنقوم بإصلاح هذا قريبًا.
          <br />
          <span onClick={router.back} className='text-blue-500 cursor-pointer underline'>
            العودة إلى الصفحة السابقة
          </span>
        </div>
      );
    }
    return (
        <div>
          <div className='min-h-screen max-w-4xl mx-auto my-10 p-4'>
          <div className='w-full h-full flex flex-col items-center md:items-start md:flex-row gap-[30px] md:gap-10'>
            <div className='flex-[0.4]'>
              <Image 
              width={300}
              height={400}
              src={data?.img} 
              alt={data?.title} 
              className='max-h-[350px] object-cover border-[1px] border-secondary'/>
            </div>
            <div className='flex-[0.6] text-right '>
              <h1 className='text-xl text-[#707805] font-medium mb-3'>{data?.title}</h1>
              <h1 className='text-xl font-medium text-secondary mb-4 hover:underline'>
                <Link href={`/books/${data?.authorId}`} >{data?.author}</Link>
              </h1>
              <div className='w-full flex items-center justify-start gap-2 p-2 text-md'>
                <span 
                className='p-2 rounded-full border-[1px]
                border-secondary text-secondary
                hover:bg-secondary hover:text-white
                hover:border-white w-[120px] text-center cursor-pointer
                '>
                  <button onClick={() => handelClick(data?.type?.url)}>{data?.type?.genre}</button>
                </span>
                <span className='p-2 rounded-full border-1 border-gray-500 text-gray-500 w-[120px] text-center'>
                  {data?.words}
                </span>
              </div>
              <hr className='w-full h-[0.3px] rounded-full shadow-md my-2 ' />
              <p className='text-[#222831] leading-10'>
                {data?.text}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className='text-right w-full p-4 leading-10 text-xl font-semibold text-[#20232A]'>تحميل كتاب {data?.title} مجانا</h1>
            <div className="w-full flex items-center flex-wrap justify-start gap-5"> 
              {data?.downloadLinks?.map((item, i) => (
                <a 
                href={item?.downloadLink} 
                key={i}
                className="flex 
                items-center 
                pr-2
                pl-10 
                py-2 
                gap-4
                rounded-full 
                curso-pointer 
                border-[1px]  
                border-gray-500
                flex-row-reverse
                hover:text-secondary
                ">
                  <Image width={10} height={10} src={item.downloadImg} alt="download" className="h-10 w-10" />
                  <span>{item.downloadTitle}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="text-right mt-10">
            <h1 className='text-right w-full text-xl font-semibold mb-2 text-[#20232A]'>تاريخ إصدارات هذا الكتاب</h1>
            <p className="text-md ">
              صدر هذا الكتاب عام {" "}
              <span className="text-secondary">{data?.date}</span>
            </p>
          </div>
          <div className="mt-5">
            <h1 className='text-right w-full text-xl font-semibold p-4 mb-2 text-[#20232A]'>محتوى الكتاب</h1>
            <div className="flex flex-col items-start gap-2">
                {data?.contents?.map((item, i) => (
                  <span key={item.id} className="text-md text-[#707805] font-normal flex items-center">
                    <IoMdArrowDropleft size={20} color="#707805" />
                    {item.title}
                  </span>
                ))}
            </div>
          </div>
          <div className="text-right mt-8">
            <h1 className='w-full text-xl font-semibold text-[#20232A] '>عن المؤلف</h1>
              <div className="p-2 ">
                <p className="leading-relaxed">{data?.aboutAuthor}</p>
              </div>
          </div>
        </div>
      </div>
    ) 
}
  
  export default BookDetails