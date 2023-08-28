'use client'
import Link from 'next/link';
import { EditorState, convertFromRaw } from 'draft-js';
import {LazyMotion, Lazym, domAnimation, m} from 'framer-motion'
import { Avatar } from '@mui/material';
import {AiOutlineCalendar} from "react-icons/ai";
import moment from 'moment';
import 'moment/locale/ar';
import { auth } from '@/firebase';
import { usePathname } from 'next/navigation';
moment.locale('ar');

const ArticleCard = ({ data, hide, handleDelete }) => {

  const contentState = convertFromRaw(data.content);
  const editorState = EditorState.createWithContent(contentState);
  const pathName = usePathname();

  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  const slicedBlocks = editorState
    .getCurrentContent()
    .getBlockMap()
    .toArray()
    .slice(0, 150);

  const truncatedDescription = truncateText(slicedBlocks.map(block => block.getText()).join(''), 130);

  return (
  <LazyMotion features={domAnimation}>
   <m.div
      className={`relative flex-1 break-inside-avoid shadow-md rounded-md bg-clip-padding p-1 xs:p-4 md:p-6 pb-4 bg-white  w-full  ${hide ? "p-3" : "p-6"} group h-fit`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/articles/${data.id}`}>
        <h2 className={`text-${hide ? "lg" : "xl"} font-semibold mb-2 text-black hover:text-primary font-plex duration-300 transition-all cursor-pointer`}>
          {data.title.length > 35 ? data.title.slice(0, 35) + '...' : data.title}
        </h2>

        {!hide && <Link href={`/profile/${data.uid}`} className="flex items-center gap-2 mb-2 cursor-pointer">
          <Avatar alt={data.createdBy} src={data.userImage} sx={{ width: 28, height: 28 }}/>
          <span className="text-gray-500 text-sm">{data.createdBy}</span>
        </Link>}

        <p className={`text-gray-700 mb-4 ${hide && "text-sm"} mt-4 `}>{truncatedDescription}</p>

        {!hide && <p className="text-black flex items-center gap-2 text-sm">
          <AiOutlineCalendar size={18} color='#6449ff' />
          {moment(data.timestamp?.toDate(), 'ar').format('DD MMMM YYYY')}
        </p>}

        {auth?.currentUser?.uid === data?.uid && pathName === `/profile/${auth?.currentUser?.uid }` &&(
          <div className='flex-center gap-4 border-t border-gray-100  pt-0 md:pt-3'>
            <p
              className='font-inter text-sm orange_gradient cursor-pointer'
              onClick={handleDelete}
            >
              حذف 
            </p>
          </div>
        )}

        <div className='absolute right-0 top-[35%] w-1 h-16 bg-primary md:group-hover:h-full md:group-hover:top-0 duration-300 transition-all ease-linear'/>
      </Link>
     </m.div>
    </LazyMotion>
  );
};

export default ArticleCard;