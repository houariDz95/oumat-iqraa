'use client';

import { useState, useEffect } from 'react';

import Banner_720 from "@/Banners/Banner_720";
import { updateText } from "@/utils/updateText";


const ArticleDetailsOther = ({ articleText, isFromEditor }) => {

  // State for controlling the modal
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClick = () => {
    window.open("https://affordspoonsgray.com/exczp3epj?key=84843890de497d381778a7c0dcd69354", "_blank");
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Open modal every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsModalOpen(true);
    }, 15000); // 15 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max">
      <Banner_720 />
      {/* <div className="mb-5 col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark first-letter:text-3xl sm:first-letter:text-5xl">
        {updateText(articleText, isFromEditor)}
      </div> */}

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
  );
};

export default ArticleDetailsOther;
