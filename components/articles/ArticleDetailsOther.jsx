'use client';
import { useEffect, useState } from "react";
import {LazyMotion, domAnimation, m} from 'framer-motion';
import { db } from "@/firebase";
import {doc, collection, getDoc, query, where, limit, getDocs} from 'firebase/firestore';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import Loader from "../Loader";
import { updateText } from "@/utils/updateText";
import { useMediaQuery } from "@react-hook/media-query";
import { useInView } from 'react-intersection-observer';
import dynamic from "next/dynamic";
import { Cardo } from "next/font/google";
const ReadMore = dynamic(() => import("./ReadMore"), {ssr: false});

const cardo = Cardo({ subsets: ['latin'],   weight: '400' })

const ArticleDetailsOther = ({id}) => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const randomCat = post?.category?.[Math.floor(Math.random() * post.category.length)];
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once when the element enters the viewport
    });
    
    useEffect(() => {
        const getPost = async () => {
            try {
              setLoading(true)
              if(id){
                const collectionRef = collection(db, 'otherArticles')
                const docRef = doc(collectionRef, id);
                const data = await getDoc(docRef)
                setPost({...data.data(), id: data.id})
              }

            } catch (error) {
             // alert('Error getting articles: ' + error.message)
              console(error)
            }finally{
              setLoading(false)
            }
        }
            getPost()
    }, [])

    useEffect(() => {
      const fetchPosts = async () => { 
        try {
          const docsRef = collection(db, 'otherArticles');
          let q = docsRef;
          
          if (randomCat) {
            q = query(docsRef, where('category', 'array-contains', randomCat), limit(5));
          }
    
          const querySnapshot = await getDocs(q);
          const postData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setPosts(postData);
        } catch (error) {
          alert(error);
          console.log(error);
        } 
      }
    
      fetchPosts(); 
    }, [randomCat]);
    


    if(loading) {
      return <div className="h-36 flex-center flex-1">
        <Loader />
      </div>
    }
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="max-w-2xl flex-1 p-4 md:p-0 mx-auto mt-10"
        initial={!isMobile ? { opacity: 0, y: 20 } : {opacity: 1, y: 0}}
        animate={!isMobile ? { opacity: 1, y: 0 }: {}}
        transition={!isMobile ? { duration: 0.3 } : {}}
      >
          <div className="flex items-center gap-2 mb-4">
              <p className="text-gray-500 flex items-center gap-2 text-sm">
              <AiOutlineCalendar size={18} color='#6449ff' />
              {moment(post.timestamp?.toDate(), 'ar').format('DD MMMM YYYY')}
              </p>
          </div>
          <h2 className="text-3xl font-semibold mb-4 blue_gradient font-plex">{post.title}</h2>
          <Image 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full max-h-[350px] object-cover rounded-lg shadow-md my-12" 
              width={400} 
              height={400}
          />
          <div ref={ref} className={`${cardo.className} text-lg lg:text-xl text-gray-900`}>
            {inView ? updateText(post.articleText, post.isFromEditor) : <p>Loading...</p>}
          </div>
          <div className="flex flex-center gap-6 text-lg font-bold text-gray-900 my-10">
              <span>*</span>
              <span>*</span>
              <span>*</span>
          </div>
        {posts && <ReadMore posts={posts} />}
      </m.div>
    </LazyMotion>
  )
}

export default ArticleDetailsOther