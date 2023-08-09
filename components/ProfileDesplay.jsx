import ArticleCard from "./articles/ArticleCard";
import {BiTrash} from "react-icons/bi";
import {FiEdit} from 'react-icons/fi';

const ProfileDesplay = ({ name, desc, data,  handleDelete, deletePost, setIsOpen, isAdmin, user }) => {
  return (
    <section className='w-full min-h-[calc(100vh-106px)]'>
      <h1 className='head_text text-rigth'>
        <span className='blue_gradient'>{name}</span>
      </h1>
      <p className='desc text-right'>{desc}</p>
      
      {user?.bio && <div className='max-w-2xl mt-8 flex-start'>
        <h3 className="text-xl font-bold"> سيرة ذاتية</h3>
        <p className='desc'>{user?.bio || 'لا يوجد سيرة ذاتية متاحة.'}</p>
      </div>}
      
      <div className='flex items-center justify-end gap-4'>
        {isAdmin && 
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
        </>}
      </div>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {data.map((post) => (
          <ArticleCard
            key={post.id}
            data={post}
            isAdmin={isAdmin}
            handleDelete={() => deletePost && deletePost(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfileDesplay;