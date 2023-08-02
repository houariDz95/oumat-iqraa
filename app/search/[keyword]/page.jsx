import Navbar from '@/components/Nav'
import NavSearchBar from '@/components/search/NavSearchBar'
import SearchForArticles from '@/components/search/SearchForArticles'
import SearchResults from '@/components/search/SearchResults'
import { notFound } from 'next/navigation'

const getSearch = async (keyword) => {
    const res = await fetch(`https://books-lib.onrender.com/search/${keyword}`, {
        cache: "no-store",
    })
    if (!res.ok) {
        return notFound()
      }
    
      return res.json(); 
}

const Search = async ({ params: {keyword}}, paramKey) => {
  const data = await getSearch(keyword)

  return (
    <>  
        <Navbar />
        <NavSearchBar />
        <div className=" max-w-4xl mx-auto mt-10 ">
          <div className="mt-10 text-right">
            <h2 className="text-xl p-2 mb-2 " id="content">نتائج البحث</h2>
            {data.length && <SearchResults data={data} />}
            <SearchForArticles keyword={keyword} booksData={data} />
          </div>
        </div>
    </>
  )
}

export default Search