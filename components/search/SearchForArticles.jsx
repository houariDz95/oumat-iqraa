'use client'
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, } from 'firebase/firestore';
import  {db} from '@/firebase';
import { IoMdArrowDropleft } from 'react-icons/io';
import Link from 'next/link';

const SearchForArticles = ({keyword, booksData}) => {
    const [posts, setPosts] = useState([]);
    const decodedKeyword = keyword ? decodeURIComponent(keyword) : '';

      const regex = new RegExp(decodedKeyword, "i"); 

      const filteredPosts = posts.filter(
        (item) =>
          regex.test(item.title) ||
          regex.test(getContentText(item.content)) ||
          regex.test(item.category) ||
          regex.test(item.createdBy)
      );

    function getContentText(content) {
      let text = '';
      if (content.blocks && content.blocks.length > 0) {
        content.blocks.forEach((block) => {
          if (block.text) {
            text += block.text;
          }
        });
      }
      return text;
    }
    useEffect(() => {
        const getData = async () => {
          const collectionRef = collection(db, 'articles');
          const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          })
          return unsubscribe
        }
        getData()
      }, [])
      if(!booksData.length && !filteredPosts.length) return  <div className="flex flex-col items-center justify-center py-10 h-[250px]">
      <h2 className="text-2xl font-bold text-black">😢لا توجد نتائج للبحث</h2>
    </div>
    return (
    <>
      {filteredPosts.length ?
        <div className="mt-6 text-right">
          <h2 className="text-xl p-2 mb-2 ">المقالات </h2>
          {filteredPosts.map((post) => (
            <div key={post.id} className="flex items-center gap-2 p-2 text-md">
                <IoMdArrowDropleft className='text-gray-300'/>
                <Link className="text-md text-[#707805] cursor-pointer hover:underline" href={`/articles/${post.id}`}>{post?.title} </Link> · بقلم
                <Link className="text-md text-[#707805] cursor-pointer hover:underline" href={`/profile/${post.uid}`}> {post?.createdBy}</Link>
            </div>
          ))}
        </div> : null}
    </>
  )
}

export default SearchForArticles