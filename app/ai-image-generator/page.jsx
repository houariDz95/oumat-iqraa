'use client'
import React, { useState, useEffect } from 'react';
import FormField from '@/components/FormField';
import Card from '@/components/image-generator/Card';
import { db } from '@/firebase';
import {  collection, getDocs } from 'firebase/firestore';
import Loader from '@/components/Loader';
import PageTitle from '@/components/PageTitle';

const RenderCards = ({ data, title }) => {
  if(data?.length > 0) {
    return data.map((post) => <Card key={post.id} {...post} />)
  }

  return (
    <h2 className="mt-5 font-bold text-primary text-xl uppercase">{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const docsRef = collection(db, 'prompots')
        const querySnapshot = await getDocs(docsRef); 
        const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setAllPosts(docs);
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));

        setSearchedResults(searchResults);
      }, 500)
    );
  }

  return (
    <>
      <PageTitle title="جرب الذكاء الاصطناعي" desc="قم بتوليد صورتك بواسطة الذكاء الاصطناعي" />
      <section className="max-w-6xl mx-auto">
        <div className='w-full flex flex-col mt-8'>
          <h1 className="font-extrabold text-[#222328] text-[32px]">عرض الصور</h1>
          <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">استعرض مجموعة من الصور المبدعة والمذهلة بصريًا التي تم إنشاؤها بواسطة DALL·E AI.</p>
        </div>

        <div className="mt-16">
          <FormField 
            labelName="ابحث عن صورة"
            type="text"
            name="text"
            placeholder="ابحث عن صورة..."
            value={searchText}
            handleChange={handleSearchChange}
          />
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className="font-medium text-[#666e75] text-xl mb-3">
                  Showing results for <span className="text-[#222328]">{searchText}</span>
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-3">
                {searchText ? (
                  <RenderCards 
                    data={searchedResults}
                    title="No search results found"
                  />
                ) : (
                  <RenderCards 
                    data={allPosts}
                    title="No posts found"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Home