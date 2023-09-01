"use client"
import { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { onSnapshot, getDocs, collection, where, query, orderBy } from 'firebase/firestore';
import Sidebar from '../Sidebar';
import dynamic from 'next/dynamic';
import Loader from '../Loader';
import { Pagination } from '@mui/material';

const ArticleCard = dynamic(() => import('./ArticleCard'), {ssr: false});
const OthersArticleCard = dynamic(() => import('./OthersArticleCard'), {ssr: false});
 
const Main = ({ cat }) => {
    const [othersArticles, setOthersArticles] = useState([]);
    const [allArticles, setAllArticles] = useState([]);
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; 

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const docsRef = collection(db, 'articles');
                const querySnapshot = await getDocs(docsRef);
                const allArticles = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));    
                setArticles(allArticles)
            } catch (error) {
                alert(error);
            }
        };
        
        const fetchOtherPosts = async () => {
            try {
                const docsRef = collection(db, 'otherArticles');
                const q = cat ? query(docsRef, where('category', 'array-contains', cat)) : query(docsRef, orderBy('timestamp', 'desc'));
        
                const querySnapshot = await getDocs(q);
                const allArticles = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                const startIndex = (currentPage - 1) * itemsPerPage;
                const displayedArticles = allArticles.slice(startIndex, startIndex + itemsPerPage);
                setAllArticles(allArticles)
                setOthersArticles(displayedArticles);
                setLoading(false);
        
            } catch (error) {
                alert(error);
            }
        };
        fetchPosts();
        fetchOtherPosts();
    }, [cat, currentPage]);

    return (
        <main className='flex relative mb-10'>
            <div className='lg:flex-[0.75]'>
                <>
                    {loading ? (
                        <div className='flex-center h-24 w-full'>
                           <Loader />
                        </div>
                    ) : (
                        <div  className=' px-4 space-y-6 py-8 columns-1 md:columns-2 mt-12'>
                            {othersArticles.map(article => (
                                <OthersArticleCard key={article.id} {...article} />
                            ))}
                        </div>
                    )}
                </>
                <Pagination
                    variant='outlined'
                    count={Math.ceil(allArticles.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    dir='ltr'
                    color="secondary"
                    className="mt-4"
                />
                <div>
                    <div className='relative p-4 mt-8 mb-6'>
                        <h1 className='text-3xl font-bold text-black italic'>اخترنا لكم</h1>
                        <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {articles.map(article => (
                                <ArticleCard key={article.id} data={article} hide />
                            ))}
                    </div>
                </div>
            </div>
            <div className='flex-[0.25] mt-20 h-fit hidden lg:block rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
                <Sidebar />
            </div>
        </main>
    );
};

export default Main;
