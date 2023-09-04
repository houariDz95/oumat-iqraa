import Sidebar from '@/components/Sidebar'
import ArticleDetails from '@/components/articles/ArticleDetails'
import { db } from '@/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';


export async function generateMetadata({params: {id}}){
  const collectionRef = collection(db, 'articles')
  const docRef = doc(collectionRef, id);
  const data = await getDoc(docRef)
  const text = data.data().content
  let allText = '';

  if (text.blocks && text.blocks.length > 0) {
    text.blocks.forEach(block => {
      allText += block.text;
    });
  }
  return {
    title: data.data().title,
    description: text,
    }
}

const page = ({params: {id}}) => {
  return (
    <div className='relative'>
        <div className='flex max-w-6xl mx-auto  min-h-[calc(100vh-73px)] mt-10 mb-10'>
            <ArticleDetails id={id} />
            <div className='flex-[0.25] mt-10 h-fit  hidden lg:block rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
              <Sidebar />
            </div>
        </div>
    </div>
  )
}

export default page