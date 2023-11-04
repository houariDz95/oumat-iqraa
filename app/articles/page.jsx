import Navbar from "@/components/Nav";
import PageTitle from "@/components/PageTitle";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/articles/Main";
import { atCategories } from "@/constants";
import { getArticles } from "@/actions";
import BannerSm from "@/banners/BannerSm";
 
export async function generateMetadata(paramKey){
  const cat = paramKey.searchParams.cat;
  const title = atCategories.filter(category => category.path === cat)[0].name;
  return {
    title: ` ${cat ? title : " كل المقالات"} - أمة اقرأ`,
    description: 'استمتع بقراءة واستكشاف مجموعة المقالات الشيقة في موقع أمة اقرأ.',
  }
}

const Articles = async (paramKey) => {
    const cat = paramKey.searchParams.cat;
    const allArticles = await getArticles(cat);
    
  return (
    <>
      <Navbar />
      <PageTitle title="مقالات" desc="مقالات رائعة في موضوعات متنوعة" />
      <div className="max-w-6xl flex items-center justify-center  mx-auto">
        <BannerSm />
      </div>
      <div className="max-w-6xl mx-auto mt-10 min-h-[calc(100vh-73px)] items-start flex overflow-clip">
        <div className="flex-1 lg:flex-[0.75]">
          <Main 
            cat={cat} 
            allArticles={allArticles}
          />
        </div>
        <div className="flex-[0.25] hidden lg:block  sticky top-0">
          <Sidebar categories={atCategories} articles />
        </div>
      </div>
    </>
  )
}

export default Articles