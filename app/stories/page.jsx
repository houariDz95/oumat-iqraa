import Navbar from "@/components/Nav";
import PageTitle from "@/components/PageTitle";
import Sidebar from "@/components/Sidebar";
import { stCategories } from '@/constants'; 
import { getStories } from "@/actions";
import MainSt from "@/components/stories/MainSt";
import Script from "next/script";
import BannerSm from "@/banners/BannerSm";

export async function generateMetadata(paramKey){
  const cat = paramKey.searchParams.cat;
  const title = stCategories.filter(category => category.path === cat)[0].name;
  return {
    title: ` ${cat ? title : " كل القصص"} - أمة اقرأ`,
    description: 'استمتع بقراءة واستكشاف مجموعة القصص الشيقة في موقع أمة اقرأ.',
  }
}

const Stories = async (paramKey) => {
    const cat = paramKey.searchParams.cat;
    const allStories = await getStories(cat);
    
  return (
    <>  
      <Script type='text/javascript' src='//pl20843361.highcpmrevenuegate.com/6c/da/e8/6cdae8d47f9935aba066a9d2db08e9db.js' />
      <Navbar />
      <PageTitle title="مقالات" desc="مقالات رائعة في موضوعات متنوعة" />
      <div className="max-w-6xl flex items-center justify-center  mx-auto">
        <div data-mndbanid="5240b4f1-05f7-474e-a980-fd3540e08d78"></div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 min-h-[calc(100vh-73px)] items-start flex overflow-clip">
        <div className="flex-1 lg:flex-[0.75]">
          <MainSt 
            cat={cat} 
            allStories={allStories}
          />
        </div>
        <div className="flex-[0.25] hidden lg:block  sticky top-0">
          <Sidebar categories={stCategories} />
        </div>
      </div>
    </>
  )
}

export default Stories