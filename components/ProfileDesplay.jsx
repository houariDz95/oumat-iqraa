import { Avatar } from "@mui/material";
import {BiTrash} from "react-icons/bi";
import {FiEdit} from 'react-icons/fi';

const ProfileDesplay = ({ name, desc, handleDelete, setIsOpen, user, isAdmin}) => {
  
  return (
    <section className='w-full min-h-[calc(100vh-106px)]'>
      <Avatar src={user.photoURL} alt={user.username} sx={{width:76, height: 76}}/>
      <h1 className='head_text text-rigth'>
        <span className='blue_gradient'>{name}</span>
      </h1>
      <p className='desc text-right'>{desc}</p>
      
      
      {isAdmin && <div className='flex items-center justify-end gap-4'>
        <>
          <button 
          className='group relative'
          onClick={handleDelete}
          >
              <BiTrash size={25} color="#e84118"  />
              <span 
              className='absolute bg-white border-[1px] border-gray-300 shadow-md top-8 -left-50 w-[170px] p-2 font-semibold text-gray-700 hidden group-hover:block z-20'>
                  حذف الملف الشخصي
              </span>
          </button>
          <button 
          className='group relative'
          onClick={() => setIsOpen(true)}
          >
              <FiEdit  size={25} color="#6449ff" />
              <span 
              className='absolute bg-white border-[1px] border-gray-300 shadow-md top-8 -left-50 w-[170px] p-2 font-semibold text-gray-700 hidden group-hover:block z-10'
              >
                  تعديل الملف الشخصي
              </span>
          </button>
        </>
      </div>}
      <div className="font-sans text-right p-5">
      <p className="text-xl font-bold">
        ملفك الشخصي
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        أهلاً بك في ملفك الشخصي! هذا المكان مخصص لك لتعبر فيه عن نفسك بطريقتك الخاصة.
        قم بإضافة معلوماتك وصورتك الشخصية لجعل ملفك مميزًا.
        يمكنك أيضًا عرض الأنشطة والمحتوى الذي قد تكون قمت بمشاركته أو تقديمه.
        اجعل هذا المكان مرآة لشخصيتك واهتماماتك ونجاحاتك.
        لا تتردد في تحديث ملفك الشخصي بانتظام لتظل المعلومات دقيقة وحديثة.
        نتمنى لك تجربة ممتعة ومثمرة في استخدام ملفك الشخصي.
      </p>
    </div>
    </section>
  );
};

export default ProfileDesplay;