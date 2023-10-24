import BannerSm from '@/banners/BannerSm'
import Contact from '@/components/Contact'
import Navbar from '@/components/Nav'
import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <>
      <Script async="async" data-cfasync="false" src="//pl20812775.toprevenuegate.com/6b3890282dbcd2ff77e5aedcafd49c1a/invoke.js" />
      <div className='min-h-screen'>
          <Navbar />
          <div className='max-w-xl mx-auto w-full flex items-center justify-center my-5'>
            <BannerSm />
          </div>
            <Contact /> 
          <div className="max-w-6xl flex items-center justify-center  mx-auto">
            <div id="container-6b3890282dbcd2ff77e5aedcafd49c1a"></div>
          </div>
      </div>
    </>
  )
}

export default page