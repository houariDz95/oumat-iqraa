'use client'
import Image from "next/image"
import Link from "next/link"
import {LazyMotion, domAnimation, m} from "framer-motion"
import {BsArrowLeft} from 'react-icons/bs'
import { useMediaQuery } from '@react-hook/media-query';

const Features = ({ title, desc, img, buttonText, styles, direction, url }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10 bg-white my-4 shadow-sm`}>
      <div className={styles}>
        <LazyMotion features={domAnimation}>
          <m.div
          initial={!isMobile ? {opacity: 0, x: direction === "right" ? 100 : -100} : {}}
          animate={!isMobile ? {opacity: 1, x: 0} : {} }
          transition={!isMobile ? { delay: 2, duration: 1 }: {}}
            className="relative h-[400px] flex-1"
          >
            <Image
              src={img}
              width={400}
              height={400}
              alt="get-started"
              className=" object-contain w-full h-full"
              loading="eager"
            />
          </m.div>
          <m.div
            initial={!isMobile ? {opacity: 0, x: direction === "left" ? 100 : -100}: {}}
            animate={!isMobile ? { opacity: 1, x: 0 }: {}}
            transition={!isMobile ? { delay: 2, duration: 1 } : {}}
            className="flex-1 flex justify-center flex-col gap-4"
          >
            <m.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className="text-2xl font-bold p-2 text-primary">
              {title}
            </m.h2>
            <p className="text-lg text-black">{desc}</p>
            <Link
            href={url} 
            className="bg-primary text-white py-2 px-4 rounded flex items-center transition-colors duration-300 hover:bg-primary/80 hover:text-white w-fit">
              {buttonText}
              <BsArrowLeft className="mr-1" size={24}/>
            </Link>
          </m.div>
        </LazyMotion>
      </div>
  </section>
  );
}
export default Features