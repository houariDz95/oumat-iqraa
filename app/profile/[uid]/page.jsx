'use client'
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import ProfileDesplay from '@/components/ProfileDesplay';
import { auth, db } from '@/firebase';
import { deleteUser } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import Error from 'next/error';
import { useRouter } from 'next/navigation';
import { useEffect, useState} from 'react';


const Profile =  ({params: {uid}}) => {
    
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const isAdmin = uid === auth?.currentUser?.uid
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
    
      const deletePost = async (post) => {
        const hasConfirmed = confirm(
          "هل أنت متأكد أنك تريد حذف هذا المنشور؟"
        );
    
        if (hasConfirmed) {
          try {
            await deleteDoc(doc(db, 'articles', post.id))
            alert('تم حذف المنشور بنجاح ')

          } catch (error) {
            console.log(error);
            alert(error)
          }
        }
      };

  if(isDeleting) return <div className='absolute top-0 left-0 bg-black/30 w-screen h-screen flex-center '>
    <div className='w-8/12 h-2/5 bg-white shadow-xl flex-center rounded-lg'>
      <Loader />
    </div>
  </div>
  return (
    <div className='max-w-6xl mx-auto mt-6 p-6'>
      <ProfileDesplay
        name={isAdmin? "الملف الشخصي" : `الملف الشخصي الخاص ب ${user?.username} `} 
        desc={isAdmin ?  "اكتشف الفرص والاهتمامات الفريدة التي تميزك واجعل ملفك الشخصي مرآة لشخصيتك." :
        `ترحيبًا بك في صفحة الملف الشخصي المخصصة لـ ${user.username}. استكشف التحفيزات الاستثنائية لـ ${user.username} واستلهم قوة خيالهم.`}
        data={posts}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
        deletePost={deletePost}
        isAdmin={isAdmin}
        user={user}
      />
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  )
}

export default Profile