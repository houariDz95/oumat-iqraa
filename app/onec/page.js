
import Banner_720 from '@/Banners/Banner_720';
import Banner_600 from '@/Banners/banner_600';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'مواقع الديوان الوطني للامتحانات والمسابقات - onec, bac, bem',
    description: 'الموقع الرسمي للديوان الوطني للامتحانات والمسابقات في الجزائر. تعرف على نتائج الامتحانات، التسجيلات وسحب الاستدعاءات لشهادة البكالوريا، التعليم المتوسط، والابتدائي.',
    keywords: 'onec, bac, bem, الديوان الوطني للامتحانات والمسابقات, نتائج الامتحانات, الجزائر',
};
  
export default function Home() {
  return (
    <>
    <div className='w-full flex items-center justify-center lg:hidden'>
        <Banner_720 />
    </div>
    <div className='flex px-8 sm:px-16 md:px-24 lg:px-32 mt-24'>
        <div className="container mx-auto p-6 flex-[0.8]">
            <Link href="https://oumat-iqraa.com/onec" className="w-full flex items-center justify-center mb-8">
                <Image src="/assets/onec.jpg" width={720} height={280} alt="onec" />
            </Link>
        <h1 className="text-4xl font-bold mb-4">مواقع الديوان الوطني للامتحانات والمسابقات</h1>
        <p className="text-lg mb-6">
            الموقع الرسمي للديوان الوطني للامتحانات والمسابقات، التابع لوزارة التربية الوطنية، يتواجد على العنوان الإلكتروني 
            <span className="font-semibold"> onec.dz</span>. يُنشر عبر هذا الموقع مختلف نتائج الامتحانات والشهادات الرسمية. بالإضافة إلى ذلك، يمكن للمترشحين التسجيل في الامتحانات النهائية الرسمية مثل شهادة البكالوريا، شهادة التعليم المتوسط، وشهادة التعليم الابتدائي.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-3">الإطلاع على نتائج وعلامات التلاميذ</h2>
            <p className="mb-3">الآن يمكنكم الإطلاع على نتائج وعلامات التلاميذ للفصول الدراسية الثلاثة (الفصل الأول، الفصل الثاني، الفصل الثالث) عبر المنصات الرقمية التالية لجميع المستويات التعليمية في الجزائر:</p>
            <ul className="list-disc list-inside space-y-2">
            <li><Link href="https://tharwa.education.gov.dz"><span className="text-blue-500 hover:underline">موقع أولياء التلاميذ لكشف نتائج التعليم الابتدائي</span></Link></li>
            <li><Link href="https://tharwa.education.gov.dz"><span className="text-blue-500 hover:underline">منصة أولياء التلاميذ لكشف نتائج التعليم المتوسط</span></Link></li>
            <li><Link href="https://tharwa.education.gov.dz"><span className="text-blue-500 hover:underline">رابط أولياء التلاميذ لكشف نتائج التعليم الثانوي</span></Link></li>
            </ul>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">مواقع الديوان الوطني للامتحانات والمسابقات</h2>
            <p className="mb-3">يمكنكم التسجيل، تأكيد التسجيلات، سحب الاستدعاءات، والاطلاع على النتائج عبر المواقع الرسمية للديوان الوطني للامتحانات والمسابقات التالية:</p>
            <ul className="list-disc list-inside space-y-2">
            <li><Link href="https://bac.onec.dz"><span className="text-blue-500 hover:underline">شهادة البكالوريا</span></Link></li>
            <li><Link href="https://bem.onec.dz"><span className="text-blue-500 hover:underline">شهادة التعليم المتوسط</span></Link></li>
            <li><Link href="https://cinq.onec.dz"><span className="text-blue-500 hover:underline">شهادة التعليم الابتدائي</span></Link></li>
            </ul>
        </div>
            <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
            <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
        </div>
        <div className='flex-[0.2] w-full h-full p-6 sticky top-0 hidden lg:block'>
            <Banner_600 />
        </div>
    </div>
    </>
  );
}
