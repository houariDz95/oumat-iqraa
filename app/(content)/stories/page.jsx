import { stCategories } from '@/constants'; 
import { getStories } from "@/actions";
import MainSt from "@/components/stories/MainSt";

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
      <MainSt allStories={allStories} />
    </>
  )
}

export default Stories