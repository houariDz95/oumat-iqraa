import Footer from '@/components/Footer'
import './globals.css'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
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
        <div className='w-full bg-gray-100 overflow-clip' style={{direction: "rtl"}}>
          {children}          
          <Footer />
          <Analytics />
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4378697867992790"
          crossorigin="anonymous" />
        </div>
      </body>
    </html>
  )
}
