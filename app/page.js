import Categories from '@/components/Categories'
import Header from '@/components/Header'
import PopularCard from '@/components/PopularCard';
import OthersArticleCard from '@/components/articles/OthersArticleCard';
import Contact from '@/components/Contact';
import { getPoular, getRecent, getRecentSt } from '@/actions';
import StoryCard from '@/components/stories/StoryCard';
import { CradItem } from '@/components/CradItem';



export default async  function Home() {

  const data = await getRecent()
  const popular = await getPoular()
  const stories = await getRecentSt()

  return(
    <>
      <div className='relative'>
        <Header />
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
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:grid-cols-3 '>
            {data?.map(article => (
              <CradItem
                category={article.category}
                key={article.id} 
                imageUrl={article.imageUrl}
                title={article.title}
                url={`/articles/others/${article.id}`}
              />
            ))}
          </div>
          <div className='relative p-4 mt-10'>
            <h1 className='text-3xl font-bold text-black italic'>الأكثر قراءة</h1>
            <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
          </div>
          <div className="flex flex-wrap gap-6">
            {popular?.map(article => (
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
          <div className='flex items-center justify-center  max-w-7xl mx-auto mt-8'>
            <div data-mndbanid="5240b4f1-05f7-474e-a980-fd3540e08d78"></div>
          </div>
          <div className='relative p-4 mt-10'>
            <h1 className='text-3xl font-bold text-black italic'>آخر القصص المضافة</h1>
            <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:grid-cols-3'>
            {stories?.map(story => (
              <CradItem
                key={story.id} 
                category={story.category}
                imageUrl={story.imageUrl}
                title={story.title}
                url={`/stories/${story.id}`}
              />
            ))}
          </div>
          <div className='flex items-center justify-center mt-8'>
            <div data-mndbanid="5240b4f1-05f7-474e-a980-fd3540e08d78"></div>
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
