"use client"
import Loader from '@/components/Loader';
import Navbar from '@/components/Nav';
import { auth, db, provider } from '@/firebase';
import { browserSessionPersistence, setPersistence, signInWithPopup } from 'firebase/auth';
import {  doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {AiOutlineGoogle} from 'react-icons/ai'

const SignUpPage = (paramKey) => {
  
  const [currentUser, setCurrentUser] = useState(null)
  const to = paramKey.searchParams.to;
  const router = useRouter()
  if(currentUser) {
    redirect('/')
  }
    const handleGoogleLogin = async  () => {
        try {
          const userCredential = await signInWithPopup(auth, provider);
          const user = userCredential.user;
      
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
      
          if (!userDocSnap.exists()) {
            await setPersistence(auth, browserSessionPersistence);
            await setDoc(userDocRef, {
              id: user.uid,
              email: user.email,
              username: user.displayName.replace(' ', ''),
              photoURL: user.photoURL,
              bio: "",
              createdAt: serverTimestamp(),
            });
          } else {
            // If the user already exists in the database, retrieve their bio
            const userData = userDocSnap.data();
            user.bio = userData.bio || "";
          }
          
        to === "write" ? router.push('/articles/write') : router.push('/')
        } catch (error) {
          console.log(error.message);
          alert(error.message)
        }    
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); // Update the currentUser state when the authentication state changes
    });

    return () => {
      unsubscribe(); // Unsubscribe the listener when the component is unmounted
    };
  }, []);

 
  if(currentUser) return <div className='w-screeb h-screen flex-center'>
    <Loader />
  </div>
  return (
    <>
    <Navbar />
    <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">إنشاء حساب</h2>
        <button
          type="button"
          className="w-full bg-red-500 flex-center gap-2 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={handleGoogleLogin}
        >
            <AiOutlineGoogle size={28} /> بواسطة جوجل 
        </button>
      </div>
    </div>
    </>
  );
};

export default SignUpPage;






