import Navbar from '@/components/Nav';
import PageTitle from '@/components/PageTitle';
import Sidebar from '@/components/Sidebar'
import ArticleDetailsOther from '@/components/articles/ArticleDetailsOther';
import { getPost, readMore } from '@/actions';
import { atCategories } from '@/constants';
import Script from 'next/script';

export async function generateMetadata({params: {id}}){

  const post = await getPost(id)
  const text = post.articleText 
  let allText = '';

  if (text.blocks && text.blocks.length > 0) {
    text.blocks.forEach(block => {
      allText += block.text;
    });
  }
  return {
    title: post.title,
    description: allText,
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image": post.imageUrl,
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image": post.imageUrl,
      "og:type": "website",
    }
    }
}

const page = async ({params: {id}}) => {

  const post = await getPost(id)
  const randomCat = post.category?.[Math.floor(Math.random() * post.category.length)];
  const readMorePost = await readMore(randomCat, post.id)
  return (
    <>
      <Navbar />
      <PageTitle title={post.title} desc="استمتع بقراءة مقالة شيقة ومثيرة تغطي موضوعًا مهمًا" />
      <div className="max-w-6xl mx-auto  min-h-[calc(100vh-73px)] flex mt-10">
        <div className="flex-1 lg:flex-[0.75]">
          <ArticleDetailsOther 
          id={id} 
          date={post.timestamp?.toDate()} 
          imageUrl={post.imageUrl}
           title={post.title} 
           category={post.category}
           articleText={post.articleText} 
           isFromEditor={post.isFromEditor}
           readMore={readMorePost}
          />
        </div>
        <div className="flex-[0.25] hidden lg:block sticky top-0 h-full ">
          <Sidebar categories={atCategories} articles/>
        </div>
      </div>
      <div className='max-w-6xl mx-auto flex items-center justify-center'>
        <Script async="async" data-cfasync="false" src="//pl21201781.toprevenuegate.com/6638e496d98320ae6eda5fbad9755f56/invoke.js" />
        <div id="container-6638e496d98320ae6eda5fbad9755f56"></div>
      </div>
      <Script type='text/javascript' src='//pl21201816.toprevenuegate.com/9a/09/61/9a0961c3a8eb0e15c0cd5bb0ed6b5c2e.js' />
      <Script type='text/javascript' src='//pl21201883.toprevenuegate.com/cb/a7/24/cba724b168d4299365eee7b175dfab00.js' />
    </>
  )
}

export default page