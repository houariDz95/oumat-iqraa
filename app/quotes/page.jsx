import Navbar from "@/components/Nav"
import PageTitle from "@/components/PageTitle";
import QuotesContainer from "@/components/quotes/QuotesContainer"
import SearchQuotesBar from "@/components/quotes/SearchQuotesBar"

export const metadata = {
  title: 'اقتباسات ملهمة وملفتة للنظر - أمة اقرأ',
  description: 'اكتشف قوة الحكم والعبارات الملهمة على موقع أمة اقرأ! انغمس في عالم الحكم والاقتباسات الجميلة والذكية واستمد منها الإلهام والتفاؤل. اكتشف أفضل الكلمات التي تجذب الأنظار وتعكس حكمة العقول وروعة الإبداع.',
};


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