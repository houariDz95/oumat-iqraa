import Navbar from '@/components/Nav';
import PageTitle from '@/components/PageTitle';
import Sidebar from '@/components/Sidebar'
import { getPostSt, readMoreSt } from '@/actions';
import { stCategories } from '@/constants';
import StoryDetails from '@/components/stories/StoryDetails';
import Banner_720 from '@/Banners/Banner_720';

export async function generateMetadata({params: {id}}){

  const post = await getPostSt(id)
  const text = post.storyText
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

const Story = async ({params: {id}}) => {

  const post = await getPostSt(id) 
  const randomCat = post.category?.[Math.floor(Math.random() * post.category.length)];
  const readMorePost = await readMoreSt(randomCat, post.id)
  return (
    <>
      <Navbar />
      <PageTitle title={post.title} desc="استمتع بقراءة قصة شيقة ومثيرة تغطي موضوعًا مهمًا" />
      <div className="max-w-[720px] mx-auto my-2">
        <Banner_720 />
      </div>
      <div className="max-w-6xl mx-auto  min-h-[calc(100vh-73px)] flex mt-10">
        <div className="flex-1 lg:flex-[0.75]">
          <StoryDetails 
          id={id} 
          date={post.timestamp?.toDate()} 
          imageUrl={post.imageUrl}
           title={post.title} 
           category={post.category}
           storyText={post.storyText} 
           isFromEditor={post.isFromEditor}
           readMore={readMorePost}
          />
        </div>
        <div className="flex-[0.25] hidden lg:block sticky top-0 h-full ">
          <Sidebar categories={stCategories}/>
        </div>
      </div>
    </>
  )
}

export default Story