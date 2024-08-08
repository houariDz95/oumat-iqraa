"use client"

import { allBlogs } from '@/.contentlayer/generated';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ReactTyped  } from 'react-typed';

const HeaderDate = () => {
    const [date, setDate] = useState('');
    const [currentBlog, setCurrentBlog] = useState(0)


    const prev = () => {
        setCurrentBlog((prev) => currentBlog === allBlogs.slice(0, 5).length - 1 ? 0 : prev + 1)
    }

    const next = () => {
        setCurrentBlog((prev) => currentBlog === 0 ? allBlogs.slice(0, 5).length - 1 : prev - 1)
    }
    
    useEffect(() => {
      const today = new Date();
      const arabicDate = new Intl.DateTimeFormat('ar-EG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(today);
  
      setDate(arabicDate);
    }, []);

  return (
    <div className="bg-gray-100 shadow-sm border-[lightgray] border-b z-20 bg-white w-screen px-5  md:px-10 lg:px-14 xl:px-32 flex items-center gap-8">
        <div className="hidden md:flex items-center gap-2 text-sm">
            <Clock size={16} className='text-accentSoft'/>
            {date}
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row  flex-1">
            <div className='flex items-center flex-col md:flex-row gap-3'> 
                <h3 className="bg-red-500 text-white text-md py-3 px-4">
                    أخبار عاجلة 
                </h3>
                <Link href={allBlogs.slice(0, 5)[currentBlog].url} className="text-sm text-dark inline-block px-3 md:px-0">
                    <ReactTyped
                        strings={[allBlogs.slice(0, 5)[currentBlog].title]}
                        typeSpeed={50}  // Typing speed in milliseconds
                        backSpeed={30}  // Backspace speed in milliseconds
                        loop            // Enable looping
                    /> 
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={next}>
                    <ArrowRight size={20}/>
                </Button>
                <Button variant="ghost" size="sm" onClick={prev}>
                    <ArrowLeft size={20}/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default HeaderDate