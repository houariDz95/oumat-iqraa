

import { cn } from "@/lib/utils"

import { Noto_Kufi_Arabic } from "next/font/google"

import { getAuthor, getRandomAuthors } from "@/lib/library-actions"
import TitleHeader from "../../components/TitleHeader"
import BookCard from "../../components/BookCard"
import Banner_720 from "@/Banners/Banner_720"
import NoAuthorMessage from "../../components/NoAuthrMessage"

const kufi = Noto_Kufi_Arabic({ subsets: ['arabic'], weight: '400' })

export async function generateMetadata({params: {id}}){
  const author = await getAuthor(id)
  return {
    title: author ?  author.title : "المساهمون",
    description: author ? author.text : "غير متاح",
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image": author ? author.img : "/assets/logo.svg",
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image": author ? author.img : "/assets/logo.svg",
      "og:type": "website",
    }
    }
}


const Author = async ({params: {id}}) => {
  const author = await getAuthor(id)
  const authors = await getRandomAuthors();

  if(!author.lenhgth) return <NoAuthorMessage title="المؤلف" />
  return (
    <>
      <TitleHeader title="المساهمون" />
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        <div data-mndbanid="b7e7b88b-a711-4c9a-8d54-6a61b6269b0a"></div>
      </div>
      <div className='w-full flex min-h-screen max-w-7xl mx-auto'>
          <div className='flex-[0.25] hidden lg:block border-l border-primary p-4 h-fit'>
            <h3 className="text-lg font-semibold capitalize cursor-pointer py-2">
              إخترنا لكم
            </h3>
            <div className="lg:grid grid-cols-2 gap-4">
              {authors.map(item => (
                <BookCard id={item.authorId} title={item.title} img={item.img} forContributor/>
              ))}
            </div>
          </div>
          <div className='flex-1 lg:flex-[0.75] p-4'>
            <Banner_720 />
            <div className="flex gap-x-10 flex-col lg:flex-row items-center lg:items-start w-full">
               {author?.img && <img src={author?.img}  className="lg:flex-[0.3] object-contain" alt={author.name} />}
                <div className="flex flex-col gap-y-4 mt-5 lg:mt-0 lg:flex-[0.7]">
                  <h2 className="text-xl text-slate-500 font-bold">{author.name}</h2>
                  <p 
                  className={cn(kufi.className, "py-2 my-2 text-md text-right text-neutral-700 dark:text-neutral-400")} 
                  style={{ whiteSpace: 'pre-line', wordWrap: "break-word"}}>
                    {author.description}
                  </p>
                </div>
              </div>
              <div data-mndbanid="b7e7b88b-a711-4c9a-8d54-6a61b6269b0a"></div>
              <div className="mt-16">
                <h4 className="text-[20px] font-normal mb-4">الكتب المُؤلّفة للكاتب {author?.name} ({author.books.length} كتاب)</h4>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-10 gap-4'>
                    {author.books.map(book => (
                        <BookCard key={book.id} img={book.img} id={book.id.replace("/books/", "")} title={book.title} />
                    ))}
                </div>
              </div>
              <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
              <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
          </div>
      </div>
    </>
  )
}

export default Author