"use client"
import {useState, useEffect} from 'react';

import quotesData from "@/constants/quotes.json"
import { filterQuotesByAuthor } from "@/utils/fetchQuotesByAuthor"
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import QuotesCard from './QuotesCard';

const QuotesAuthor = ({author}) => {
  const [quotes, setQuotes] = useState([]);
  const filteredQuotes = filterQuotesByAuthor(quotesData, author);
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const docsRef = collection(db, 'quotes')
        const q =  query(docsRef, where('author', "==", author))
        const unsubscribe = onSnapshot(q, (snapshot) => {
          setQuotes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          })
        return unsubscribe
      } catch (error) {
        alert("Error: " + error.message)
      }
    }
    getQuotes()
  }, [author]) 
  &quot;
  return (
    <div className='max-w-6xl mx-auto mt-10 p-4'>
      <h1 className='head_text orange_gradient'>أشهر اقوال {author}</h1>
      <p className='text-lg text-gray-700 my-4'>
        نص الوصف:   &quot;مرحبًا بك في صفحة المؤلف، حيث تجد مجموعة مختارة من أجمل وأعمق اقتباسات <span className='blue_gradient'>#{author}</span>.
         تُقدم لك هذه الصفحة فرصة فريدة لاستكشاف عباراته القوية والملهمة
          التي تعكس تفكيره ورؤيته. استمتع بالغوص في عالم الحكم والأفكار الذي خلّفه المؤلف من خلال هذه
          المجموعة المميزة من الاقتباسات. اغمر نفسك في كلماته، ودعها ترافقك في رحلة من العلم والتأمل
         ، فقراءة هذه الاقتباسات لن تكون مجرد ممتعة، بل ستمنحك الفرصة للتأمل والتفكير في معانيها العميقة
         . ابدأ رحلتك الأدبية هنا واستفد بأقصى ما تستطيع من حكم وحكايات هذا المؤلف الرائع. &ldquo;
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {quotes.map((item, i) => (
        <QuotesCard key={i} data={item} />
          ))}
          {filteredQuotes.map((item, i) => (
            <QuotesCard key={i} data={item} />
          ))}
      </div>
    </div>
  )
}

export default QuotesAuthor