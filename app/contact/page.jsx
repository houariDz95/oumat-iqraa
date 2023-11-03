import BannerSm from '@/banners/BannerSm'
import Contact from '@/components/Contact'
import Navbar from '@/components/Nav'
import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='min-h-screen'>
          <Navbar />
          <div className='max-w-xl mx-auto w-full flex items-center justify-center my-5'>
            <BannerSm />
          </div>
            <Contact /> 
          <div className="max-w-6xl flex items-center justify-center  mx-auto">
              <Script async="async" data-cfasync="false" src="//pl21201781.toprevenuegate.com/6638e496d98320ae6eda5fbad9755f56/invoke.js" />
              <div id="container-6638e496d98320ae6eda5fbad9755f56"></div>
          </div>
      </div>
    </>
  )
}

export default page