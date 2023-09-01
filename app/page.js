import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Navbar from '@/components/Nav'


import dynamic from 'next/dynamic'
const Features = dynamic(() => import('@/components/Features'))
const OthersArticles = dynamic(() => import('@/components/OthersArticles'), {ssr: false})
const RecentPosts = dynamic(() => import('@/components/RecentPosts'), {ssr: false})
const RecentStories = dynamic(() => import('@/components/RecentStories'), {ssr: false})

export default function Home() {
  return(
    <div>
      <Navbar primary/>
      <Header />
      <div className='max-w-6xl mx-auto mt-10 p-4'>
        <div className='relative p-4'>
          <h1 className='text-3xl font-bold text-black italic'>أهم الميزات</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <Features
          title="قراءة المقالات"
          desc="ميزة موقعنا الجديدة تتيح للمستخدمين قراءة المقالات والاستفادة من محتوى ذو جودة عالية بدون الحاجة إلى تسجيل الدخول. تصفح وتعلم واستمتع بمقالاتنا المميزة."
          img="/assets/write-article.jpg"
          buttonText="ابدأ القراءة الآن"
          styles="w-full mx-auto flex lg:flex-row flex-col gap-8"
          direction="right"
          url="/articles"
        />
        
        <Features
          title="قراءة القصص"
          desc="تمتع بوقتك بقراءة قصص مشوقة ومثيرة. اختر من مجموعتنا الرائعة من القصص في مختلف الأنواع. دع ذهنك يتجول في عوالم الخيال والإثارة من خلال قصصنا الممتعة."
          img="/assets/library.jpg"
          buttonText="استكشاف القصص"
          styles="w-full mx-auto flex lg:flex-row-reverse flex-col gap-8"
          direction="left"
          url="/stories"
        />

        <Features  
          title="عبارات ملهمة"
          desc="استمتع بتصفح مجموعتنا من العبارات الملهمة التي تضيء الطريق وتشجعك على التفاؤل والإيجابية في الحياة"
          img="/assets/ai-generator.jpg"
          buttonText="استكشاف المزيد"
          styles="w-full mx-auto flex lg:flex-row flex-col gap-8"
          direction="right"
          url="/quotes?cat=الجمال"
        />
        <div className='relative p-4 mt-8'>
          <h1 className='text-3xl font-bold text-black italic'>آخر المقالات المضافة</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <OthersArticles />
        <div className='relative p-4 mt-8'>
          <h1 className='text-3xl font-bold text-black italic'>آخر القصص المضافة</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <RecentStories />
        <div className='relative p-4 mt-8'>
          <h1 className='text-3xl font-bold text-black italic'> مقالات أخرى</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <RecentPosts />
        <div className='relative p-4 mt-8'>
          <h1 className='text-3xl font-bold text-black italic'> اتصل بنا</h1>
          <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
        </div>
        <Contact />
      </div>
    </div>
  )
}
