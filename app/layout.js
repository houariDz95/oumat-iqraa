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
    "monetag": "ef21375ad85d6cea348fb39afc996353",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <Script src="https://chezoams.com/pfe/current/tag.min.js?z=6622503" data-cfasync="false" async />
        <Script async="async" data-cfasync="false" src="//ophoacit.com/1?z=6622635" /> 
        <Script async="async" data-cfasync="false" src="//thubanoa.com/1?z=6622635" />
        <Script
          id="incredibal tag"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,z,s){
                s.src='https://'+d+'/400/'+z;
                try{
                  (document.body||document.documentElement).appendChild(s)
                }catch(e){}
              })('waitheja.net',6622531,document.createElement('script'));
            `,
          }}
        />
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
        {/*<Script
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
        />*/}
      </body>
    </html>
  )
}

