'use client'
import { db } from "@/firebase";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";  
import { useEffect, useState } from "react";
import OthersArticleCard from "./articles/OthersArticleCard";

const OthersArtilces = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const docsRef = collection(db, 'otherArticles');
                const q = query(docsRef, orderBy("timestamp", 'desc'), limit(3));
                const querySnapshot = await getDocs(q)
                const stories = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setData(stories);
                setLoading(false); // Set loading state to false when data is fetched
           
            } catch (error) {
                alert(error);
            } 
        };

        fetchArticles(); 
    }, []);

    return (
        <div className='relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 '>
            {loading ? (
              <div className="flex-center h-full w-full">
                  <div className="animate-spin rounded-full h-14  w-14 border-t-4 border-blue-500"></div>
              </div>
            ) : (
                data.map(article => (
                    <OthersArticleCard key={article.id} {...article} />
                ))
            )}
        </div>
    );
}

export default OthersArtilces;
