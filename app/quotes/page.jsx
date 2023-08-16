import Navbar from "@/components/Nav"
import PageTitle from "@/components/PageTitle";
import QuotesContainer from "@/components/quotes/QuotesContainer"


export async function generateMetadata(paramKey){
  const cat = paramKey.searchParams.cat;
  return {
    title: `أقوال عن ${cat}`,
    description : `استمتع بقراءة وتصفح أقوال ملهمة حول موضوع ${cat} على موقع أمة اقرأ.`,
  }
}

const QuotesPage = (paramKey) => {
  const cat = paramKey.searchParams.cat;
  return (
    <>
        <Navbar />
        <PageTitle title={cat} desc="عبارات ملهمة وملفتة للنظر" />
        <QuotesContainer quotesCat={cat}/>
    </>
  )
}

export default QuotesPage