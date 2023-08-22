"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import SearchButton from "./SearchButton"


const Header = () => {
  const router = useRouter()

  return (
    <>
      <section className="relative lg:h-[calc(100vh-72px)] h-[85vh] bg-primary">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-6xl mx-auto flex-col-center h-[70%] gap-4 p-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className="text-[36px] font-bold leading-snug text-white mt-10 text-center font-plex"
          >
            مرحبًا بكم في موقع أمة اقرأ 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-[20px] font-medium text-white text-center leading-relaxed mb-10"
          >
            اكتشف قدرات جديدة ورائعة مع موقعنا! نحن نقدم لك فرصة استخدام أحدث التقنيات في عالم التعلم
            العميق لاكتشاف، قراءة ، كتابة، وإنشاء الصور بطرق مدهشة. مع قدراتنا الفريدة
          </motion.p>
          <motion.form
            action={(formData) => {
              const searchTerm = formData.get("search")
              if(!formData.get("search")) return 
              router.push(`/search/${searchTerm}`)
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
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
          </motion.form>
        </motion.div>
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