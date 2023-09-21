'use client';
import {LazyMotion, domAnimation, m} from 'framer-motion';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import Loader from "../Loader";
import { updateText } from "@/utils/updateText";
import { useMediaQuery } from "@react-hook/media-query";
import { useInView } from 'react-intersection-observer';
import dynamic from "next/dynamic";
const ReadMore = dynamic(() => import("./ReadMore"), {ssr: false});


const ArticleDetailsOther = ({imageUrl, title, isLoading, date, articleText, isFromEditor, category, id}) => {
  const randomCat = category?.[Math.floor(Math.random() * category.length)];

    const isMobile = useMediaQuery('(max-width: 768px)');
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once when the element enters the viewport
    });

    console.log(isLoading)

    if(isLoading) {
      return <div className="h-36 flex-center flex-1">
        <Loader />
      </div>
    }
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="max-w-2xl flex-1 p-4 md:p-0 mx-auto"
        initial={!isMobile ? { opacity: 0, y: 20 } : {opacity: 1, y: 0}}
        animate={!isMobile ? { opacity: 1, y: 0 }: {}}
        transition={!isMobile ? { duration: 0.3 } : {}}
      >
          <div className="flex items-center gap-2 mb-4">
              <p className="text-gray-500 flex items-center gap-2 text-sm">
              <AiOutlineCalendar size={18} color='#6449ff' />
              {moment(date, 'ar').format('DD MMMM YYYY')}
              </p>
          </div>
          <h2 className="text-3xl font-semibold mb-4 blue_gradient">{title}</h2>
          <Image 
              src={imageUrl} 
              alt={title} 
              className="w-full max-h-[350px] object-cover rounded-lg shadow-md my-12" 
              width={400} 
              height={400}
          />
          <div ref={ref}>
            {inView ? updateText(articleText, isFromEditor) : <p>Loading...</p>}
          </div>
          <div className="flex flex-center gap-6 text-lg font-bold text-gray-900 my-10">
              <span>*</span>
              <span>*</span>
              <span>*</span>
          </div>
          <ReadMore randomCat={randomCat} id={id}/>
      </m.div>
    </LazyMotion>
  )
}

export default ArticleDetailsOther