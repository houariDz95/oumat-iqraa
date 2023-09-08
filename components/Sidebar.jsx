'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinks } from '@/constants';
import { useEffect, useState } from 'react';
import { collection, getDocs, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import { Avatar } from '@mui/material';
import ManuPosts from './ManuPosts';

const Sidebar = ({forArticles, forStories}) => {
  const [data, setData] = useState([])
  const [stories, setStories] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchOtherPosts = async () => {
      try {
          const docsRef = collection(db, 'otherArticles');
          const q = query(docsRef, orderBy("timestamp", 'desc'), limit(5));
  
          const querySnapshot = await getDocs(q);
          const allArticles = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setData(allArticles)
          setLoading(false);
  
      } catch (error) {
          alert(error);
      }
    };
    
    const fetchStories = async () => {
      try {
          const docsRef = collection(db, 'stories');
          const q = query(docsRef, orderBy("timestamp", 'desc'), limit(5));
  
          const querySnapshot = await getDocs(q);
          const allStories = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setStories(allStories)
          setLoading(false);
  
      } catch (error) {
          alert(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const docsRef = collection(db, 'users')
        const q = query(docsRef, orderBy("createdAt", 'desc'), limit(5))
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setUsers(users)
      } catch (error) {
        alert(error)
      }       
    }
    if(forStories){
      fetchStories()
    }
    if(forArticles){
      fetchOtherPosts(); 
    }
    fetchUsers();
}, []);

  return (
    <>
      <div className="bg-gray-200 p-4 rounded-md">
        <Link href="/auth">
          <motion.button
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium mb-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            إنشاء حساب
          </motion.button>
        </Link>
        <p className="mt-2 text-gray-600 text-sm">
        بادر بالانضمام الينا الآن!
        </p>
      </div>

      {forArticles && <div className='bg-gray-200 p-4 rounded-md mt-4'>
          <h1 className='text-lg font-semibold mb-2'>آخر المقالات  </h1>
          <div className='flex flex-col gap-4'>
            {data.map((post, i) => (
              <ManuPosts key={post.id} id={post.id} title={post.title} img={post.imageUrl} cat={post.category[0]} date={post.timestamp} index={i} />
            ))} 
        </div>
      </div>}

      {forStories && <div className='bg-gray-200 p-2 mt-4'>
          <h1 className='text-lg font-semibold mb-2'>آخر  القصص المضافة</h1>
          <div className='flex flex-col gap-4'>
          {stories.map((story, i) => (
            <ManuPosts key={story.id} id={story.id} title={story.title} img={story.imageUrl} cat={story.category[0]} date={story.timestamp} index={i} />
          ))} 
        </div>
      </div>}

      <div className='bg-gray-200 p-4 rounded-md mt-4'>
        <h1 className='text-lg font-semibold mb-2'>آخر من انضم الينا </h1>
        <div className='flex flex-col gap-4'>
          {users.map((user) => (
            <div 
            key={user.id}
            className='flex items-center gap-2 mt-2'>
              <Link key={user.id} href={`/profile/${user.id}`} passHref>
                <Avatar
                  src={user?.photoURL}
                  alt={user?.usernae}
                  sx={{ width: 38, height: 38, cursor: 'pointer' }}
                />
              </Link>
              <div className='flex-col-start gap-1'>
                <span className='text-sm font-bold text-gray-500'>{user.username}</span>
                <span className='text-sm text-blue-500'>{user.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
