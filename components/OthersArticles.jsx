import { db } from "@/firebase";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";  
import OthersArticleCard from "./articles/OthersArticleCard";

const OthersArtilces = async () => {

    const docsRef = collection(db, 'otherArticles');
    const q = query(docsRef, orderBy("timestamp", 'desc'), limit(6));
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    return (
        <div className='relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 '>
            {data.map(article => (
                <OthersArticleCard 
                    key={article.id} 
                    imageUrl={article.imageUrl}
                    title={article.title}
                    articleText={article.articleText}
                    id={article.id}
                    isFromEditor={article.isFromEditor}
                />
            ))}
        </div>
    );
}

export default OthersArtilces;
