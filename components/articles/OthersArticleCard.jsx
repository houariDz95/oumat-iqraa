'use client'
import Link from 'next/link';
import Image from 'next/image';
import { updateTextAndSlice } from '@/utils/updateText';
const OthersArticleCard = ({ imageUrl, title, articleText, id, isFromEditor }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Link href={`/articles/others/${id}`}>
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
          {updateTextAndSlice(articleText, isFromEditor)} 
        </p>
        <Link href={`/articles/others/${id}`} className='flex justify-end'>
            <span className="border-b-2 border-[#ff7887] text-black font-semibold"> إقــرأ الـمــزيـد » </span>
        </Link>
      </div>
    </div>
  );
};

export default OthersArticleCard;
