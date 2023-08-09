import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Header from '@/components/Header'
import Navbar from '@/components/Nav'
import RecentPosts from '@/components/RecentPosts'

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
          title="كتابة المقالات"
          desc="قم بتمكين كتابتك باستخدام أداة كتابة المقالات المعتمدة على الذكاء الاصطناعي. احصل على مساعدة في صياغة مقالات شيقة ومنظمة بشكل جيد. قم بزيادة إنتاجيتك واطلق العنان لإبداعك من خلال تجربة الكتابة البديهية لدينا."
          img="/assets/write-article.jpg"
          buttonText="ابدأ الكتابة"
          styles="w-full mx-auto flex lg:flex-row flex-col gap-8"
          direction="right"
          url="/articles"
        />
        
        <Features
          title="تحميل الكتب"
          desc="استفد من مجموعتنا الواسعة من الكتب في مختلف الأنواع. من الكلاسيكيات إلى أحدث الكتب الأكثر مبيعًا، يمكنك العثور على الكتب المفضلة لديك وتحميلها بكل سهولة. قم بتوسيع معرفتك وتعلم من القصص الشيقة."
          img="/assets/library.jpg"
          buttonText="استكشاف الكتب"
          styles="w-full mx-auto flex lg:flex-row-reverse flex-col gap-8"
          direction="left"
          url="/books"
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
