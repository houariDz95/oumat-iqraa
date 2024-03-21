'use client';

import Banner_350 from "@/Banners/Banner_350";
import { updateText } from "@/utils/updateText";



const ArticleDetailsOther = ({articleText, isFromEditor}) => {
  return (
    <div
      className="col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max"
    >
      <Banner_350 />
      <div className="mb-5 col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
          prose-blockquote:bg-accent/20 
          prose-blockquote:p-2
          prose-blockquote:px-6
          prose-blockquote:border-accent
          prose-blockquote:not-italic
          prose-blockquote:rounded-r-lg

          prose-li:marker:text-accent

          dark:prose-invert
          dark:prose-blockquote:border-accentDark
          dark:prose-blockquote:bg-accentDark/20
          dark:prose-li:marker:text-accentDark

          first-letter:text-3xl
          sm:first-letter:text-5xl
          ">
        {updateText(articleText, isFromEditor)}
      </div>
        <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
        <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
    </div>
  )
}

export default ArticleDetailsOther
