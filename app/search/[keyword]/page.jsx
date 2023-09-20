import Navbar from '@/components/Nav'
import Sidebar from '@/components/Sidebar';
import NavSearchBar from '@/components/search/NavSearchBar'
import SearchFor from '@/components/search/SearchFor'

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
        <div className='min-h-[calc(100vh-73px)]'>
          <NavSearchBar />
          <div className=" max-w-6xl mx-auto mt-10 flex items-start">
            <div className="text-right flex-[0.75] ">
              <h2 className="head_text blue_gradient text-center" id="content">نتائج البحث</h2>
              <SearchFor keyword={keyword} />
            </div>
            <div className='flex-[0.25] sticky top-0 hidden lg:block'>
              <Sidebar />
            </div>
          </div>
        </div>
    </>
  )
}

export default Search