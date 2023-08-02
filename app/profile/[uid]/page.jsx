'use client'
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import ArticleCard from '@/components/articles/ArticleCard';
import { auth, db } from '@/firebase';
import { Avatar } from '@mui/material';
import { deleteUser, signInAnonymously } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import Error from 'next/error';
import { useRouter } from 'next/navigation';
import { useEffect, useState} from 'react';
import {BiTrash} from "react-icons/bi";
import {FiEdit} from 'react-icons/fi';

const Profile =  ({params: {uid}}) => {
    
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const isAdmin = user.id === auth?.currentUser?.uid
    const router = useRouter()
    useEffect(() => {
        const getUserData = async() => {
            const user = await getDoc(doc(collection(db, "users"), uid))
            setUser(user.data())
        }
        const getUserPosts = async () => {
          try {
            const docsRef = collection(db, 'articles')
            const q = query(docsRef, where('uid', "==", uid));
            const unsubscribe = onSnapshot(q, (snapshot) => {
              setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
              })
            return unsubscribe
          } catch (error) {
            throw new Error()
          } 
        }
        getUserData()
        getUserPosts()
    }, [uid])

    const handleDelete = async () => {
        if (window.confirm("هل أنت متأكد أنك تريد حذف حسابك؟ عند حذف حسابك، سيتم حذف جميع مقالاتك أيضًا")) {
          try {
            setIsDeleting(true)
            if(isAdmin){
            
              await deleteUser(auth?.currentUser);
              await deleteDoc(doc(collection(db, "users"), uid));
          
              const q = query(collection(db, 'articles'), where('uid', '==', uid));
              const querySnapshot = await getDocs(q);
        
              const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
              await Promise.all(deletePromises);  
              router.push("/")
            }else{
              alert('you can delete only your account!')
            }
          } catch (error) {
            console.error("Error deleting user and posts:", error);
            alert(error.message)
          }finally{
            setIsDeleting(false)
          }
        }
      }
    
  if(isDeleting) return <div className='absolute top-0 left-0 bg-black/30 w-screen h-screen flex-center '>
    <div className='w-8/12 h-2/5 bg-white shadow-xl flex-center rounded-lg'>
      <Loader />
    </div>
  </div>
  return (
    <div>
        <div className='max-w-4xl mx-auto mt-10 min-h-[60vh] p-4'>
            <div className="flex-between border-b-[1px] border-gray-400 pb-4">
                <div className="flex items-center mb-4">
                    <Avatar 
                    src={user.photoURL} 
                    alt={user.username} 
                    sx={{
                        width: { md:100, xs:60},
                        height: { md:100, xs:60},
                    }}
                    />
                    <div className='flex-col-start mr-2 gap-2 p-2'>
                        <h2 className="text-lg font-bold">{user.username}</h2>
                        <p className="text-gray-500 hidden md:block">{user.email}</p>
                    </div>
                </div>
                <div className='flex-center gap-4'>
                    {isAdmin && 
                    <>
                      <button 
                      className='group relative'
                      onClick={handleDelete}
                      >
                          <BiTrash size={28} color="#e84118"  />
                          <span 
                          className='absolute bg-white border-[1px] border-gray-300 shadow-md top-8 -left-50 w-[170px] p-2 font-semibold text-gray-700 hidden group-hover:block'>
                              حذف الملف الشخصي
                          </span>
                      </button>
                      <button 
                      className='group relative'
                      onClick={() => setIsOpen(true)}
                      >
                          <FiEdit  size={28} color="#6449ff" />
                          <span 
                          className='absolute bg-white border-[1px] border-gray-300 shadow-md top-8 -left-50 w-[170px] p-2 font-semibold text-gray-700 hidden group-hover:block'
                          >
                              تعديل الملف الشخصي
                          </span>
                      </button>
                    </>}
                </div>
            </div>
            <div className='max-w-2xl mt-8'>
               <h3 className="text-xl font-bold">Bio</h3>
               <p className='text-gray-700 p-2'>{user.bio || 'لا يوجد سيرة ذاتية متاحة.'}</p>
            </div>
            <div className='relative lg:flex-[0.8] flex-1 grid md:grid-cols-2 grid-cols-1 gap-5 p-2 mt-10'>
              {posts.map(post => (
                <ArticleCard key={post.id} data={post} />
              ))}
            </div>
        </div>
        {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  )
}

export default Profile