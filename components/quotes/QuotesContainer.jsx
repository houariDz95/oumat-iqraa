'use client'
import {useState, useEffect} from 'react';
import quotesData from "@/constants/quotes.json"
import QuotesCard from './QuotesCard';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SearchQuotesBar from './SearchQuotesBar';
import {motion} from 'framer-motion'

const QuotesContainer = ({quotesCat}) => { 
    const [data, setData] = useState([]) 
    const [mobileMenu, setMobileMenu] = useState(false);
    
    useEffect(() => {
      const selectQuotes = (cat) => {
        setData(quotesData[cat])
      }
      selectQuotes(quotesCat)
      setMobileMenu(false)
    }, [quotesCat])

    return (
    <>
      <div className='md:hidden flex-between p-4 mt-5'>
        <div>
          {mobileMenu ? 
          <AiOutlineClose size={25} onClick={() => setMobileMenu(false)} className='text-secondary'/> :
          <AiOutlineMenu size={25} onClick={() => setMobileMenu(true)} className='text-secondary'/>}
        </div>
        <div>
          <h4 className='text-sm'>{`إقتبسات عن ${quotesCat} `}</h4>
        </div>
      </div>
      <div className='max-w-6xl mx-auto  mt-8 min-h-[calc(100vh-73px)] flex p-4 gap-6 relative '>
        {/* search bar desktop */}
        <div className="hidden md:block">
          <SearchQuotesBar quotesCat={quotesCat} />
        </div>

        {/*search bar mobile */}
        {mobileMenu && <motion.div 
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0, transition: {duration: 0.5, delay: 0.2}}}
        className='block md:hidden w-[80vw] absolute top-0 right-0 z-50 bg-white'>
          <SearchQuotesBar quotesCat={quotesCat} />
        </motion.div>}
        
        {/* quotes */}
        <motion.div className=' space-y-6 py-8 sm:columns-2 sm:gap-6  flex-1'>
          {data.map((item, i) => (
            <QuotesCard key={i} data={item} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default QuotesContainer

