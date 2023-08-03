'use client'
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, } from 'firebase/firestore';
import  {db} from '@/firebase';
import { IoMdArrowDropleft } from 'react-icons/io';
import Link from 'next/link';
import Loader from '../Loader';

const SearchForArticles = ({keyword}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
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
          setIsLoading(true)
          try {
            const collectionRef = collection(db, 'articles');
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
              setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
            return unsubscribe
          } catch (error) {
            alert(error)
          }finally{
            setIsLoading(false)
          }
        }
        getData()
      }, [])


    return (
    <>
        <div className="mt-6 text-right">
          <h2 className="text-xl p-2 mb-2 ">المقالات </h2>
          {isLoading && <div className='w-full h-14 flex-center'>
            <Loader />
          </div>
          }
          {filteredPosts.length ? filteredPosts.map((post) => (
            <div key={post.id} className="flex items-center gap-2 p-2 text-md">
                <IoMdArrowDropleft className='text-gray-300'/>
                <Link className="text-md text-[#707805] cursor-pointer hover:underline" href={`/articles/${post.id}`}>{post?.title} </Link> · بقلم
                <Link className="text-md text-[#707805] cursor-pointer hover:underline" href={`/profile/${post.uid}`}> {post?.createdBy}</Link>
            </div>
          )) : <h2 className="text-lg font-base text-black">لا توجد نتائج بحث للمقالات</h2>}
        </div>
    </>
  )
}

export default SearchForArticles