'use client'
import { useState, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { auth, db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { atCategories } from '@/constants';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';

const isClient = typeof window !== 'undefined';



const WritePage = () => {
    const router = useRouter()
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
    let Editor;
    if (isClient) {
      Editor = require('react-draft-wysiwyg').Editor;
    }
    
    const [currentUser, setCurrentUser] = useState(null)
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const filtredCat = atCategories.filter(category => category.name !== "كل المقالات"); 
    
    const handleEditorStateChange = (newEditorState) => {
      setEditorState(newEditorState);
    };
    
    const handleSubmit = async() => {
      const rawContentState = convertToRaw(editorState.getCurrentContent());
      // Save the rawContentState to Firebase or perform other actions
      try {
        setIsLoading(true)
        const articlesRef = collection(db, "articles");
        await addDoc(articlesRef, {
          uid: currentUser.uid, 
          userImage: currentUser?.photoURL,
          createdBy: currentUser.displayName, 
          title: title,
          content: rawContentState,
          timestamp: serverTimestamp(),
          category: selectedCategory,
        })
      } catch (error) {
        console.log(error)
        alert(error.message)
      }finally{
        setIsLoading(false)
        setTitle("")
        setEditorState("")
        router.push('/articles')
      }
    };

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user); // Update the currentUser state when the authentication state changes
        if(!user) {
          router.push('/auth?to=write')
        }
      });
  
      return () => {
        unsubscribe(); // Unsubscribe the listener when the component is unmounted
      };
    }, []);
  
   
    if(!currentUser) return <div className='w-screeb h-screen flex-center'>
      <Loader />
    </div>
    
    return (
        <div className="max-w-4xl mx-auto py-8 px-4 text-right">
        <h1 className="text-2xl mb-4 font-bold">أكتب مقالك</h1>
        <div className="mb-4">
          <label htmlFor="titleInput" className="block mb-2 text-primary">
            عنوان المقال : 
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            dir='rtl'
            className="border border-gray-300 px-4 py-2 w-full text-right"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categorySelect" className="block mb-2 text-primary">
            التصنيف:
          </label>
          <select
            id="categorySelect"
            className="border border-gray-300 px-4 py-2 w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">اختر التصنيف</option>
            {filtredCat.map((category) => (
              <option key={category.path} value={category.path}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4" style={{direction: "rtl", textAlign: "right"}}>
          <label className="block mb-2 text-primary"> محتوى المقال :</label>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
            wrapperClassName="border border-gray-300 rounded text-black pb-10"
          />
        </div>
        <button
          className="bg-primary opacity-95 hover:opacity-100 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ?  "إرسال..." : "إرسال"}
        </button>
      </div>
    );
  };
  
  export default WritePage