'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion';
import { db } from "@/firebase";
import {doc, collection, getDoc} from 'firebase/firestore';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Avatar } from "@mui/material";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';

const ArticleDetails = ({id}) => {
    const [post, setPost] = useState([]);
    let editorState;
    if (post.content) {
        const contentState = convertFromRaw(post.content);
        editorState = EditorState.createWithContent(contentState);
    }

    useEffect(() => {
        const getPost = async () => {
            const collectionRef = collection(db, 'articles')
            const docRef = doc(collectionRef, id);
            const data = await getDoc(docRef)
            setPost(data.data())
        }
        getPost()
    }, [])

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
      <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
      <div className="md:p-4">
        {editorState && <Editor 
        editorState={editorState} 
        readOnly={true} 
        />}
      </div>
    </motion.div>
  )
}

export default ArticleDetails