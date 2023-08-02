import PageTitle from '@/components/PageTitle'
import SearchBar from '@/components/books/SearchBar'
import BookCard from '@/components/books/BookCard'
import Paginations from '@/components/Pagination'
import { notFound } from 'next/navigation'
import { categories } from "@/constants"
import { Suspense } from 'react'
import Loader from '@/components/Loader'

const getBooks = async (cat, currentPage) => {
    
    const res = await fetch(cat ? `https://books-lib.onrender.com/categories/${cat}?page=${currentPage && currentPage}` : 'https://books-lib.onrender.com/new', {
        cache: "no-store",
    })
    if (!res.ok) {
        return notFound()
      }
      return res.json(); 
}

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
  const res = await getBooks(cat, page)
  const data = res.books ? res.books : res
  const title = categories.filter(category => category.path === cat)[0].name;

  return (
    <>
      <PageTitle title={title} desc="يمكنك العثور على الكتب المفضلة لديك وتحميلها بكل سهولة" />
      <div className='max-w-6xl mx-auto  mt-8 min-h-[calc(100vh-73px)]'>
        <SearchBar  cat={cat} page={res.currentPage} />
        <Suspense fallback={<Loader />}>
          <div className='grid lg:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2  gap-5 p-2 mt-10'>
            {data.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </Suspense>
        <Paginations cat={cat} totalPage={res.totalPages} page={res.currentPage} />
      </div>
    </>
  )
}

export default Book