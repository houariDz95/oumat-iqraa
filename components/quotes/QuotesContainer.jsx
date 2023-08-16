'use client'
import {useState, useEffect} from 'react';
import quotesData from "@/constants/quotes.json"
import QuotesCard from './QuotesCard';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SearchQuotesBar from './SearchQuotesBar';
import {motion} from 'framer-motion'
import { db } from '@/firebase';
import {collection, onSnapshot, query, where} from "firebase/firestore";

const QuotesContainer = ({quotesCat}) => { 
    const [data, setData] = useState([]) 
    const [quotes, setQuotes] = useState([])
    const [mobileMenu, setMobileMenu] = useState(false);
    useEffect(() => {
      const selectQuotes = (cat) => {
        setData(quotesData[cat])
      }
      const fetchQuotes = async () => {
        try {
          const docsRef = collection(db, 'quotes')
          const q = query(docsRef, where('category', "array-contains", quotesCat));
          const unsubscribe = onSnapshot(q, (snapshot) => {
            setQuotes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
          return unsubscribe
        } catch (error) {
          alert(error)
        } 
      }
      fetchQuotes();       
      selectQuotes(quotesCat)
      setMobileMenu(false)
    }, [quotesCat])

    return (
    <>
      <div className='md:hidden flex-between p-4 mt-5'>
        <div>
          <AiOutlineMenu size={25} onClick={() => setMobileMenu(true)} className='text-secondary'/>
        </div>
        <div>
          <h4 className='text-md font-semibold font-plex'>إقتبسات عن <span className='orange_gradient'>#{quotesCat}</span> </h4>
        </div>
      </div>
      <div className='max-w-6xl mx-auto  md:mt-8 min-h-[calc(100vh-73px)] flex p-4 gap-6 cursor-pointer'>
        {/* search bar desktop */}
        <div className="hidden md:block mt-8">
          <SearchQuotesBar quotesCat={quotesCat} quotes={quotes} />
        </div>

        {/*search bar mobile */}
        {mobileMenu && <motion.div 
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0, transition: {duration: 0.5, delay: 0.2}}}
        className='block md:hidden fixed top-0 left-0 w-screen h-screen bg-black/40 z-50'>
          <motion.span
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0, transition: {duration: 0.5, delay: 0.3}}}
            className='absolute top-10 left-10 bg-white shadow-md p-1 rounded-full'
          >
            <AiOutlineClose size={16} onClick={() => setMobileMenu(false)} className='text-secondary'/> 
          </motion.span>
          <motion.div
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0, transition: {duration: 0.5, delay: 0.3}}}
          className='w-3/4 h-screen  bg-white'
          >
            <SearchQuotesBar quotesCat={quotesCat} />
          </motion.div>
        </motion.div>}
        

        <motion.div className=' space-y-6 py-8 sm:columns-2 sm:gap-6  flex-1'>
          {quotes.map((item, i) => (
              <QuotesCard key={i} data={item} />
          ))}
          {data.map((item, i) => (
            <QuotesCard key={i} data={item} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default QuotesContainer

