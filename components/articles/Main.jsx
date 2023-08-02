'use client'
import {useState, useEffect} from 'react';
import { db } from '@/firebase';
import { onSnapshot, collection, where, query} from 'firebase/firestore';
import ArticleCard from './ArticleCard';
import Sidebar from '../Sidebar';
import Link from 'next/link';

const Main = ({cat}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const docsRef = collection(db, 'articles')
            const q = cat ? query(docsRef, where('category', "==", cat)) : docsRef;
            const unsubscribe = onSnapshot(q, (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
              })
            return unsubscribe
          } catch (error) {
            alert(error)
          } 
        }
        fetchPosts(); 
    }, [cat]);

  return (
    <main className='flex relative mb-10'>
      <div className='lg:flex-[0.75] px-4 space-y-6 py-8 columns-1 mt-3'>
        {data.length !== 0 ? data.map(post => (
          <ArticleCard key={post.id} data={post} />
        )): 
        <div className="flex flex-col mt-10">
          <p className="text-black text-lg mb-4">
            لم يتم إنشاء مقالات في هذه الفئة بعد.
          </p>
          <Link href="/articles/write" className="text-primary hover:underline">
              كن أول من يكتب مقالًا!
          </Link>
        </div>
        }
      </div>
      <div className='flex-[0.25] mt-10 h-fit  hidden lg:block rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
        <Sidebar />
      </div>
    </main>
  )
}

export default Main