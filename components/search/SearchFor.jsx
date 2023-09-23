'use client'
import dynamic from 'next/dynamic';

const OthersArticleCard = dynamic(() => import('../articles/OthersArticleCard'));

const SearchFor = ({keyword, otherArticles}) => {

  const decodedKeyword = keyword ? decodeURIComponent(keyword) : '';

      const regex = new RegExp(decodedKeyword, "i"); 
      
      
      const filteredOtherArticles = otherArticles?.filter(
        (item) =>
          regex.test(item.title) ||
          regex.test(getContentText(item.articleText)) ||
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



    if(!filteredOtherArticles.length) return (
    <h2 className='text-lg font-semibold text-black'>لا توجد نتائج البحث</h2>
    )

    return (
    <>
      <div className="mt-6 text-right"> 
        {filteredOtherArticles.length ? 
          <div className='p-5'>
            <h1 className='text-lg  font-bold'>مقالات أخرى</h1>
            <div className="relative space-y-6 py-8 sm:columns-2 sm:gap-6 ">
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