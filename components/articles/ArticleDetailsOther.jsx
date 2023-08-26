'use client';
import { useEffect, useState } from "react";
import {LazyMotion, domAnimation, m} from 'framer-motion';
import { db } from "@/firebase";
import {doc, collection, getDoc, onSnapshot, query, where} from 'firebase/firestore';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import Loader from "../Loader";
import ArticleCard from "./ArticleCard";
import { updateText } from "@/utils/updateText";
import { useMediaQuery } from "@react-hook/media-query";

const ArticleDetailsOther = ({id}) => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const randomCat = post?.category?.[Math.floor(Math.random() * post.category.length)];
    const isMobile = useMediaQuery('(max-width: 768px)');
    useEffect(() => {
        const getPost = async () => {
            try {
              setLoading(true)
              if(id){
                const collectionRef = collection(db, 'otherArticles')
                const docRef = doc(collectionRef, id);
                const data = await getDoc(docRef)
                setPost(data.data())
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
        console.log(post)
    useEffect(() => {
      const fetchPosts = async () => { 
        try {
          const docsRef = collection(db, 'articles')
          let q = docsRef;
          if (randomCat) {
            q = query(docsRef, where('category', 'array-contains', randomCat));
          }

          const unsubscribe = onSnapshot(q, (snapshot) => {
              setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
          return unsubscribe
        } catch (error) {
         alert(error)
         console.log(error)
        } 

      }
      fetchPosts(); 
    }, [randomCat])


    if(loading) {
      return <div className="h-36 flex-center flex-1">
        <Loader />
      </div>
    }
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="max-w-2xl flex-1 p-4 md:p-0 mx-auto mt-10"
        initial={isMobile ? { opacity: 0, y: 20 } : {}}
        animate={isMobile ? { opacity: 1, y: 0 }: {}}
        transition={isMobile ? { duration: 0.3 } : {}}
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
          {updateText(post.articleText, post.isFromEditor)}
          <div className="flex flex-center gap-6 text-lg font-bold text-gray-900 my-10">
              <span>*</span>
              <span>*</span>
              <span>*</span>
          </div>
          <div className="">
          <h1 className="text-xl font-semibold mb-4">استكشف أيضًا</h1>
          <div className="grid gap-4 grid-cols-1">
              {posts.map(item => (
                  <ArticleCard key={item.id} data={item} hide />
              ))}
          </div> 
      </div>
      </m.div>
    </LazyMotion>
  )
}

export default ArticleDetailsOther