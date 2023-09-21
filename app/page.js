import Categories from '@/components/Categories'
import Header from '@/components/Header'
import Navbar from '@/components/Nav'
import OthersArticles from '@/components/OthersArticles';
import Popular from '@/components/Popular';
import Contact from '@/components/Contact';

export default function Home() {
  return(
    <div>
      <Navbar primary/>
      <Header />
      <div className='max-w-7xl mx-auto mt-10 mb-12 p-4'>
        <div className='relative p-4'>
          <h1 className='text-3xl font-bold text-black italic'>الأقسام الرائجة</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <Categories />

        <div className='relative p-4 mt-10'>
          <h1 className='text-3xl font-bold text-black italic'>آخر المقالات المضافة</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <OthersArticles />

        <div className='relative p-4 mt-10'>
          <h1 className='text-3xl font-bold text-black italic'>الأكثر قراءة</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <Popular />

        <div className='relative p-4 mt-10'>
          <h1 className='text-3xl font-bold text-black italic'>اتصل بنا</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <Contact />
      </div>
    </div>
  )
}
