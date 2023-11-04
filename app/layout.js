import Footer from '@/components/Footer'
import './globals.css'

import Script from 'next/script';
import { Noto_Kufi_Arabic } from 'next/font/google';
import Head from 'next/head';
const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ["400", "700"],
})

export const metadata = {
  title: 'أمة اقرأ',
  description: 'موقع أمة اقرأ للكتب والمقالات والكتابة وتوليد الصور بالذكاء الاصطناعي.',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "light only",
    "twitter:image": '/assets/library.png',
    "twitter:card": "summary_large_image",
    "og:url": "oumat-iqraa.com",
    "og:image": '/assets/library.png',
    "og:type": "website",
    "monetag": "955e83fa15f934ed13de7219e590b516",
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={kufi.className}>
        <div className='w-full bg-gray-100 overflow-clip' style={{direction: "rtl"}}>            
            {children}
            <Footer />
            <Script  async src="https://www.googletagmanager.com/gtag/js?id=G-09CG0KK3TY" ></Script>
            <Script type='text/javascript' src='//pl20816003.highcpmrevenuegate.com/bf/9e/b6/bf9eb6e7b5ddd3ce92701feb9b883409.js' />
            <Script
            id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-09CG0KK3TY');
              `,
              }}
          />
        </div>
      </body>
    </html>
  )
}
