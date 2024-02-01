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
  description: 'موقع أمة اقرأ للكتب والمقالات والكتابة',
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
        <Script
          id='popcach_ads'
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var uid = '467853';
              var wid = '707751';
              var pop_tag = document.createElement('script');
              pop_tag.src = '//cdn.popcash.net/show.js';
              document.body.appendChild(pop_tag);
              pop_tag.onerror = function() {
                pop_tag = document.createElement('script');
                pop_tag.src = '//cdn2.popcash.net/show.js';
                document.body.appendChild(pop_tag);
              };
            `,
          }}
        />
      <Script
      id='thunder'
      type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var uid = '467853';
            var wid = '707751';
            var pop_fback = 'up';
            var pop_tag = document.createElement('script');
            pop_tag.src = '//cdn.popcash.net/show.js';
            document.body.appendChild(pop_tag);
            pop_tag.onerror = function () {
              pop_tag = document.createElement('script');
              pop_tag.src = '//cdn2.popcash.net/show.js';
              document.body.appendChild(pop_tag);
            };
          `,
        }}
      />
        <Script async="async" data-cfasync="false" src="//pl22011376.toprevenuegate.com/8d0e5ef90b16b8673778be8c227df469/invoke.js" />
        <Script type='text/javascript' src='//pl22011379.toprevenuegate.com/cb/6c/a9/cb6ca9bc4f527eb49d7f74b6747bcd7a.js' />
      </body>
    </html>
  )
}

