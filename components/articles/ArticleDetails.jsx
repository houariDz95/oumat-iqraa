'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import {LazyMotion,  domAnimation, m} from 'framer-motion';
import { db } from "@/firebase";
import {doc, collection, getDoc, onSnapshot, query, where, limit} from 'firebase/firestore';
import { Editor, EditorState, convertFromRaw, CompositeDecorator } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Loader from "../Loader";
import { useMediaQuery } from "@react-hook/media-query";
import { useInView } from 'react-intersection-observer';
import dynamic from "next/dynamic";
import {  findEntityLiksRanges } from "@/utils/ranges";
import { LinkSpan } from "@/utils/spans";
const ReadMore = dynamic(() => import("./ReadMore"));


const ArticleDetails = ({id}) => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)');
    const randomCat = post?.category?.[Math.floor(Math.random() * post.category.length)];

    const decorator = new CompositeDecorator([
      {
        strategy: findEntityLiksRanges('LINK'),
        component: LinkSpan,
      },
    ]);
    console.log(post.content)
    let editorState;
    if (post.content) {
        const contentState = convertFromRaw(post.content);
        editorState = EditorState.createWithContent(contentState, decorator);
    }

    const styleMap = {
      'color-rgb(0,0,0)': {
        color: '#333',
      },
      'fontsize-24': {
        fontSize: '28px',
      },
      'fontsize-18': {
       fontSize: '18px',
      },
      'color-rgb(44,130,201)': {
        fontSize: "24px",
        color: "#6449ff"
      },

    };
    

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
    console.log(post.content)
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="max-w-2xl flex-1 p-4 md:p-0 mx-auto"
        initial={!isMobile ? { opacity: 0, y: 20 } : {opacity: 1, y: 0}}
        animate={!isMobile ? { opacity: 1, y: 0 } : {}}
        transition={!isMobile ? { duration: 0.3 } : {}}
      >
        <div className="flex items-center gap-2 mb-4">
          <div>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
              <AiOutlineCalendar size={18} color='#6449ff' />
              {moment(post.timestamp?.toDate(), 'ar').format('DD MMMM YYYY')}
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-4 blue_gradient text-center">{post.title}</h2>
        <div   ref={ref}>
          {inView ? <Editor 
          editorState={editorState} 
          readOnly={true}
          customStyleMap={styleMap}
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