import Footer from '@/components/Footer'
import './globals.css'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const cairo = Cairo({
  subsets: ['latin'],
  weight: ["400", "700"],
  varible: "--font-roboto",
})

export const metadata = {
  title: 'أمة اقرأ',
  description: 'موقع أمة اقرأ للكتب والمقالات والكتابة وتوليد الصور بالذكاء الاصطناعي.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={cairo.varible}>
        <div className='w-full bg-gray-100 min-h-[calc(100vh-73px)] overflow-x-hidden' style={{direction: "rtl"}}>
          {children}          
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
