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
        className="border border-gray-300 px-2 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        <Link href={`/articles/${data.id}`}>
          <span className="text-blue-500 hover:text-blue-700 font-semibold text-lg">
            {data.title}
          </span>
        </Link>
        {/* Add your subtitle here */}
        <p className="text-gray-600">{data?.subtitle}</p>
      </m.div>
    </LazyMotion>
  );
};

export default ArticleCard;
