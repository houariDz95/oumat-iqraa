import Navbar from "@/components/Nav"
import PageTitle from "@/components/PageTitle"
export const metadata = {
  title: 'كتابة مقال جديد - أمة اقرأ',
  description: 'انشر أفكارك ومعرفتك من خلال كتابة مقال جديد في موقع أمة اقرأ.',
}

export default function Layout({ children }) {
  return (
    <div> 
        <Navbar />
        <PageTitle title="مقالات" desc="مقالات رائعة في موضوعات متنوعة" />
        {children}
    </div>
  )
}
