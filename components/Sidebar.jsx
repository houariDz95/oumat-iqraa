'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinks } from '@/constants';
import { useEffect, useState } from 'react';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import { Avatar } from '@mui/material';
const Sidebar = () => {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const docsRef = collection(db, 'articles')
        const q = query(docsRef, orderBy("timestamp", 'desc'), limit(4))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          })
        return unsubscribe
      } catch (error) {
        alert(error)
      } 
    }
    const fetchUsers = async () => {
      try {
        const docsRef = collection(db, 'users')
        const q = query(docsRef, orderBy("createdAt", 'desc'), limit(4))
        const unsubscribe = onSnapshot(q, (snapshot) => {
          setUsers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          })
        return unsubscribe
      } catch (error) {
        alert(error)
      }       
    }

    fetchPosts(); 
    fetchUsers();
}, []);
  return (
    <>
      <div className="bg-gray-200 p-4 rounded-md">
        <Link href="/articles/write">
          <motion.button
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ابدأ رحلتك في الكتابة
          </motion.button>
        </Link>
        <p className="mt-2 text-gray-600 text-sm">
          كن فريدًا واكتب ما يميزك. لا تخف من المشاركة. ابدأ اليوم!
        </p>
      </div>

      <div className='bg-gray-200 p-4 rounded-md mt-4'>
        <h1 className='text-lg font-semibold mb-2'>الروابط</h1>
        <div className='flex flex-col gap-2'>
        {navLinks.map((link, i)=> (
          <Link 
          key={i}
          href={link.path} className='text-blue-500 text-sm cursor-pointer hover:underline'>
            {link.label}
          </Link>
        ))}
        </div>
      </div>

        <div className='bg-gray-200 p-4 rounded-md mt-4'>
          <h1 className='text-lg font-semibold mb-2'>آخر المقالات  </h1>
          <div className='flex flex-col gap-4'>
          {data.map(post => (
            <Link 
            key={post.id}
            href={`/articles/${post.id}`} className='flex flex-col gap-6 text-blue-500 text-sm cursor-pointer hover:underline'>
              {post.title}
            </Link>
          ))} 
        </div>
      </div>

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
