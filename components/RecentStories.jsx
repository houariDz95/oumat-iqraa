'use client'
import { db } from "@/firebase";
import { query, orderBy, limit, collection, onSnapshot } from "firebase/firestore";  
import { useEffect, useState } from "react";

import StoryCard from "./stories/StoryCard";

const RecentStories = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const docsRef = collection(db, 'stories')
            const q = query(docsRef, orderBy("timestamp", 'desc'), limit(3))
            const unsubscribe = onSnapshot(q, (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
              })
            return unsubscribe
          } catch (error) {
            alert(error)
          } 
        }
        fetchPosts(); 
    }, []);
    
  return (
    <div className='relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 '>
        {data.map(story => (
            <StoryCard key={story.id} data={story} />
        ))}
    </div>
  )
}

export default RecentStories