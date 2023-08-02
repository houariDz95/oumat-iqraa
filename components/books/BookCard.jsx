'use client'
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";

const BookCard = ({book}) => {
  console.log(book.title)
  return (
    <Link href={book.id} className="group cursor-pointer ">
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, transition: {duration: 1}}}
      whileTap={{ scale: 0.95 }}
      className="border-gray-500 border-[1px]">
        <Image 
          className="object-cover w-full h-full group-hover:opacity-20 duration-1000"
          width={223}
          height={296}
          src={book.img}
          alt={book.title}
        />
        <motion.span
        initial={{opacity: 0}}
        whileInView={{ opacity: 1, transition: {duration: 0.8, ease: "easeIn"}}} 
        className='hidden
        absolute 
        top-[50%] 
        left-[50%] 
        translate-x-[-50%] 
        translate-y-[-50%] 
        group-hover:block
        bg-secondary
        text-white
        text-md
        font-semibold
        w-[80%]
        py-2
        rounded-full
        text-center
        opacity-1
        z-10
        '>
          شاهد التفاصيل
        </motion.span>
      </motion.div>
    </Link>
  )
}

export default BookCard