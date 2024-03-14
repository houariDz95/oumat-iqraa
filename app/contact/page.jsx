import Banner_350 from '@/Banners/Banner_350'
import Banner_720 from '@/Banners/Banner_720'
import Contact from '@/components/Contact'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='min-h-screen'>
          <div className='max-w-xl mx-auto w-full flex items-center justify-center my-5'>
            <Banner_720 />
          </div>
            <Contact /> 
            <div className="max-w-6xl mx-auto flex items-center justify-center">
            <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
          </div>
      </div>
    </>
  )
}

export default page