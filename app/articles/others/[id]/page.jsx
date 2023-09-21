import Navbar from '@/components/Nav';
import PageTitle from '@/components/PageTitle';
import Sidebar from '@/components/Sidebar'
import ArticleDetailsOther from '@/components/articles/ArticleDetailsOther';
import { db } from '@/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

export async function generateMetadata({params: {id}}){
  const collectionRef = collection(db, 'otherArticles')
  const docRef = doc(collectionRef, id);
  const data = await getDoc(docRef)
  const text = data.data().articleText
  let allText = '';

  if (text.blocks && text.blocks.length > 0) {
    text.blocks.forEach(block => {
      allText += block.text;
    });
  }
  return {
    title: data.data().title,
    description: allText,
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image": data.data().imageUrl,
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image": data.data().imageUrl,
      "og:type": "website",
    }
    }
}

const page = async ({params: {id}}) => {
  let isLoading = true;

  const getPost = async () => {
    try {
      if(id){
        const collectionRef = collection(db, 'otherArticles')
        const docRef = doc(collectionRef, id);
        const data = await getDoc(docRef)
        const post = {...data.data(), id: data.id}
        isLoading = false
        return post
      }

    } catch (error) {
      console(error)
      isLoading=false
    }
  }
  const post = await getPost()
  return (
    <>
      <Navbar />
      <PageTitle title={post.title} desc="استمتع بقراءة مقالة شيقة ومثيرة تغطي موضوعًا مهمًا" />
      <div className="max-w-6xl mx-auto  min-h-[calc(100vh-73px)] flex mt-10">
        <div className="flex-1 lg:flex-[0.75]">
          <ArticleDetailsOther 
          id={id} 
          isLoading={isLoading} 
          date={post.timestamp?.toDate()} 
          imageUrl={post.imageUrl}
           title={post.title} 
           category={post.category}
           articleText={post.articleText} 
           isFromEditor={post.isFromEditor}
          />
        </div>
        <div className="flex-[0.25] hidden lg:block sticky top-0 h-full ">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default page