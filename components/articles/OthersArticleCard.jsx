'use client'
import Link from 'next/link';
import Image from 'next/image';

const OthersArticleCard = ({ imageUrl, title, articleText, id }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{articleText.slice(0, 120)}...</p>
        <div className="mt-4">
          <Link href={`/articles/others/${id}`}>
            <span className="text-blue-500 hover:underline">إقــرأ الـمــزيـد</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OthersArticleCard;
