import { getPostSt, getPoular, readMoreSt } from '@/actions';
import Tag from '@/components/Tag';
import ContentDetails from '@/components/ContentDetails';
import { calculateReadingTime } from '@/lib/utils';
import ArticleDetailsOther from '@/components/articles/ArticleDetailsOther';
import Image from 'next/image';
import Script from 'next/script';
import PopularCard from '@/components/PopularCard';
 
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
  const readMorePost = await readMoreSt(randomCat, post.id);
  const readingTime = calculateReadingTime(post.storyText);
  const popular = await getPoular()
 
  return (
    <article>
      <Script type='text/javascript' src='//affordspoonsgray.com/f1/35/b6/f135b6c7596d2e6a99fcbc6d0399e175.js' /> 
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
      <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Tag
          name={post.category}
          link={`/stories?cat=${post.category}`}
          className="px-6 text-sm py-2"
        />
        <h1
          className="inline-block mt-6 font-semibold capitalize text-white text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
        >
          {post.title}
        </h1>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
      <Image
        src={post.imageUrl}
        placeholder="blur"
        blurDataURL={post.imageUrl}
        alt={post.title}
        width={700}
        height={700}
        className="aspect-square w-full h-full object-cover object-center"
        priority
        sizes="100vw"
      />
    </div>
    <ContentDetails 
      date={post.timestamp?.toDate()}
      url={`/stories?cat=${post.category}`}
      category={post.category}
      readingTime={readingTime}
    />
    <div className="grid grid-cols-12  gap-y-8 lg:gap-8 xl:gap-16 mt-8 px-5 md:px-10">
      <div className="col-span-12 lg:col-span-4">
      <details
          className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
          open={false}
        >
          <summary className="text-lg font-semibold capitalize cursor-pointer">
          قصص ذات صلة
          </summary>
          <ul className="mt-4 font-in text-base">
            {readMorePost.map(article => (
              <li key={article.id} className='py-1'>
                <a href={`/stories/${article.id}`} className='flex items-center justify-star'>
                  <span className="hover:underline">{article.title}</span>
                </a>
              </li>
            ))}        
          </ul>
        </details>
      </div>
      <ArticleDetailsOther 
        key={id} 
        articleText={post.storyText} 
        isFromEditor={post.isFromEditor}
      />
    </div>
    <div className="flex flex-wrap gap-6 max-w-7xl mx-auto my-8 p-4 lg:p-10">
            {popular?.map(article => (
              <PopularCard 
                key={article.id}
                imageUrl={article.imageUrl}
                title={article.title}
                articleText={article.articleText}
                id={article.id}
                isFromEditor={article.isFromEditor}
                category={article.category}
                date={article.timestamp?.toDate()}
              />
            ))}
          </div>
  </article>
  )
}

export default Story

