'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import {LazyMotion, domAnimation, m} from 'framer-motion';
import { db } from "@/firebase";
import {doc, collection, getDoc, onSnapshot, query, where, limit} from 'firebase/firestore';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Avatar } from "@mui/material";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Loader from "../Loader";
import { useMediaQuery } from "@react-hook/media-query";
import { useInView } from 'react-intersection-observer';
import dynamic from "next/dynamic";
import { Cardo } from "next/font/google";
const ReadMore = dynamic(() => import("./ReadMore"));

const cardo = Cardo({ subsets: ['latin'],   weight: '400' })

const ArticleDetails = ({id}) => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)');
    const randomCat = post?.category?.[Math.floor(Math.random() * post.category.length)];

    let editorState;
    if (post.content) {
        const contentState = convertFromRaw(post.content);
        editorState = EditorState.createWithContent(contentState);
    }
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once when the element enters the viewport
    });
    
    useEffect(() => {
        const getPost = async () => {
            try {
              setLoading(true)
              const collectionRef = collection(db, 'articles')
              const docRef = doc(collectionRef, id);
              const data = await getDoc(docRef)
              setPost(data.data())
            } catch (error) {
              alert('Error getting articles: ' + error.message)
            }finally{
              setLoading(false)
            }
        }
        getPost()
    }, [])

    useEffect(() => {
      const fetchPosts = async () => { 
        try {
          const docsRef = collection(db, 'otherArticles')
          let q = docsRef;
          if (randomCat) {
            q = query(docsRef, where('category', 'array-contains', randomCat), limit(3));
          }

          const unsubscribe = onSnapshot(q, (snapshot) => {
              setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
          return unsubscribe
        } catch (error) {
          alert(error)
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
        className="max-w-2xl flex-1 p-4 md:p-0 mx-auto"
        initial={!isMobile ? { opacity: 0, y: 20 } : {opacity: 1, y: 0}}
        animate={!isMobile ? { opacity: 1, y: 0 } : {}}
        transition={!isMobile ? { duration: 0.3 } : {}}
      >
        <div className="flex items-center gap-2 mb-4">
          <Link href={`/profile/${post.uid}`}>
            <Avatar src={post.userImage} alt={post.createdBy} sx={{width:36, height: 36}}/>
          </Link>
          <div>
            <p className="font-semibold text-lg">{post.createdBy}</p>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
              <AiOutlineCalendar size={18} color='#6449ff' />
              {moment(post.timestamp?.toDate(), 'ar').format('DD MMMM YYYY')}
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-4 blue_gradient font-plex">{post.title}</h2>
        <div  className={`${cardo.className} md:p-4 text-lg lg:text-xl text-gray-900`} ref={ref}>
          {inView ? <Editor 
          editorState={editorState} 
          readOnly={true} 
          /> : <p>Loading...</p>}
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

export default ArticleDetails