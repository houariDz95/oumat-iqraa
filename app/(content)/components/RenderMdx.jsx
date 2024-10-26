"use client"
import React, { useEffect } from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {
 // State for controlling the modal
 const [isModalOpen, setIsModalOpen] = useState(true);

 const handleClick = () => {
   window.open("https://affordspoonsgray.com/br2tqwh1b?key=6e18e772fe82e44d0f60f85385178228", "_blank");
   setIsModalOpen(false);
 };

 const handleCloseModal = () => {
   setIsModalOpen(false);
 };

 // Open modal every 10 seconds
 useEffect(() => {
   const timer = setInterval(() => {
     setIsModalOpen(true);
   }, 10000); // 15 seconds

   // Clear the interval when the component is unmounted
   return () => clearInterval(timer);
 }, []);
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
        {/* Modal Code */}
        {isModalOpen && (
        <div className="fixed inset-0 bg-neutral-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 m-2 bg-red-500 z-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>

            {/* Image with Play Button */}
            <div className="relative">
              <img
                src="/watch-1.jpg"
                alt="Watch now"
                className="w-full h-auto max-w-md rounded-lg shadow-lg"
              />
              {/* Play Button */}
              <button
                onClick={handleClick}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-5.197-3.074A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.073a1 1 0 000-1.664z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RenderMdx



