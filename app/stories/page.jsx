import MainSt from "@/components/stories/MainSt";
import SearchBarSt from "@/components/stories/SearchBarSt";
import { stCategories } from "@/constants";


export async function generateMetadata(paramKey){
  const cat = paramKey.searchParams.cat;
  const title = stCategories.filter(category => category.path === cat)[0].name;
   return {
     title: ` ${cat ? title : " كل القصص "} - أمة اقرأ`,
     description: 'استمتع بقراءة واستكشاف مجموعة القصص  الشيقة في موقع أمة اقرأ.',
   }
 }


const Articles = (paramKey) => {
  const cat = paramKey.searchParams.cat;
  return (
    <>
      <div className="max-w-6xl mx-auto mt-8 min-h-[calc(100vh-73px)]">
        <SearchBarSt cat={cat} />
        <MainSt cat={cat} />
      </div>
    </>
  )
}

export default Articles