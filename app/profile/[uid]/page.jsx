'use client'

import { auth, db } from '@/firebase';
import { deleteUser } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('@/components/Modal'));
const ProfileDesplay = dynamic(() => import('@/components/ProfileDesplay'));

const Profile =  ({params: {uid}}) => {
    
    const [user, setUser] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const isAdmin = uid === auth?.currentUser?.uid
    const router = useRouter()

    useEffect(() => {
        const getUserData = async() => {
            const user = await getDoc(doc(collection(db, "users"), auth?.currentUser?.uid))
            setUser(user.data())
        }
        getUserData()
    }, [uid])

    const handleDelete = async () => {
        if (window.confirm("هل أنت متأكد أنك تريد حذف حسابك؟")) {
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
    


  return (
    <div className='max-w-6xl mx-auto mt-6 p-6'>
      <ProfileDesplay
        name="الملف الشخصي" 
        desc="اكتشف الفرص والاهتمامات الفريدة التي تميزك واجعل ملفك الشخصي مرآة لشخصيتك." 
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
        isAdmin={isAdmin}
        user={user}
      />
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  )
}

export default Profile