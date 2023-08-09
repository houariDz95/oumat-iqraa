'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from "react-icons/ai";
import SearchButton from '../SearchButton';

const NavSearchBar = () => {
  const router = useRouter()
  return (
    <div className='flex-col-center gap-4 h-[470px] bg-primary text-white p-4'>
        <h2 className='lg:text-3xl text-2xl text-center'>مكتبة أمة اقرأ</h2>
        <h2 className='lg:text-3xl text-2xl text-center'>محرك بحث الكتب و المقالات</h2>
        <form  
        action={(formData) => {
          const searchTerm = formData.get("search")
          if(!formData.get("search")) return 
          router.push(`/search/${searchTerm.trim()}#content`)
        }}
        className='flex items-center max-w-2xl w-full p-1 bg-white/60 rounded-full'>
            <SearchButton styles="py-3 px-5 rounded-full bg-primary text-xl font-bold" />
            <input 
            type="text"
            name='search' 
            placeholder='ابحث عن كتاب أو مؤلف أو قسم كتب' 
            className='flex-1 bg-transparent text-primary outline-none text-right placeholder:text-gray-500 mr-2'/>
            <AiOutlineSearch size={30} color='#6449ff' className='mr-2 ml-1'/>
        </form>
        <div className='grid grid-cols-3 gap-2'>
            <Link href="/books" className='px-6 py-2 rounded-md border-[1px] text-sm border-white text-white bg-transparent'>أحدث الكتب</Link>
            <Link href="/articles" className='px-6 py-2 rounded-md border-[1px] text-sm border-white text-white bg-transparent'> أحدث المقالات</Link>
            <Link href="/ai-image-/quotes?cat=الجمال" className='px-6 py-2 rounded-md border-[1px] text-sm border-white text-white bg-transparent'>أحدث الإقتباسات </Link>
        </div>
    </div>
  )
}

export default NavSearchBar