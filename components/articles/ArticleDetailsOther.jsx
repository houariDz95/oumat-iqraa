'use client';

import { useState, useEffect } from 'react';

import Banner_720 from "@/Banners/Banner_720";
import { updateText } from "@/utils/updateText";


const ArticleDetailsOther = ({ articleText, isFromEditor }) => {

  // State for controlling the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    window.open("https://affordspoonsgray.com/gghz8pqy1?key=6c2faeabf825ae2cfaffc07e51469628", "_blank");
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Open modal every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsModalOpen(true);
    }, 20000); // 15 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max">
      <Banner_720 />
      <div className="mb-5 col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark first-letter:text-3xl sm:first-letter:text-5xl">
        {updateText(articleText, isFromEditor)}
      </div> 
      <div>
          <script async="async" data-cfasync="false" src="//affordspoonsgray.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
          <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
      </div>
      {/* Modal Code */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">تهانينا!</h2>
          <p className="mb-4">لقد ربحت جهاز iPhone 15 Pro Max!</p>
          <img
            src="/iphone.jpg"
            alt="iPhone 15 Pro Max"
            className="mx-auto mb-4 w-40 h-auto"
          />
          <p className="mb-4">أكمل المهام البسيطة واحصل على جهاز iPhone الخاص بك!</p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleClick}
            >
              احصل عليه الآن
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              onClick={handleCloseModal}
            >
              قم بذلك لاحقًا
            </button>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default ArticleDetailsOther;
