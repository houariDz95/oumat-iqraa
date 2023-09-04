"use client"
import { db } from "@/firebase";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";  
import { useEffect, useState } from "react";
import ArticleCard from "./articles/ArticleCard";

const RecentPosts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const docsRef = collection(db, 'articles');
                const q = query(docsRef, orderBy("timestamp", 'desc'), limit(3));
                const querySnapshot = await getDocs(q);
                const allArticles = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setData(allArticles)
            } catch (error) {
                alert(error);
            }finally{
                setLoading(false);
            }
        };

        fetchPosts(); 
    }, []);

    return (
        <div className='relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ' id="recenet">
            {loading ? (
                <div className="flex-center h-full w-full">
                    <div className="animate-spin rounded-full h-14  w-14 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                data.map(post => (
                    <ArticleCard key={post.id} data={post} hide/>
                ))
            )}
        </div>
    );
}

export default RecentPosts;
