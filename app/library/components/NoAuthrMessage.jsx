'use client'

import { useRouter } from "next/navigation"

import Banner_350 from "@/Banners/Banner_350"
import { Button } from "@/components/ui/button"
import TitleHeader from "./TitleHeader"

const NoAuthorMessage = ({title}) => {
    const router = useRouter()
  return (
    <>
    <TitleHeader title="المساهمون" hide />
      <div className="w-full flex min-h-screen max-w-7xl mx-auto p-4">
        <div className="flex-1  p-4">
          <div className="text-xl text-slate-500 font-bold">
            {title} غير متاح
          </div>
          <p
            className="py-2 my-2 text-md text-right text-neutral-700 dark:text-neutral-400"
            style={{ whiteSpace: 'pre-line', wordWrap: 'break-word' }}
          >
            البيانات لهذا {title} غير متاحة في الوقت الحالي. سنقوم بإصلاحها قريبًا.
          </p>
          <Button size="lg" onClick={() => router.back()}>
          العودة    
          </Button>
          <Banner_350 />
        </div>
      </div>
    </>
  )
}

export default NoAuthorMessage