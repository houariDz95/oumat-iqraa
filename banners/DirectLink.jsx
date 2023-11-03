"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const DirectLink = () => {
  const [showPopup, setShowPopup] = useState(true);

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Set a timer to show the popup every 10 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    // Clear the timer when the component unmounts or when the user clicks the link
    return () => clearTimeout(popupTimer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-4 max-w-xl mx-auto right-4">
          <div className="w-72 max-w-sm bg-white border rounded-lg shadow-xl flex flex-col items-center p-4">
            <Image
              width={96}
              height={96}
              src="/assets/direct.jpg"
              alt="Image"
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-lg font-semibold mb-2">
              عرض إعلاني
            </p>
            <p className="text-gray-600 text-center mb-4">
              هنا يمكنك العثور على منتجات رائعة!
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.toprevenuegate.com/zx6m4jtj?key=cff8d3938d29f82cb71f68f898db5788"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                انقر هنا
              </a>
              <button
                onClick={closePopup}
                style={{backgroundColor: 'red'}}
                className="px-4 py-1 text-white rounded-lg hover:bg-red-700"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectLink;


