"use client"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

const Header = () => {
  return (
    <>
      <section className="relative lg:h-[calc(100vh-72px)] sm:h-[92vh] h-[100vh] bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center h-[70%] gap-4 p-4">
          <h2 className="text-[36px] font-bold leading-snug text-white mt-10 text-center">
            مرحبًا بكم في موقع أمة اقرأ 
          </h2>
          <p className="text-[20px] font-medium text-white text-center leading-relaxed mb-10">
            نحن نقدم لك مجموعة متنوعة من القصص والمقالات والاقتباسات التي تلهم وتثري معرفتك.
            انضم إلينا اليوم واستمتع بمحتوى فريد يلبي اهتماماتك ويوسع آفاقك الثقافية.
          </p>
          <Button asChild size="lg" className=" items-center gap-2 font-semibold text-lg text-primary " variant="secondary"> 
            <Link href="/categories/all">
              <ArrowRightIcon className="w-5 h-5"/>
              استكشف الآن
            </Link>
          </Button>
        </div>
        <div className="absolute inset-x-0 lg:bottom-32 bottom-0">
          <div className="h-16 bg-gradientto-b from-primary to-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f3f4f6"
                fill-opacity="1"
                d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header