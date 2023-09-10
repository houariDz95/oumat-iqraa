import { updateTextAndSlice } from '@/utils/updateText'
import Image from 'next/image'
import Link from 'next/link'

const ReadMoreSt = ({filltredStories}) => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold my-4">استكشف أيضًا</h1>
      <div className="grid gap-4 grid-cols-1">
        {filltredStories.map(item => (
          <div className="bg-white shadow-md p-1 xs:p-2 flex flex-row-reverse md:flex-row gap-2" key={item.id}>
            <Image
              width={200}
              height={200}
              src={item.imageUrl}  
              alt={item.tilte}
              className="object-cover h-36 w-32 hidden xs:block"
            />
            <div className="mr-4 flex items-start justify-center gap-3 flex-col">
              <h2 className="text-md md:text-xl font-semibold">{item.title}</h2>  
              <p className="text-gray-600 leading-snug text-[12px] md:text-lg ">{updateTextAndSlice(item.storyText, item.isFromEditor)}
              <Link href={`/stories/${item.id}`} className='blue_gradient cursor-pointer font-semibold'>بدء القراءة</Link>
              </p> 
            </div>
          </div>
        ))}
      </div> 
    </div>
  )
}

export default ReadMoreSt