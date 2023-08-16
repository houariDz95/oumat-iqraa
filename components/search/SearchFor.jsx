'use client'
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, } from 'firebase/firestore';
import  {db} from '@/firebase';
import { IoMdArrowDropleft } from 'react-icons/io';
import Link from 'next/link';
import Loader from '../Loader';
import ArticleCard from '../articles/ArticleCard';
import StoryCard from '../stories/StoryCard';
import QuotesCard from '../quotes/QuotesCard';
import OthersArticleCard from '../articles/OthersArticleCard';

const SearchFor = ({keyword}) => {
    const [posts, setPosts] = useState([]);
    const [stroies, setStories] = useState([]); 
    const [quotes, setQuotes] = useState([]);
    const [otherArticles, setOtherArticles] = useState([]);

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
      
      
      const filteredStories = stroies.filter(
        (item) =>
          regex.test(item.title) ||
          regex.test(item.storyText) ||
          regex.test(item.category) 
      );

      const filteredQuotes = quotes.filter(
        (item) =>
          regex.test(item.author) ||
          regex.test(item.text) ||
          regex.test(item.category) 
      );

      const filteredOtherArticles = otherArticles.filter(
        (item) =>
          regex.test(item.title) ||
          regex.test(item.articleText) ||
          regex.test(item.category) 
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
        const getArticles = async () => {
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
        const getStories= async () => {
          setIsLoading(true)
          try {
            const collectionRef = collection(db, 'stories');
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
              setStories(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
            return unsubscribe
          } catch (error) {
            alert(error)
          }finally{
            setIsLoading(false)
          }
        }
        const getQuotes = async () => {
          setIsLoading(true)
          try {
            const docsRef = collection(db, 'quotes')
            const unsubscribe = onSnapshot(docsRef, (snapshot) => {
              setQuotes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
              })
            return unsubscribe
          } catch (error) {
            alert(error)
          }finally{
            setIsLoading(false)
          }
        }
        const getOtherArticles = async () => {
          setIsLoading(true)
          try {
            const collectionRef = collection(db, 'otherArticles');
            const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
              setOtherArticles(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
            return unsubscribe
          } catch (error) {
            alert(error)
          }finally{
            setIsLoading(false)
          }
        }
        getArticles()
        getQuotes()
        getStories()
        getOtherArticles()
    }, [keyword])

    if(isLoading) return <div className='h-36 flex-center'>
      <Loader />
    </div>
    if(!filteredPosts.length && !filteredStories.length && !filteredQuotes.length && !filteredOtherArticles.length) return 
    <h2 className='text-lg font-semibold text-black'>لا توجد نتائج البحث</h2>

    return (
    <>
        <div className="mt-6 text-right">
          {filteredPosts.length ? 
          <div className='p-5'>
            <h1 className='text-lg  font-bold'>المقالات</h1>
            <div className="relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ">
              {filteredPosts.map(post => (
                <ArticleCard key={post.id} data={post} />
              ))}
            </div>
          </div> : null
          }
          {filteredStories.length ?
          <div className='p-5'>
            <h1 className='text-lg  font-bold'>القصص</h1>
            <div className="relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ">
              {filteredPosts.map(story => (
                <StoryCard key={story.id} data={story} />
              ))}
            </div>
          </div> : null
          }
          {filteredQuotes.length ?
          <div className='p-5'>
            <h1 className='text-lg  font-bold'>اقتباسات</h1>
            <div className="relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ">
              {filteredQuotes.map(quote => (
                <QuotesCard key={quote.id} data={quote} />
              ))}
            </div>
          </div> : null
          } 
        {filteredOtherArticles.length ? 
          <div className='p-5'>
            <h1 className='text-lg  font-bold'>مقالات أخرى</h1>
            <div className="relative space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ">
              {filteredOtherArticles.map(artilce => (
                <OthersArticleCard key={artilce.id} {...artilce} />
              ))}
            </div>
          </div> : null
          }
        </div>
    </>
  )
}

export default SearchFor