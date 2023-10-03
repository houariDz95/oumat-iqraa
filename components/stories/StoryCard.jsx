'use client'
import Link from 'next/link';
import Image from 'next/image';
import { updateTextAndSlice } from '@/utils/updateText';

const StoryCard = ({ imageUrl, title, storyText, id, isFromEditor }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Link href={`/stories
      /${id}`}>
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            loading="eager"
          />
        </div>
      </Link>
      <div className="p-2 w-full">
        <h2 className="text-xl font-semibold mb-2 h-12">{title}</h2>
        <p className="text-gray-600 text-md h-24">
          {updateTextAndSlice(storyText, isFromEditor)} 
        </p>
        <Link href={`/stories/${id}`} className='flex justify-end'>
            <span className="border-b-2 border-[#ff7887] text-black font-semibold"> إقــرأ الـمــزيـد » </span>
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;