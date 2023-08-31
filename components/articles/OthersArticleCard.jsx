'use client'
import Link from 'next/link';
import Image from 'next/image';
import { updateTextAndSlice } from '@/utils/updateText';
const OthersArticleCard = ({ imageUrl, title, articleText, id, isFromEditor }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
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
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 h-14">{title}</h2>
        <p className="text-gray-600 text-md h-24">
          {updateTextAndSlice(articleText, isFromEditor)} 
          <Link href={`/articles/others/${id}`}>
            <span className="text-blue-500 hover:underline">إقــرأ الـمــزيـد</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OthersArticleCard;
