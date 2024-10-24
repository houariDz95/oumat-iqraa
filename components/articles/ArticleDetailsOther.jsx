'use client';

import { useState, useEffect } from 'react';

import Banner_720 from "@/Banners/Banner_720";
import { updateText } from "@/utils/updateText";


const ArticleDetailsOther = ({ articleText, isFromEditor }) => {

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

  return (
    <div className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max">
      <Banner_720 />
      <div className="mb-5 col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark first-letter:text-3xl sm:first-letter:text-5xl">
        {updateText(articleText, isFromEditor)}
      </div>

      {/* Modal Code */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-neutral-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 m-2 bg-red-500 text-white  z-50 rounded-full w-8 h-8 flex items-center justify-center"
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




// {isModalOpen && (
//   <div className="fixed inset-0 bg-neutral-800 bg-opacity-50 flex items-center justify-center z-50">
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
//       <h2 className="text-2xl font-bold mb-4">تهانينا!</h2>
//       <p className="mb-4">لقد ربحت جهاز iPhone 15 Pro Max!</p>
//       <img
//         src="/iphone.jpg"
//         alt="iPhone 15 Pro Max"
//         className="mx-auto mb-4 w-40 h-auto"
//       />
//       <p className="mb-4">أكمل المهام البسيطة واحصل على جهاز iPhone الخاص بك!</p>
//       <div className="flex justify-center gap-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//           onClick={handleClick}
//         >
//             احصل عليه الآن
//         </button>
//         <button
//           className="bg-zinc-500 text-white px-4 py-2 rounded hover:bg-zinc-700"
//           onClick={handleClick}
//         >
//           قم بذلك لاحقًا
//         </button>
//       </div>
//     </div>
//   </div>
// )}