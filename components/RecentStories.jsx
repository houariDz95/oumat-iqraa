'use client'
import { db } from "@/firebase";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";  
import { useEffect, useState } from "react";

import StoryCard from "./stories/StoryCard";

const RecentStories = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const docsRef = collection(db, 'stories');
                const q = query(docsRef, orderBy("timestamp", 'desc'), limit(3));
                const querySnapshot = await getDocs(q)
                const stories = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setData(stories)
                setLoading(false); // Set loading state to false when data is fetched
            } catch (error) {
                alert(error);
            } 
        };

        fetchStories(); 
    }, []);

    return (
        <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {loading ? (
                <div className="flex-center h-full w-full">
                    <div className="animate-spin rounded-full h-14  w-14 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                data.map(story => (
                    <StoryCard key={story.id} data={story} />
                ))
            )}
        </div>
    );
}

export default RecentStories;
