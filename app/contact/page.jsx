import BannerMd from '@/banners/BannerMd'
import Contact from '@/components/Contact'
import Navbar from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        <Contact />
        <div className='max-w-xl mx-auto w-full flex items-center justify-center '>
          <BannerMd />
        </div>
    </div>
  )
}

export default page