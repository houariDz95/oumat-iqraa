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
    "0821cf729c181b00a13a8f77587bd37ad3e22adf" : "0821cf729c181b00a13a8f77587bd37ad3e22adf"
  }
};


export default function RootLayout({ children }) {
  const scriptContent = `
    (function(buorz){
      var d = document,
          s = d.createElement('script'),
          l = d.scripts[d.scripts.length - 1];
      s.settings = buorz || {};
      s.src = "//crookedchange.com/aEWR5TwyY.Wxd/lWQK2U9pkKZPT/9R6Kbw2v5clcSvWDQu9GNbTdEz5TMUz-YK0YMuie0k1IMaTUkOzpNUjBQfzF";
      s.async = true;
      l.parentNode.insertBefore(s, l);
    })({});
  `;
  const scriptContentTwo = `
  (function(iappn){
    var d = document,
        s = d.createElement('script'),
        l = d.scripts[d.scripts.length - 1];
    s.settings = iappn || {};
    s.src = "//crookedchange.com/a.W/5owGYuWddsllQ/2R9/k/ZITc9B6_bM2/5blFSwWqQO9/N/TGEc5GMAzCYq1/MSiK0d1UMYTbkezlNwjDU/zr";
    s.async = true;
    l.parentNode.insertBefore(s, l);
  })({});
`;
const scriptContentThree = `
    (function(bc){
      var d = document,
          s = d.createElement('script'),
          l = d.scripts[d.scripts.length - 1];
      s.settings = bc || {};
      s.src = "//crookedchange.com/bYXrVHs/d.GDl/0_YmWCdbiSYPWn5Du/ZZXDIn/be/my9TuUZ/UCl/kbPlTeUyx/OfTsM-2ZM_jgICtkNNTPEF5HMtz/YwyYM/wj";
      s.async = true;
      l.parentNode.insertBefore(s, l);
    })({});
  `;
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
        {/* <Script
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
        /> */}
      {/* <Script id="in zone" dangerouslySetInnerHTML={{ __html: scriptContent }} /> */}
      <Script id="in push" dangerouslySetInnerHTML={{ __html: scriptContentTwo }} />
      <Script id="multi" dangerouslySetInnerHTML={{ __html: scriptContentThree }} />
      {/* <Script
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
      /> */}
        <Script async="async" data-cfasync="false" src="//pl22011376.toprevenuegate.com/8d0e5ef90b16b8673778be8c227df469/invoke.js" />
        <Script type='text/javascript' src='//pl22011379.toprevenuegate.com/cb/6c/a9/cb6ca9bc4f527eb49d7f74b6747bcd7a.js' />
      </body>
    </html>
  )
}

