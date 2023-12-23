'use client';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import { updateText } from "@/utils/updateText";
import dynamic from "next/dynamic";
import Banner_350 from "@/Banners/Banner_350";

const ReadMore = dynamic(() => import("./ReadMore"), {ssr: false});


const ArticleDetailsOther = ({imageUrl, title, date, articleText, isFromEditor, readMore}) => {
  return (
    <div
      className="max-w-2xl flex-1 p-4 md:p-0 mx-auto"
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
        width={600} 
        height={350}
      />
      <div>
        {updateText(articleText, isFromEditor)}
      </div>
      <div className="flex flex-center gap-6 text-lg font-bold text-gray-900 my-10">
          <span>*</span>
          <span>*</span>
          <span>*</span>
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div data-mndbanid="5240b4f1-05f7-474e-a980-fd3540e08d78"></div>
      </div>
      <div className="max-w-[350px] w-full mx-auto">
        <Banner_350 />
      </div>
      <ReadMore posts={readMore} />
    </div>
  )
}

export default ArticleDetailsOther