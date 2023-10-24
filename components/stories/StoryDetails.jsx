'use client';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import { updateText, updateTextAndSlice } from "@/utils/updateText";
import Link from "next/link";
import BannerSq from "@/banners/BannerSq";


const StoryDetails = ({imageUrl, title, date, storyText, isFromEditor, readMore}) => {
  return (
    <div
      className="max-w-2xl flex-1 p-4 md:p-0 mx-auto"
    >
        <div className="flex items-center gap-2 mb-4">
            <p className="text-gray-500 flex items-center gap-2 text-sm">
            <AiOutlineCalendar size={18} color='#6449ff' />
            {moment(date, 'ar').format('DD MMMM YYYY')}
            </p>
        </div>
        <h2 className="text-3xl font-semibold mb-4 blue_gradient">{title}</h2>
        <Image 
            src={imageUrl} 
            alt={title} 
            className="w-full max-h-[350px] object-cover rounded-lg shadow-md my-12" 
            width={600} 
            height={350}
        />
        <div>
            {updateText(storyText, isFromEditor)}
        </div>

        <div className="flex flex-center gap-6 text-lg font-bold text-gray-900 my-10">
            <span>*</span>
            <span>*</span>
            <span>*</span>
        </div>
        <div className="w-full flex items-center justify-center">
            <BannerSq />
        </div>

        <div className="mb-24">
            <h1 className="text-xl font-semibold">استكشف أيضًا</h1>
            <div className="grid gap-4 grid-cols-1">
            {readMore?.map(item => (
                <div className="bg-white shadow-md p-1 xs:p-4 flex " key={item.id}>
                <Image
                    width={144}
                    height={128}
                    src={item.imageUrl}  
                    alt={item.tilte}
                    className="object-cover h-36 w-32 hidden xs:block"
                />
                <div className="mr-4 flex items-start justify-center gap-3 flex-col">
                <Link href={`/stories/${item.id}`} >
                    <h2 className="text-lg md:text-xl font-semibold hover:text-primary">{item?.title}</h2>  
                </Link>
                    <p className="text-gray-500 text-[12px] md:text-lg">
                    {updateTextAndSlice(item.storyText, item.isFromEditor)}
                    <Link href={`/stories/${item.id}`} className='blue_gradient cursor-pointer font-semibold'>بدء القراءة</Link>
                    </p> 
                </div>
                </div>
            ))}
            </div> 
        </div>
    </div>
  )
}
export default StoryDetails