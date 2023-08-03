import PageTitle from '@/components/PageTitle'
import { categories } from "@/constants"
import BooksContainer from '@/components/books/BooksContainer'


export async function generateMetadata(paramKey){
  const cat = paramKey.searchParams.cat;
  const title = categories.filter(category => category.path === cat)[0].name;
  return {
    title: ` ${cat ? title : "كتب جديدة"} - أمة اقرأ`,
    description: 'تصفح مجموعة الكتب الرائعة في موقع أمة اقرأ واستمتع بالقراءة والاستكشاف.',
    }
  }

 
const Book = async (paramKey) => {
  const cat = paramKey.searchParams.cat;
  const page = paramKey.searchParams.page;
  const title = categories.filter(category => category.path === cat)[0].name;

  return (
    <>
      <PageTitle title={title} desc="يمكنك العثور على الكتب المفضلة لديك وتحميلها بكل سهولة" />
      <div className='max-w-6xl mx-auto  mt-8 min-h-[calc(100vh-73px)]'>
        <BooksContainer page={page} cat={cat} />
      </div>
    </>
  )
}

export default Book