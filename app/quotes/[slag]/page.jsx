import Navbar from '@/components/Nav'
import PageTitle from '@/components/PageTitle'
import QuotesAuthor from '@/components/quotes/QuotesAuthor'
import React from 'react'

export async function generateMetadata({params: {slag}}){
  const decodedKeyword =  decodeURIComponent(slag);

  return {
    title: `${decodedKeyword} - أقوال ${decodedKeyword}`,
    description: `تصفح مجموعة من أقوال ${decodedKeyword} في موقع أمة اقرأ واستمتع بحكم وكلماته الملهمة.`,
    }
}

const page = ({params: {slag}}) => {
    const decodedKeyword =  decodeURIComponent(slag);
  return (
    <div>
        <Navbar />
        <PageTitle title={decodedKeyword} desc="عبارات ملهمة وملفتة للنظر" />
        <QuotesAuthor author={decodedKeyword} />
    </div>
  )
}

export default page