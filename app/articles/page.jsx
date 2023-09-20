import Navbar from "@/components/Nav";
import PageTitle from "@/components/PageTitle";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/articles/Main";
import { atCategories } from "@/constants";
import { db } from '@/firebase';
import {  getDocs, collection, where, query, orderBy } from 'firebase/firestore';

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
    const getArticles = async (paramKey) => {
      try {
      
        const docsRef = collection(db, 'otherArticles');
        const q = cat ? query(docsRef, where('category', 'array-contains', cat)) : query(docsRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const allArticles = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        return allArticles
      } catch (error) {
        console.log(error);
      }
    }

    const allArticles = await getArticles()
  return (
    <>
      <Navbar />
      <PageTitle title="مقالات" desc="مقالات رائعة في موضوعات متنوعة" />
      <div className="max-w-6xl mx-auto mt-10 min-h-[calc(100vh-73px)] items-start flex overflow-clip">
        <div className="flex-1 lg:flex-[0.75]">
          <Main 
            cat={cat} 
            allArticles={allArticles}
          />
        </div>
        <div className="flex-[0.25] hidden lg:block  sticky top-0">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Articles