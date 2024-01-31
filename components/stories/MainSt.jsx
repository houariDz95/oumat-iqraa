"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pagination } from '@mui/material';
import { updateTextAndSlice } from '@/utils/updateText';
import Banner_720 from '@/Banners/Banner_720';

const StoryCard = ({ imageUrl, title, articleText, id, isFromEditor }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Link href={`/stories/${id}`}>
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
        <Link href={`/stories/${id}`} className='flex justify-end'>
            <span className="border-b-2 border-[#ff7887] text-black font-semibold"> إقــرأ الـمــزيـد » </span>
        </Link>
      </div>
    </div>
  );
};

 
const MainSt = ({ cat, allStories}) => {

    const [othersArticles, setOthersArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; 

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    useEffect(() => {    
        const startIndex = (currentPage - 1) * itemsPerPage;
        const displayedArticles = allStories.slice(startIndex, startIndex + itemsPerPage);
        setOthersArticles(displayedArticles);
    }, [cat, currentPage]);

    return (
        <main className='flex relative flex-col mb-10'>
            <div className="max-w-6xl flex items-center justify-center mt-5 mx-auto">
              <Banner_720 />
            </div>
            <div  className=' px-4 space-y-6  columns-1 md:columns-2 '>
                {othersArticles.map(story => (
                    <StoryCard 
                        key={story.id} 
                        imageUrl={story.imageUrl} 
                        title={story.title} 
                        articleText={story.storyText}  
                        id={story.id} 
                        isFromEditor={story.isFromEditor} 
                    />
                ))}
            </div>
            <Pagination
                variant='outlined'
                count={Math.ceil(allStories.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                dir='ltr'
                color="secondary"
                className="mt-4"
            />
        </main>
    );
};

export default MainSt;
