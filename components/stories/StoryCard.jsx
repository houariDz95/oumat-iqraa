'use client'
import Image from 'next/image'
import Link from 'next/link'
import { updateTextAndSlice } from '@/utils/updateText';


const StoryCard = ({data}) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md h-fit">
      <Link href={`/stories/${data.id}`}>
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={300}
            height={200}
            className="object-cover w-full h-40 rounded-lg mb-4"
            loading="eager"
          />
      </Link>

      <h3 className="text-xl font-semibold mb-4 h-12">{data.title}</h3>

      <p className="text-gray-600 h-28" >
        {updateTextAndSlice(data.storyText, data.isFromEditor)}
        <Link href={`/stories/${data.id}`} className='blue_gradient cursor-pointer'>إقرأ المزيد</Link>
      </p>
  </div>
  )
}

export default StoryCard