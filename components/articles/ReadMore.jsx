import { updateTextAndSlice } from "@/utils/updateText"
import Image from "next/image"
import Link from "next/link"

const ReadMore = ({posts}) => {
  return (
    <div className="mb-24">
        <h1 className="text-xl font-semibold">استكشف أيضًا</h1>
        <div className="grid gap-4 grid-cols-1">
          {posts?.map(item => (
            <div className="bg-white shadow-md p-1 xs:p-4 flex " key={item.id}>
              <Image
                width={144}
                height={128}
                src={item.imageUrl}  
                alt={item.tilte}
                className="object-cover h-36 w-32 hidden xs:block"
              />
              <div className="mr-4 flex items-start justify-center gap-3 flex-col">
              <Link href={`/articles/others/${item?.id}`}>
                <h2 className="text-lg md:text-xl font-semibold hover:text-primary">{item?.title}</h2>  
              </Link>
                <p className="text-gray-500 text-[12px] md:text-lg">
                  {updateTextAndSlice(item.articleText, item.isFromEditor)}
                  <Link href={`/articles/others/${item.id}`} className='blue_gradient cursor-pointer font-semibold'>بدء القراءة</Link>
                </p> 
              </div>
            </div>
          ))}
        </div> 
    </div>
  )
}

export default ReadMore