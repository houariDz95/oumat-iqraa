import ArticleDetailsOther from '@/components/articles/ArticleDetailsOther';
import { getPost, readMore } from '@/actions';
import Tag from '@/components/Tag';
import Image from 'next/image';
import ContentDetails from '@/components/ContentDetails';
import { calculateReadingTime } from '@/lib/utils';
import Script from 'next/script';
import Banner_720 from '@/Banners/Banner_720';

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
  const readingTime = calculateReadingTime(post.articleText)
  const readMorePost = await readMore(randomCat, post.id)

  if(!post) return (
    <>
      <div className="max-w-[720px] mx-auto">
      <Banner_720 />
      </div>
      <div class=" my-10 bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
              <div class="text-center">
                  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                      الموقع قيد الصيانة
                  </h2>
                  <p class="mt-2 text-center text-sm text-gray-600">
                      سنقوم بإصلاح المشكلة خلال ٢٤ ساعة. يمكنك زيارة مكتبتنا لرؤية الكتب المذهلة!
                  </p>
                  <a href="https://www.oumat-iqraa.com/library" class="mt-6 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                      زيارة المكتبة
                  </a>
              </div>
          </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
        <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
      </div>
    </>
  )
  return (
    <article>
      <Script type='text/javascript' src='//pl22333284.profitablegatecpm.com/f1/35/b6/f135b6c7596d2e6a99fcbc6d0399e175.js' />
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={post.category}
            link={`/articles?cat=${post.category}`}
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
        url={`/articles?cat=${post.category}`}
        category={post.category}
        readingTime={readingTime}
      />
      <div className="grid grid-cols-12  gap-y-8 lg:gap-8 xl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-4">
        <details
            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              مقالات ذات صلة
            </summary>
            <ul className="mt-4 font-in text-base">
              {readMorePost.map(article => (
                <li key={article.id} className='py-1'>
                  <a href={`/artilces/others/${article.id}`} className='flex items-center justify-star'>
                    <span className="hover:underline">{article.title}</span>
                  </a>
                </li>
              ))}        
            </ul>
          </details>
        </div>
        <ArticleDetailsOther 
          key={id} 
          articleText={post.articleText} 
          isFromEditor={post.isFromEditor}
        />
      </div>
    </article>
  )
}

export default page