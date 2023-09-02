'use client'
import {useState, useEffect} from 'react';
import { db } from '@/firebase';
import { getDocs, collection, where, query, orderBy} from 'firebase/firestore';
import Sidebar from '../Sidebar';

import dynamic from 'next/dynamic'
import Loader from '../Loader';
import { Pagination } from '@mui/material';
const StoryCard = dynamic(() => import('./StoryCard'), {ssr: false})

const MainSt = ({cat}) => {
    const [displayedStories, setDisplayedStories] = useState([]);
    const [allstories, setAllStories] = useState([]);
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;  

    const handlePageChange = (event, newPage) => {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
      const fetchStories = async () => {
        try {
            const docsRef = collection(db, 'stories');
            const q = cat ? query(docsRef, where('category', 'array-contains', cat)) : query(docsRef, orderBy('timestamp', 'desc'));
    
            const querySnapshot = await getDocs(q);
            const allStories = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            const startIndex = (currentPage - 1) * itemsPerPage;
            const displayedArticles = allStories.slice(startIndex, startIndex + itemsPerPage);
            setAllStories(allStories)
            setDisplayedStories(displayedArticles);
            setLoading(false)
        } catch (error) {
            alert(error);
        }
    };
    fetchStories(); 
}, [cat, currentPage]);


  return (
    <main className='flex relative mb-10'>
      <div className='lg:flex-[0.75] flex-1'>
        <>
          {loading ? (
              <div className='flex-center h-36 w-full'>
                 <Loader />
              </div>
          ) : (
              <div  className=' px-4 space-y-6 py-8 columns-1 md:columns-2 mt-12'>
                  {displayedStories.map(story => (
                      <StoryCard key={story.id} data={story} />
                  ))}
              </div>
          )}
        </>
        <Pagination
          variant='outlined'
          count={Math.ceil(allstories.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          dir='ltr'
          color="secondary"
          className="mt-4"
        />
      </div>
      <div className='flex-[0.25] mt-10 h-fit  hidden lg:block rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
        <Sidebar />
      </div>
    </main>
  )
}

export default MainSt