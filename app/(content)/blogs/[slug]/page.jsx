import { allBlogs } from "@/.contentlayer/generated";
import { cn } from "@/lib/utils";
import { AvatarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import RenderMdx from "../../components/RenderMdx"
import Image from "next/image";
import Link from "next/link";
import Banner_720 from "@/Banners/Banner_720";
import { DownloadCloud } from "lucide-react";
import GithubSlugger, { slug } from "github-slugger";
import BlogLayoutThree from "../../components/BlogLayout";
import siteMetadata from "@/lib/siteMetaData";
import PopularCard from "@/components/PopularCard";
import { getPoular } from "@/actions";

const slugger = new GithubSlugger();

export async function generateMetadata({params}){

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "ar",
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      authors: blog.author.length > 0 ? blog.author : [siteMetadata.author],
    },
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image":blog.image.filePath.replace("../public", ""),
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image":blog.image.filePath.replace("../public", ""),
      "og:type": "website",
    }
    }
}


const BlogPage = async ({params}) => {
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
    const colors = ['#FF6F61', '#008080', '#4B0082']
    const popular = await getPoular()

    const blogs = allBlogs.filter((blog) => (blog.tags[0].includes(blog.tags[0])))
  
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.image.filePath.replace("../public", ""),
        "datePublished": new Date(blog.publishedAt).toISOString(),
        "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
        "author": [{
            "@type": "Person",
            "name": blog?.author ? [blog.author] : "Houari Eddrief",
          }]
      }
  return (
    <>  
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
        <script type='text/javascript' src='//affordspoonsgray.com/f1/35/b6/f135b6c7596d2e6a99fcbc6d0399e175.js'></script>
        <script async="async" data-cfasync="false" src="//affordspoonsgray.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
        <article className="relative mb-10 flex flex-col md:flex-row-reverse gap-y-8 lg:gap-8 xl:gap-16 mt-8 px-5 md:px-10 lg:px-14 xl:px-32 min-h-screen">
            <div className="flex-[0.6] flex flex-col">

                <Banner_720 />

                <h1 className="mt-2 inline-block font-semibold text-2xl md:text-4xl">
                    {blog?.title}
                </h1>

                <div className="mt-10 flex justify-between w-full">
                    <div className="flex gap-2">
                        <AvatarIcon width={45} height={45} className="text-primary"/>
                        <div className="flex flex-col gap-2">
                            <p className="text-dark inline-block font-semibold text-sm tracking-wide">{blog.author}</p>
                            <span className="capitalize text-gray  font-medium text-sm  sm:text-base">
                                {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {blog.tags.map((tag, i) => (
                            <Link 
                            href={`/categories/${tag.replace(" ", "-").trim()}`} 
                            className={cn('text-white text-sm gap-2 font-light px-1.5 py-1 rounded-md border border-black  hover:scale-105 transition-all ease duration-200')} 
                            style={{backgroundColor: colors[i]}}>
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    alt={blog.title}
                    width={780}
                    height={380}
                    className="w-full max-h-[380px] mt-6 object-contain rounded-md "
                />

                <RenderMdx blog={blog} />

                <div className='mb-10 overflow-hidden'>

            </div>
                <div className="mb-4 flex items-center justify-center">
                    <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
                </div>
                <Link 
                href="https://affordspoonsgray.com/j75ssn35?key=55f12044e7cbff305d4db14598c53a3a"
                className='px-8 
                border 
                border-dark 
                hover:scale-105 
                mt-6 
                py-4 
                w-full 
                bg-green-500
                text-white 
                rounded-md 
                transition-all
                duration-500
                ease-in-out
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-3'>
                    <span className='text-2xl font-bold inline-block tracking-wide'>شارك واربح  1000$</span>
                    <DownloadCloud size={45} />
                </Link> 
            </div>
            <div className="flex-[0.4] bg-slate-100 px-4 shadow-sm rounded-sm p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto">
              <div className='relative p-4 mt-10'>
                <h1 className='text-3xl font-bold text-black italic'>الأكثر قراءة</h1>
                <div className='absolute bottom-0 right-5 h-1 w-14 bg-primary'/>
              </div>
              <div className="w-full flex flex-col gap-6 mt-8 h-fit">
                {popular?.map(article => (
                  <PopularCard 
                    fromBlogs
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
            </div>
        </article>

        <article className="flex flex-col mt-12">
              <div className=" px-5 sm:px-10  md:px-24  xl:px-32 flex flex-col">
              <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
                مقالات دات صلة:
              </h1>
              </div>
              <div className="grid mt-10 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16  px-5 sm:px-10 md:px-24 xl:px-32">
              {blogs.map((blog, index) => (
                <article key={index} className="col-span-1 row-span-1 relative">
                  <BlogLayoutThree blog={blog} />
                </article>
              ))}
            </div>
        </article>
    </>
  )
}

export default BlogPage