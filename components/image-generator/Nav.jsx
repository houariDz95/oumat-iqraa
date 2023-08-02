"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <header className="w-full bg-gray-900 sm:px-8 px-4 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link href="/">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center p-2 cursor-pointer"
          > 
            <Image src={`/assets/logo_02.png`} alt="Logo" width={36} height={36} className="ml-2" />
            <span className="text-white text-xl font-bold hidden sm:block">أمة اقرأ</span>
          </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex-center gap-2'
        >

          <Link href="/ai-image-generator/create-post" 
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
            إنشاء صورة
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

export default Nav