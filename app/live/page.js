import Banner_720 from "@/Banners/Banner_720";
import AdsMulti from "@/components/AdsMulti";
import LiveScoreWidget from "@/components/LiveScoreWidget";

export const metadata = {
    title: 'معلومات عنا - أمة اقرأ',
    description: 'تعرف على مزيد من التفاصيل حول أمة اقرأ. نبذة عن مهمتنا ورؤيتنا وكيف نساهم في تقديم المحتوى الملهم والمثير. اكتشف من نحن وكيف يمكنك الانضمام إلى مجتمعنا.',
    other: {
      'theme-color': '#0d1117',
      'color-scheme': 'light only',
      'twitter:image': 'URL_TO_YOUR_TWITTER_IMAGE',
      'twitter:card': 'summary_large_image',
      'og:url': 'https://oumat-iqraa.com',
      'og:image': 'URL_TO_YOUR_OG_IMAGE',
      'og:type': 'website',
    },
  };
  
 
  
export default function Home() {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-4 sm:px-8 md:px-16 lg:px-32 overflow-x-hidden gap-6">
      <div className="w-full flex flex-row lg:flex-col items-center justify-center p-2 gap-2">
        <AdsMulti src="/assets/ads.jpg" />
        <AdsMulti src="/assets/ads-1.jpg" />
      </div>
        <div className="max-w-4xl mx-auto" style={{ direction: "ltr"}}>
            <Banner_720 />
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
                <span role="img" aria-label="France Flag" className="mr-2 text-blue-900">
                🇫🇷
                </span>
                France vs Belgium
                <span role="img" aria-label="Belgium Flag" className="ml-2 text-red-700">
                🇧🇪
                </span>
            </h1>
            <LiveScoreWidget />
        </div>
        <div className="w-full flex flex-row lg:flex-col items-center justify-center p-2 gap-2">
          <AdsMulti src="/assets/ads.jpg" />
          <AdsMulti src="/assets/ads-1.jpg" /> 
        </div>
    </div>
      <script async="async" data-cfasync="false" src="//affordspoonsgray.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
      <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
    </>
  );
}

