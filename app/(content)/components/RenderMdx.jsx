"use client"
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {
 // State for controlling the modal

    const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div className='my-8 col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accentSoft/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accentSoft
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg
    
    prose-li:marker:text-accentSoft
    porse-li:text-accentSoft
    first-letter:text-3xl
    sm:first-letter:text-5xl 
    '>  
       <MDXContent components={mdxComponents}/>
       <div className="mb-4 flex items-center justify-center">
          <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
        </div>
    </div>
  )
}

export default RenderMdx



