'use client'
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from "react-icons/ai";
import SearchButton from '../SearchButton';

const NavSearchBar = () => {
  const router = useRouter()
  return (
    <div className='flex-col-center gap-4 h-[370px] bg-primary text-white p-4'>
        <h1 className='lg:text-3xl text-2xl text-center'> أمة اقرأ</h1>
        <h2 className='lg:text-3xl text-2xl text-center'>محرك بحث القصص  و المقالات</h2>
        <form  
        action={(formData) => {
          const searchTerm = formData.get("search")
          if(!formData.get("search")) return 
          router.push(`/search/${searchTerm.trim()}`)
        }}
        className='flex items-center max-w-2xl w-full p-1 bg-white/60 rounded-full'>
            <SearchButton styles="py-3 px-5 rounded-full bg-primary text-xl font-bold" />
            <input 
            type="text"
            name='search' 
            placeholder='ابحث' 
            className='flex-1 bg-transparent text-primary outline-none text-right placeholder:text-gray-500 mr-2'/>
            <AiOutlineSearch size={30} color='#6449ff' className='mr-2 ml-1'/>
        </form>
    </div>
  )
}

export default NavSearchBar