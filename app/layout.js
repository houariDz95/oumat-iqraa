import Footer from '@/components/Footer'
import './globals.css'

import Script from 'next/script';
import { Noto_Kufi_Arabic } from 'next/font/google';
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
      <head>
        <Script src="https://alwingulla.com/88/tag.min.js" data-zone="19673" async data-cfasync="false" />
        <Script src="https://jouteetu.net/pfe/current/tag.min.js?z=6555305" data-cfasync="false" async />
      </head>
      <body className={kufi.className}>
        <div className='w-full bg-gray-100 overflow-clip' style={{direction: "rtl"}}>            
            {children}
            <Footer />
            <Script  async src="https://www.googletagmanager.com/gtag/js?id=G-09CG0KK3TY" ></Script>
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
