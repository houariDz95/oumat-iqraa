"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from "next/navigation"
import SearchButton from "./SearchButton"


const Header = () => {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <section className="relative lg:h-[calc(100vh-72px)] xs:h-[92vh] h-[100vh] bg-primary">
        <LazyMotion features={domAnimation}>
          <m.div 
          initial={!isMobile ? { opacity: 0, y: -50 } : {opacity: 1, y: 0}}
          animate={!isMobile ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex-col-center h-[70%] gap-4 p-4">
            <LazyMotion features={domAnimation}>
              <m.h2
                initial={!isMobile ? { opacity: 0, y: -20 } : {opacity: 1, y: 0}}
                animate={!isMobile ? { opacity: 1, y: 0 }: {}}
                transition={!isMobile  ? { delay: 0.5, duration: 1 } : {}}
                whileInView={!isMobile ? { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } } : {}}
                className="text-[36px] font-bold leading-snug text-white mt-10 text-center font-plex"
              >
                مرحبًا بكم في موقع أمة اقرأ 
              </m.h2>
            </LazyMotion>
            <LazyMotion features={domAnimation}>
              <m.p
                initial={!isMobile ? { opacity: 0, y: -20 } : {opacity: 1, y: 0}}
                animate={!isMobile ? { opacity: 1, y: 0 } : {}}
                transition={!isMobile ? { delay: 1, duration: 1 } : {}}
                className="text-[20px] font-medium text-white text-center leading-relaxed mb-10"
              >
              نحن نقدم لك مجموعة متنوعة من القصص والمقالات والاقتباسات التي تلهم وتثري معرفتك.
               انضم إلينا اليوم واستمتع بمحتوى فريد يلبي اهتماماتك ويوسع آفاقك الثقافية.
              </m.p>
            </LazyMotion>
            <LazyMotion features={domAnimation}>
              <m.form 
                action={(formData) => {
                  const searchTerm = formData.get("search")
                  if(!formData.get("search")) return 
                  router.push(`/search/${searchTerm}`)
                }}
                initial={!isMobile ? { opacity: 0, y: -20 } : {opacity: 1}}
                animate={!isMobile ? { opacity: 1, y: 0 } : {}}
                transition={!isMobile ? { delay: 2, duration: 1 } : {}}
                className="mt-4 flex items-center w-full bg-white p-3"
              >
                <input
                  type="text"
                  name="search"
                  placeholder="ابحث هنا..."
                  dir='rtl'
                  className="flex-1 px-4 py-2 text-right outline-none text-primary font-bold placeholder:text-gray-500"
                />
              <SearchButton styles="py-2 px-4 bg-main-bg font-bold text-white"/>
              </m.form>
            </LazyMotion>
          </m.div>
        </LazyMotion>
        <div className="absolute inset-x-0 lg:bottom-32 sm:bottom-14 bottom-0">
          <div className="h-16 bg-primary">
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