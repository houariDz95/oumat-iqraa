
import TitleHeader from "../../components/TitleHeader"
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"
import { Noto_Kufi_Arabic } from "next/font/google"
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import { getBook, getBooksByCategory } from "@/lib/library-actions"
import BookCard from "../../components/BookCard"
import Banner_720 from "@/Banners/Banner_720"

const kufi = Noto_Kufi_Arabic({ subsets: ['arabic'], weight: '400' })

export async function generateMetadata({params: {id}}){
  const book = await getBook(id)
  
  return {
    title: book.title,
    description: book.text,
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image": book.img,
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image": book.img,
      "og:type": "website",
    }
    }
}


const Book = async ({params: {id}}) => {
  const book = await getBook(id);
  const books = await getBooksByCategory(book.type.url, 2)
  console.log(book)
  return (
    <>
      <TitleHeader title={book.title} />
      <div data-mndbanid="b7e7b88b-a711-4c9a-8d54-6a61b6269b0a"></div>
      <div className="flex items-center justify-center overflow-hidden">
            <Banner_720 />
        </div> 
      <div className='w-full flex min-h-screen max-w-7xl mx-auto p-4'>
          <div className='flex-[0.25] hidden lg:block border-l border-primary p-4 h-fit'>
            <h3 className="text-lg font-semibold capitalize cursor-pointer py-2">
              إخترنا لكم
            </h3>
            <div className="lg:grid grid-cols-2 gap-4">
              {books.books.map(item => (
                <BookCard key={item._id} id={item.bookId} title={item.title} img={item.img} />
              ))}
            </div>
          </div>
          <div className='flex-1 lg:flex-[0.75] p-4'>
            <div className="flex gap-x-10 flex-col lg:flex-row items-center lg:items-start">
              <img src={book.img} className="object-contain  w-[264px] h-[350px] " alt={book.title} />
              <div className="flex flex-col gap-y-4 mt-5 lg:mt-0">
                <h2 className="text-xl text-orange-500 font-bold">{book.title}</h2>
                <Link href={`/library/${book.authorId}`}>
                  <h3 className="text-xl text-primary font-normal underline-offset-4 hover:underline">{book.author}</h3>
                </Link>
                <div className="flex items-center gap-4">
                  <Button variant="default" size="sm">
                    <Link href={`/library?cat=${book.type.url}&page=1`}>
                    {book.type.genre}
                    </Link> 
                  </Button>
                  <span className="px-2 py-1 border rounded-lg text-sm">{book.words}</span>
                </div>
                <p 
                className={cn(kufi.className, "border-t py-2 my-4 text-md text-right text-neutral-700 dark:text-neutral-400")} 
                style={{ whiteSpace: 'pre-line', wordWrap: "break-word"}}>
                  {book.text}
                </p>
              </div>
            </div>
            <div className="mt-10"> 
              <h4 className="text-[20px] font-normal">تحميل كتاب {book.title}</h4>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                {book.downloadLinks.map((link, i) =>(
                  <Link href={link.downloadLink}  className="flex items-center gap-2 px-2 pl-4 py-1 border rounded-full hover:text-primary" key={i}>
                    <Image src={link.downloadImg} width={40} height={40} className="object-contain" alt={link.downloadTitle} />
                    {link.downloadTitle}
                  </Link>
                ))}
              </div>
            </div>
            <div data-mndbanid="b7e7b88b-a711-4c9a-8d54-6a61b6269b0a"></div>
            <div className="mt-10">
              <h4 className="text-[20px] font-normal mb-4">تاريخ إصدارات هذا الكتاب</h4>
              <span className="text-sm dark:text-gray-300 text-gray-700">صدر هذا الكتاب عام {book.date}</span>
            </div>
            <div className="mt-10">
              <h4 className="text-[20px] font-normal mb-4">محتوى الكتاب</h4>
              <div className="flex flex-col gap-3">
                {book.contents.map((item, i) => (
                  <span key={i} className="text-sm flex items-center gap-2 text-neutral-700 dark:text-neutral-400">
                    <ChevronLeft className="w-4 h-4"/> {item.title}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-[20px] font-normal mb-4">عن المؤلف</h4>
              <p 
                className={cn(kufi.className, "py-2 my-4 text-md text-right text-neutral-700 dark:text-neutral-400")} 
                style={{ whiteSpace: 'pre-line', wordWrap: "break-word"}}>
                  {book.aboutAuthor}
                </p>
            </div>
              <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
              <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
          </div>
      </div>
    </>
  )
}

export default Book