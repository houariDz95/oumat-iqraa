import Footer from '@/components/Footer'
import './globals.css'
import { Cairo } from 'next/font/google'
import Script from 'next/script';
const cairo = Cairo({
  subsets: ['latin'],
  weight: ["400", "700"],
  varible: "--font-roboto",
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
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={cairo.varible}>
        <div className='w-full bg-gray-100 overflow-clip' style={{direction: "rtl"}}>            
            {children}  
            <Footer />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-09CG0KK3TY" />
            <Script
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
