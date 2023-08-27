'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import {LazyMotion, domAnimation, m } from 'framer-motion';
import { db } from "@/firebase";
import {doc, collection, getDoc, query, onSnapshot, where} from 'firebase/firestore';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import 'moment/locale/ar';
import Image from "next/image";
import Loader from "../Loader";
import { updateText, updateTextAndSlice } from "@/utils/updateText";
import { useMediaQuery } from "@react-hook/media-query";
import { useInView } from 'react-intersection-observer';

const StoryDetails = ({id}) => {
    const [story, setStory] = useState([]);
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(false);
    const randomCat = story?.category?.[Math.floor(Math.random() * story.category.length)];
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once when the element enters the viewport
    });
    const filltredStories = stories.filter(item => item.id !== id) 
    useEffect(() => {
        const getPost = async () => { 
            try {
              setLoading(true)
              const collectionRef = collection(db, 'stories')
              const docRef = doc(collectionRef, id);
              const data = await getDoc(docRef)
              setStory(data.data())
            } catch (error) {
              alert('Error fetching story: ' + error.message)
            }finally{
              setLoading(false)
            }
        }
        getPost()
    }, [])

    useEffect(() => {
      const fetchStories = async () => { 
        try {
          const docsRef = collection(db, 'stories')
          let q = docsRef;
          if (randomCat) {
            q = query(docsRef, where('category', 'array-contains', randomCat));
          }

          const unsubscribe = onSnapshot(q, (snapshot) => {
              setStories(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
          return unsubscribe
        } catch (error) {
          alert(error)
        } 
      }
      fetchStories(); 
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
      initial={!isMobile ? { opacity: 0, y: 20} : {opacity: 1, y: 0}}
      animate={!isMobile ? { opacity: 1, y: 0 } : {}}
      transition={!isMobile ? { duration: 0.3 }: {}}
    >
      <div className="flex items-center gap-2 mb-4">
        <div> 
          <p className="text-gray-500 flex items-center gap-2 text-sm">
            <AiOutlineCalendar size={18} color='#6449ff' />
            {moment(story.timestamp?.toDate(), 'ar').format('DD MMMM YYYY')}
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-4 blue_gradient font-plex">{story.title}</h2>
      <Image src={story.imageUrl} alt={story.title} className="mb-4 w-full max-h-[350px] object-cover rounded-lg shadow-md mt-5" width={400} height={400}/>
      <div ref={ref}>
          {inView ? updateText(story.storyText, story.isFromEditor) : <p>Loading...</p>}
      </div>
      <div className="flex flex-center gap-6 text-lg font-bold text-gray-900 my-10">
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>
      <div className="">
      <h1 className="text-xl font-semibold my-4">استكشف أيضًا</h1>
      <div className="grid gap-4 grid-cols-1">
        {filltredStories.map(item => (
          <div className="bg-white shadow-md p-1 xs:p-2 flex flex-row-reverse md:flex-row gap-2" key={item.id}>
            <Image
              width={200}
              height={200}
              src={item.imageUrl}  
              alt={story.tilte}
              className="object-cover h-36 w-32 hidden xs:block"
            />
            <div className="mr-4 flex items-start justify-center gap-3 flex-col">
              <h2 className="text-md md:text-xl font-semibold">{item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title}</h2>  
              <p className="text-gray-600 leading-snug text-[12px] md:text-lg">{updateTextAndSlice(item.storyText, item.isFromEditor)}
              <Link href={`/stories/${item.id}`} className='blue_gradient cursor-pointer'>بدء القراءة</Link>
              </p> 
            </div>
          </div>
        ))}
      </div> 
    </div>
    </m.div>
  </LazyMotion>
  )
}

export default StoryDetails