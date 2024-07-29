import Banner_720 from "@/Banners/Banner_720";
import Article from "@/components/articles/TrendArticle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";




export default function BlogPage() {

  return (
    <>
      <Script type='text/javascript' src='//affordspoonsgray.com/27/7c/cc/277cccb139255375f748ddfc6b9d01de.js' />
      <article> 
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/articles">
                <Button variant="secondary" size="lg">
                    Articles
                </Button>
            </Link>
          <h1
            className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
          >
            شهر أغسطس سيكون الأخطر على مر الاطلاق.. العراف اللبناني الشهير ميشال حايك يفجر مفاجأة ويكشف ما سيحدث بعد أسابيع والجمهور مړعوپ!!
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src="/assets/michel.jpg"
          alt="trend"
          width={1000}
          height={1000}
          className="aspect-square w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12  lg:col-span-4">
            <Banner_720 />
        </div>
        <Article />
      </div>
    </article>
    </>
   
  );
}