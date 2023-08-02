import Nav from "@/components/image-generator/Nav"

export const metadata = {
  title: 'توليد الصور بالذكاء الاصطناعي - أمة اقرأ',
  description: 'استخدم التقنيات المتقدمة في التعلم العميق لتوليد صور مدهشة في موقع أمة اقرأ.',
}
export default function Layout({ children }) {
  return (
    <div className="mb-10"> 
        <Nav />
        {children}
    </div>
  )
}
