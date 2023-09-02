'use client'
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import 'moment/locale/ar';


const ArticleCard = ({ data }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        key={data.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="border bg-white border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative "
      >
        <Link href={`/articles/${data.id}`}>
          <span className="text-primary/90 hover:text-primary font-semibold text-lg">
            {data.title}
          </span>
        </Link>
        {/* Add your subtitle here */}
        <p className="text-gray-600 mt-2 h-20 font-semibold">{data?.subtitle}</p>

        {/* Centered button at the bottom */}
        <div className=" w-full text-end">
          <Link className="text-primary font-semibold py-1 px-4 rounded cursor-pointer" href={`/articles/${data.id}`}>
          تابع القراءة »         
         </Link>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default ArticleCard;

