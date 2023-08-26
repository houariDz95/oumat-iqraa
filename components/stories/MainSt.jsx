'use client'
import {useState, useEffect} from 'react';
import { db } from '@/firebase';
import { onSnapshot, collection, where, query, orderBy} from 'firebase/firestore';
import Sidebar from '../Sidebar';

import dynamic from 'next/dynamic'
import Loader from '../Loader';
const StoryCard = dynamic(() => import('./StoryCard'))

const MainSt = ({cat}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            setLoading(true)
            const docsRef = collection(db, 'stories')
            const q = cat ? query(docsRef, where('category', 'array-contains', cat )) : query(docsRef, orderBy("timestamp", 'desc'));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
              })
            return unsubscribe
          } catch (error) {
            alert(error)
          } finally{
            setLoading(false)
          }
        }
        fetchPosts(); 
    }, [cat]);

    if(loading) {
      return <div className="h-36 flex-center flex-1">
        <Loader />
      </div>
    }
  return (
    <main className='flex relative '>
      <div className='lg:flex-[0.75] px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
        {data.map(story => (
          <StoryCard  key={story.id} data={story} />
        ))}
      </div>
      <div className='flex-[0.25] mt-10 h-fit  hidden lg:block rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
        <Sidebar />
      </div>
    </main>
  )
}

export default MainSt