import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoryCard = ({data}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <Link href={`/stories/${data.id}`}>
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={300}
            height={200}
            className="object-cover w-full h-40 rounded-lg mb-4"
          />
      </Link>
      <h3 className="text-xl font-semibold mb-2">{data.title.length < 25 ? data.title : data.title.slice(0, 25)}</h3>
      <p className="text-gray-600">{data.storyText.slice(0, 120) + "..."} <br />
        <Link href={`/stories/${data.id}`} className='blue_gradient cursor-pointer'>إقرأ المزيد</Link>
      </p>
  </div>
  )
}

export default StoryCard