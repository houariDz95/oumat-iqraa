import Navbar from '@/components/Nav'
import NavSearchBar from '@/components/search/NavSearchBar'
import SearchForArticles from '@/components/search/SearchForArticles'
import SearchResults from '@/components/search/SearchResults'

export async function generateMetadata({ params: { keyword } }) {
  const genericSearchDescription = "ابحث عن مجموعة متنوعة من الكتب و المقالات في أمة اقرأ. استكشف العناوين والمؤلفين واكتشف محتوى جديد وشيق.";
  const decodedKeyword = keyword ? decodeURIComponent(keyword) : '';
  const description = keyword
    ? `نتائج البحث عن: ${decodedKeyword}`
    : genericSearchDescription;

  return {
    title: `بحث - ${decodedKeyword || 'أمة اقرأ'}`,
    description: description,
  };
}



const Search = async ({ params: {keyword}}) => {
  return (
    <>  
        <Navbar />
        <NavSearchBar />
        <div className=" max-w-4xl mx-auto mt-10 ">
          <div className="mt-10 text-right">
            <h2 className="text-xl p-2 mb-2 " id="content">نتائج البحث</h2>
            <SearchResults keyword={keyword} />
            <SearchForArticles keyword={keyword} />
          </div>
        </div>
    </>
  )
}

export default Search