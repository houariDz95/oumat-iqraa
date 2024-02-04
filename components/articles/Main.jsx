"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Pagination } from '@mui/material';
import Banner_720 from '@/Banners/Banner_720';
import Banner_350 from '@/Banners/Banner_350';

const OthersArticleCard = dynamic(() => import('./OthersArticleCard'), {ssr: false});
 
const Main = ({ cat, allArticles}) => {

    const [othersArticles, setOthersArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; 

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    useEffect(() => {    
        const startIndex = (currentPage - 1) * itemsPerPage;
        const displayedArticles = allArticles.slice(startIndex, startIndex + itemsPerPage);
        setOthersArticles(displayedArticles);
    }, [cat, currentPage]);

    return (
        <main className='flex relative flex-col mb-10'>
            <div className='my-2'>
                <Banner_720 />
            </div>
            <div  className=' px-4 space-y-6  columns-1 md:columns-2 '>
                {othersArticles.map(article => (
                    <OthersArticleCard 
                    key={article.id} 
                    imageUrl={article.imageUrl} 
                    title={article.title} 
                    articleText={article.articleText}  
                    id={article.id} 
                    isFromEditor={article.isFromEditor} />
                ))}
            </div>
            <Pagination
                variant='outlined'
                count={Math.ceil(allArticles.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                dir='ltr'
                color="secondary"
                className="mt-4"
            />
            <div className="max-w-6xl mx-auto flex items-center justify-center">
                <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
            </div>
        </main>
    );
};

export default Main;
