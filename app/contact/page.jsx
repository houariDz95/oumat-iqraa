import Contact from '@/components/Contact'
import Navbar from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen'>
        <Navbar />
        <Contact />
    </div>
  )
}

export default page