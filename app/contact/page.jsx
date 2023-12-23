import Banner_350 from '@/Banners/Banner_350'
import Banner_720 from '@/Banners/Banner_720'
import Contact from '@/components/Contact'
import Navbar from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='min-h-screen'>
          <Navbar />
          <div className='max-w-xl mx-auto w-full flex items-center justify-center my-5'>
            <Banner_720 />
          </div>
            <Contact /> 
          <div className="max-w-6xl flex items-center justify-center  mx-auto">
              <Banner_350 />
          </div>
      </div>
    </>
  )
}

export default page