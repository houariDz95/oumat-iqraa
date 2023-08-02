import {  useEffect, useState } from 'react';
import { updateProfile } from "firebase/auth";
import {auth, db, storage} from '@/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Loader from './Loader';

const Modal = ({ isOpen, onClose }) => {
  const user = auth.currentUser;
  
  const [username, setUsername] = useState(user?.displayName);
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const storageRef = ref(storage, `users/${user.uid}/avatar`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setIsLoading(true)
      if (avatar) {
        await uploadBytes(storageRef, avatar);
      }
      const userRef = doc(db, "users", user.uid);
      const data = await getDoc(userRef)
      await updateDoc(userRef, {
        username: username,
        photoURL: avatar ? await getDownloadURL(storageRef) : user.photoURL,
        bio: bio ? bio : data.data().bio,
      })

      await updateProfile(user, {
        displayName: username,
        photoURL: avatar ? await getDownloadURL(storageRef) : user.photoURL,
      })
      setIsLoading(false)
      window.location.reload();
      onClose()
    }catch(error){
      alert(error.message)
    }
  };
  return (
    <>
      {isOpen && (
        <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-full max-w-lg">
            <h2 className="text-lg font-medium mb-4">تعديل الحساب</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                اسم المستخدم
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  dir='rtl'
                  onChange={(e) =>  setUsername(e.target.value)}
                  className="border border-gray-400 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bio" className="block text-gray-700 font-medium mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={bio}
                  dir='rtl'
                  onChange={(e) => setBio(e.target.value)}
                  className="border border-gray-400 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="avatar" className="block text-gray-700 font-medium mb-2">
                رفع صورة جديدة
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  className="border border-gray-400 p-2 rounded w-full"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isLoading}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2 disabled:opacity-40"
                >
                  إلغاء 
                </button>
                <button 
                disabled={isLoading}
                type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded disabled:opacity-40">
                 {isLoading ? "جارِ التحميل..." : "حفظ التعديلات"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal