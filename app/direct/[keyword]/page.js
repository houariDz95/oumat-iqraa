"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import BannerSq from "@/banners/BannerSq"
import Script from "next/script"

const page = () => {
    const router = useRouter()
    useEffect(() => {
        const newWindow = window.open("https://www.toprevenuegate.com/gvybxabv?key=a56a58d60fd2d3fdac49b5f67583ada4", '_blank', 'noopener,noreferrer')
        window.open("https://www.toprevenuegate.com/gvybxabv?key=a56a58d60fd2d3fdac49b5f67583ada4", '_blank', 'noopener,noreferrer')
    }, [])
  return (
    <div className="max-6xl mx-auto min-h-screen bg-zinc-500 flex items-center justify-center">
        <BannerSq />
        <Script type='text/javascript' src='//pl20816003.toprevenuegate.com/bf/9e/b6/bf9eb6e7b5ddd3ce92701feb9b883409.js' />
        <Script async="async" data-cfasync="false" src="//pl20812775.toprevenuegate.com/6b3890282dbcd2ff77e5aedcafd49c1a/invoke.js" />
        <div id="container-6b3890282dbcd2ff77e5aedcafd49c1a"></div>
    </div>
  )
}

export default page