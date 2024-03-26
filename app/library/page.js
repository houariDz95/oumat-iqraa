import React from 'react';
import { getBooks, getBooksByCategory } from '@/lib/library-actions';
import { booksCategories } from '@/constants';
import { cn } from '@/lib/utils';
import BookCard from './components/BookCard';
import TitleHeader from './components/TitleHeader';
import CustomPagination from '@/components/ui/PaginationComponent';
import Banner_720 from '@/Banners/Banner_720';

const LibraryPage = async (paramKey) => {
    const cat = paramKey.searchParams.cat;
    const page = paramKey.searchParams.page || 1;
    const title = cat ? booksCategories.filter(c => c.path === cat)[0].value : 'كل الكتب'

    const  {books, totalBooksCount, startRange, endRange } = cat ? await getBooksByCategory(cat, page) : await getBooks(page);
    const perPage = 20;
    const pageCount = Math.ceil(totalBooksCount / perPage);


  return (
    <>
    <TitleHeader title={title}/>
    <div className="grid grid-cols-12  gap-y-8 lg:gap-8 xl:gap-16 mt-8 min-h-[calc(100ch-100px)] max-w-7xl mx-auto mb-12 p-5">
    <div className="col-span-12 lg:col-span-4">
      <details
        className="border-[1px] border-solid border-boder dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 overflow-hidden overflow-y-auto"
        open
      >
        <summary className="text-lg font-semibold capitalize cursor-pointer">
          موضوعات الكتب 
        </summary>
        <ul className="mt-4 font-in text-base">
          {booksCategories.map(category => (
            <li key={category.value} className='py-1'>
              <a 
              href={category.path === "/" ? `/library?page=1` : `/library?cat=${category.path}&page=1`} 
              className={cn('flex items-center justify-star gap-2 py-2 px-4 rounded-sm', category.path === cat || (category.path === "/" && !cat) ? "bg-primary text-white cursor-not-allowed" : "")}>
                <span className={cn(category.path === cat || (category.path === "/" && !cat) ? "text-white" : "text-primary")}>
                  {category.icon}
                </span>
                <span className={cn(category.path !== category ? "hover:underline": "")}>{category.value}</span>
              </a>
            </li>
          ))}        
        </ul>
      </details>
    </div>
    <div className='flex flex-col col-span-12  lg:col-span-8 space-y-8'>
      <Banner_720 />
      <div className='flex flex-col lg:flex-row items-center justify-between'>
          <p className='flex-1 text-md'>عرض من {startRange} - {endRange} من أصل {totalBooksCount} كتاب</p>
          <CustomPagination  pageCount={pageCount}  currentPage={page} cat={cat}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
        {books.map(book => (
          <BookCard key={book._id} img={book.img} id={book.bookId} title={book.title} />
        ))}
      </div>
      <div className='flex items-center justify-between'>
          <p className='flex-1 text-md'>عرض من {startRange} - {endRange} من أصل {totalBooksCount} كتاب</p>
          <CustomPagination  pageCount={pageCount}  currentPage={page} cat={cat}/>
      </div>
      <div className="">
        <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
        <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
      </div>
    </div>
  </div>
  </>
  )
}

export default LibraryPage