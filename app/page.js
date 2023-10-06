import Categories from '@/components/Categories'
import Header from '@/components/Header'
import Navbar from '@/components/Nav'
import PopularCard from '@/components/PopularCard';
import OthersArticleCard from '@/components/articles/OthersArticleCard';
import Contact from '@/components/Contact';
import { getPoular, getRecent, getRecentSt } from '@/actions';
import StoryCard from '@/components/stories/StoryCard';
import Script from 'next/script';
import BannerSq from '@/banners/BannerSq';
export default async  function Home() {

  const data = await getRecent()
  const popular = await getPoular()
  const stories = await getRecentSt()
  return(
    <>
      <Script 
        async  
        src="//pl20812775.highcpmrevenuegate.com/6b3890282dbcd2ff77e5aedcafd49c1a/invoke.js"
        data-cfasync="false"
      />
      <Script 
        type='text/javascript' 
        src='//pl20816003.highcpmrevenuegate.com/bf/9e/b6/bf9eb6e7b5ddd3ce92701feb9b883409.js' 
      />
      <div className='relative'>
        <Navbar primary/>
        <Header />
        <div className='flex items-center justify-center  max-w-7xl mx-auto'>
            <div id="container-6b3890282dbcd2ff77e5aedcafd49c1a"></div>
        </div>
        <div className='max-w-7xl mx-auto mb-12 p-4'>
          <div className='relative p-4'>
            <h1 className='text-3xl font-bold text-black italic'>الأقسام الرائجة</h1>
            <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
          </div>
          <Categories />

          <div className='relative p-4 mt-10'>
            <h1 className='text-3xl font-bold text-black italic'>آخر المقالات المضافة</h1>
            <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
          </div>
          <div className='relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 '>
            {data.map(article => (
              <OthersArticleCard 
                key={article.id} 
                imageUrl={article.imageUrl}
                title={article.title}
                articleText={article.articleText}
                id={article.id}
                isFromEditor={article.isFromEditor}
              />
            ))}
          </div>
          <div className='flex items-center justify-center  max-w-7xl mx-auto'>
            <div id="container-6b3890282dbcd2ff77e5aedcafd49c1a"></div>
          </div>
          <div className='relative p-4 mt-10'>
            <h1 className='text-3xl font-bold text-black italic'>الأكثر قراءة</h1>
            <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
          </div>
          <div className="flex flex-wrap gap-6">
            {popular.map(article => (
              <PopularCard 
                key={article.id}
                imageUrl={article.imageUrl}
                title={article.title}
                articleText={article.articleText}
                id={article.id}
                isFromEditor={article.isFromEditor}
                category={article.category}
                date={article.timestamp?.toDate()}
              />
            ))}
          </div>
          <div className='flex items-center justify-center  max-w-7xl mx-auto'>
              <BannerSq />
          </div>
          <div className='relative p-4 mt-10'>
            <h1 className='text-3xl font-bold text-black italic'>آخر القصص المضافة</h1>
            <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
          </div>
          <div className='relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 '>
            {stories.map(story => (
              <StoryCard
                key={story.id} 
                imageUrl={story.imageUrl}
                title={story.title}
                storyText={story.storyText}
                id={story.id}
                isFromEditor={story.isFromEditor}
              />
            ))}
          </div>
          <div className='relative p-4 mt-10'>
            <h1 className='text-3xl font-bold text-black italic'>اتصل بنا</h1>
            <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
          </div>
          <Contact />
        </div>
      </div>
    </>
  )
}
