"use client"
import { updateTextAndSlice } from '@/utils/updateText'
import moment from "moment";
import 'moment/locale/ar';
import Image from 'next/image';
import Link from 'next/link';

const PopularCard = ({imageUrl, title, articleText, id, isFromEditor, date, category }) => {
  return (
    <div className="flex flex-col w-full md:w-[48%] xl:w-[32%] ">
        <div className='flex flex-between'>
            <span className='text-sm text-gray-500 text-ellipsis'>
            {moment(date, 'ar').format('DD MMMM YYYY')}
            </span>
            <span className='text-sm font-semibold blue_gradient'>{category[0]}</span>
        </div>
        <Link href={`/articles/others/${id}`}>
            <h1 className='text-lg text-black font-semibold hover:text-primary my-2'>{title}</h1>
        </Link>
        <Link href={`/articles/others/${id}`}>
          <div className='flex items-center gap-2'>
              <Image src={imageUrl} alt={title} width={110} height={75} className='w-[110px] h-[75px]'/>
              <p className="text-gray-600 text-sm h-24 hover:text-gray-500">
                {updateTextAndSlice(articleText, isFromEditor)} 
              </p>
          </div>
        </Link>
    </div>
  )
}

export default PopularCard