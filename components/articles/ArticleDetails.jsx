'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion';
import { db } from "@/firebase";
import {doc, collection, getDoc, onSnapshot, query, where} from 'firebase/firestore';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Avatar } from "@mui/material";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import Loader from "../Loader";

const ArticleDetails = ({id}) => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const randomCat = post?.category?.[Math.floor(Math.random() * post.category.length)];
    

    let editorState;
    if (post.content) {
        const contentState = convertFromRaw(post.content);
        editorState = EditorState.createWithContent(contentState);
    }

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
            q = query(docsRef, where('category', 'array-contains', randomCat));
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
    <motion.div
      className="max-w-2xl flex-1 p-4 md:p-0 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
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
      <div className="md:p-4">
        {editorState && <Editor 
        editorState={editorState} 
        readOnly={true} 
        />}
      </div>
    <div className="flex flex-center gap-6 text-lg font-bold text-gray-900 my-10">
      <span>*</span>
      <span>*</span>
      <span>*</span>
    </div>
    <div className="">
      <h1 className="text-xl font-semibold mb-4">استكشف أيضًا</h1>
      <div className="grid gap-4 grid-cols-1">
        {posts.map(item => (
          <div className="bg-white shadow-md p-4 flex" key={item.id}>
            <Image
              width={200}
              height={200}
              src={item.imageUrl}  
              alt={item.tilte}
              className="object-cover h-36 "
            />
            <div className="mr-4 flex items-start justify-center gap-5 flex-col">
            <Link href={`/articles/others/${item?.id}`}>
              <h2 className="text-xl font-semibold hover:text-primary">{item?.title}</h2>  
            </Link>
              <p className="text-gray-500">{item?.articleText.slice(0, 120)}...
                <Link href={`/articles/others/${item.id}`} className='blue_gradient cursor-pointer'>بدء القراءة</Link>
              </p> 
            </div>
          </div>
        ))}
      </div> 
    </div>
    </motion.div>
  )
}

export default ArticleDetails