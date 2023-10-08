import Navbar from "@/components/Nav";
import PageTitle from "@/components/PageTitle";
import Sidebar from "@/components/Sidebar";
import { stCategories } from '@/constants'; 
import { getStories } from "@/actions";
import MainSt from "@/components/stories/MainSt";
import Banner from "@/banners/BannerLg";
import DirectLink from "@/banners/DirectLink";
import Script from "next/script";

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
      <Script type='text/javascript' src='//pl20816003.highcpmrevenuegate.com/bf/9e/b6/bf9eb6e7b5ddd3ce92701feb9b883409.js' />
      <Navbar />
      <PageTitle title="مقالات" desc="مقالات رائعة في موضوعات متنوعة" />
      <div className="max-w-6xl flex items-center justify-center  mx-auto">
        <Banner />
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
      <DirectLink />
    </>
  )
}

export default Stories