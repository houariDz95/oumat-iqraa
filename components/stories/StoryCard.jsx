'use client'
import Image from 'next/image'
import Link from 'next/link'
import { updateTextAndSlice } from '@/utils/updateText';


const StoryCard = ({data}) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md overflow-hidden">
      <Link href={`/stories/${data.id}`}>
        <div  className='relative h-48'>
            <Image
              src={data.imageUrl}
              alt={data.title}
              layout="fill"
              className="object-cover"
              loading="eager"
            />
        </div>
      </Link>
      <h3 className="text-xl font-semibold mb-2 h-14">{data.title}</h3>

      <p className="text-gray-600 text-md h-24" >
        {updateTextAndSlice(data.storyText, data.isFromEditor)}
      </p>
      <Link href={`/stories/${data.id}`} className='flex justify-end'>
            <span className="border-b-2 border-[#ff7887] text-black font-semibold"> إقــرأ الـمــزيـد » </span>
        </Link>
  </div>
  )
}

export default StoryCard