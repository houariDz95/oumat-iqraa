import Footer from '@/components/Footer'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { Noto_Kufi_Arabic } from 'next/font/google';
import Navbar from '@/components/Nav';
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
        <head>
        <script src="https://kulroakonsu.net/88/tag.min.js" data-zone="57586" async data-cfasync="false"></script>
      <Script 
        id="in-push"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,z,s){
              s.src='https://'+d+'/400/'+z;
              try{
              (document.body||document.documentElement).appendChild(s)
              }catch(e){}
              })('whouseem.com',7325933,document.createElement('script'))
            `,
          }}
        /> 
        
        <Script 
        id="vignet"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,z,s){
                s.src='https://'+d+'/401/'+z;
                try{
                  (document.body || document.documentElement).appendChild(s);
                } catch(e) {}
              })('glizauvo.net', 7344616, document.createElement('script'));
            `,
          }}
        />  
       <script async="async" data-cfasync="false" src="//thubanoa.com/1?z=7344634"></script>    
      </head> 
        </head>
        <body className={kufi.className}>
          <div className='w-full overflow-clip' style={{direction: "rtl"}}>         
              <Navbar />
              {children}
              <Footer />
          </div>

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
        <Analytics />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4378697867992790" crossorigin="anonymous" />
        <script async="async" data-cfasync="false" src="//affordspoonsgray.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
        <Script type='text/javascript' src='//affordspoonsgray.com/f1/35/b6/f135b6c7596d2e6a99fcbc6d0399e175.js' />
      </body>
    </html>
  )
}


