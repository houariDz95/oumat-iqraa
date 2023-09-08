import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import Link from "next/link";

const ManuPosts = ({ title, img, cat, date,index, id, isArticle }) => {
  let backgroundColor = "";

  switch (index) {
    case 0:
      backgroundColor = "#ff7857";
      break;
    case 1:
      backgroundColor = "#ffb14f";
      break;
    case 3:
      backgroundColor = "#7fb881";
      break;
    case 4:
      backgroundColor = "#ff7887";
      break;
    case 5:
      backgroundColor = "#775aec";
      break;
    default:
      backgroundColor = "#789cff"; // Default or fallback color
      break;
  }  

  return (
    <div className="flex items-center gap-5 cursor-pointer">
      <Link href={isArticle ? `/articles/${id}` :  `/stories/${id}`} className="aspect-square relative flex-1">
          <Image src={img} alt={title} fill className="rounded-full  object-cover border-[3px] border-gray-300" />
      </Link>
      <div className="ml-4 flex-[4] flex flex-col gap-1">
        <Link href={isArticle ? `/articles/${id}` :  `/stories/${id}`} >
          <h3 className="text-[16px] font-semibold hover:text-primary}">{title}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <Link href={isArticle ? `/articles?cat=${cat}` : `/stories?cat=${cat}`}>
            <p className="px-2 py-1 rounded-[10px] text-[12px] text-white w-max cat"
            style={{backgroundColor }}
            >{cat}</p>
          </Link>
          <p className="text-gray-500 text-[12px]">{moment(date.toDate(), 'ar').format('DD MMMM YYYY')}</p>
        </div>
      </div>
    </div>
  );
};

export default ManuPosts;
