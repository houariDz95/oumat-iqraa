import Banner_720 from "@/Banners/Banner_720";
import ContentCat from "./components/ContentCat";

export default function Layout({ children }){
    return(
        <div className="min-h-[80vh]">
            <ContentCat />
            {children}
            {/* <div className="max-w-[720px] mx-auto">
                <Banner_720 />
            </div>
            <div class=" my-10 bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="text-center">
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            الموقع قيد الصيانة
                        </h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            سنقوم بإصلاح المشكلة خلال ٢٤ ساعة. يمكنك زيارة مكتبتنا لرؤية الكتب المذهلة!
                        </p>
                        <a href="https://www.oumat-iqraa.com/library" class="mt-6 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            زيارة المكتبة
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
            <script async="async" data-cfasync="false" src="//pl22011376.profitablegatecpm.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
            <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
            </div>*/}
        </div>
    )
}