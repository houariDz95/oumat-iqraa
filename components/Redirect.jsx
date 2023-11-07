'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
const Redirect = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => (
            router.push('https://www.toprevenuegate.com/zx6m4jtj?key=cff8d3938d29f82cb71f68f898db5788')
        ), 3000)
    })
  return (
    <Link 
    href="https://www.toprevenuegate.com/zx6m4jtj?key=cff8d3938d29f82cb71f68f898db5788"
    className="bg-green-500 px-10 py-4 rounded-xl text-white font-semobold"
    target="_blank"
    >
      Click Here to watch movie
    </Link>
  )
}

export default Redirect