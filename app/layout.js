import Footer from '@/components/Footer'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { Noto_Kufi_Arabic } from 'next/font/google';
import Navbar from '@/components/Nav';
import ExternalScript from '@/scripts';
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
    "monetag" : "db9ec2b75c10e144f6002c44db63a127",
  }
}; 

//"0821cf729c181b00a13a8f77587bd37ad3e22adf" : "0821cf729c181b00a13a8f77587bd37ad3e22adf"
export default function RootLayout({ children }) {
  return (
    <html lang="ar">
        <head>
         {/* <script async="async" data-cfasync="false" src="//thubanoa.com/1?z=7431064"></script> */}
         <Script 
            id="vignet"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(d,z,s){
                    s.src='https://'+d+'/401/'+z;
                    try{
                      (document.body || document.documentElement).appendChild(s);
                    } catch(e) {}
                  })('oaphoace.net', 7336689, document.createElement('script'));
                `,
              }}
            />  
        </head> 
        <body className={kufi.className}>
          <div className='w-full overflow-clip' style={{direction: "rtl"}}>         
              <Navbar />
              {children}
              <Footer />
          </div>
        
        {/* Ads Goes Here!
        <Script  async src="https://www.googletagmanager.com/gtag/js?id=G-09CG0KK3TY" ></Script>  */}
        
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
                 <Script 
            id="hilltop"
              dangerouslySetInnerHTML={{
                __html: `
                (function(xltih){
                  var d = document,
                      s = d.createElement('script'),
                      l = d.scripts[d.scripts.length - 1];
                  s.settings = xltih || {};
                  s.src = "\/\/palecount.com\/bAXeV.s\/dHGFlU0lYGWNdcizYTWW5zucZJXSIk\/De\/mQ9tuPZSU\/l\/kxP\/TKUszqNYzWA-ynOnT_gdtONaT\/MU3LMWD\/I\/5\/OaQO";
                  s.async = true;
                  l.parentNode.insertBefore(s, l);
                  })({})
                `,
              }}
            /> 
        <Analytics />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4378697867992790"
     crossorigin="anonymous"></script>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4378697867992790" crossorigin="anonymous" />
        <Script async="async" data-cfasync="false" src="//pl22011376.toprevenuegate.com/8d0e5ef90b16b8673778be8c227df469/invoke.js" />
        {/*<Script type='text/javascript' src='//pl22011379.toprevenuegate.com/cb/6c/a9/cb6ca9bc4f527eb49d7f74b6747bcd7a.js' />*/}
        <Script type='text/javascript' src='//pl22011379.profitablegatecpm.com/cb/6c/a9/cb6ca9bc4f527eb49d7f74b6747bcd7a.js' /> 
      </body>
    </html>
  )
}


/*
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

*/