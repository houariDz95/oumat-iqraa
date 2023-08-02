'use client'
import { db } from "@/firebase";
import { query, orderBy, limit, collection, onSnapshot } from "firebase/firestore";  
import { useEffect, useState } from "react";
import ArticleCard from "./articles/ArticleCard";
const RecentPosts = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const docsRef = collection(db, 'articles')
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
    <div className='relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ' id="recenet">
        {data.map(post => (
            <ArticleCard key={post.id} data={post} hide/>
        ))}
    </div>
  )
}

export default RecentPosts