"use client"
import Banner_720 from '@/Banners/Banner_720';
import Banner_350 from '@/Banners/Banner_350';
import { CradItem } from '../CradItem';

 
const Main = ({allArticles}) => {
    return (
        <article className='flex relative flex-col mb-10'>
            <div className='my-2 max-w-[720px] mx-auto flex items-center justify-center'>
                <Banner_350 />
            </div>
            <div  className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16  px-5 sm:px-10 md:px-24 xl:px-32 pt-10 mt-10'>
                {allArticles.map(article => (
                    <CradItem 
                    category={article.category}
                    key={article.id} 
                    imageUrl={article.imageUrl}
                    title={article.title}
                    url={`/articles/others/${article.id}`}
                />
                ))}
            </div>
            <div className="max-w-6xl mx-auto flex items-center justify-center mt-5">
                <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
                <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
            </div>
        </article>
    );
};

export default Main;
