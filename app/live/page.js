import Banner_720 from "@/Banners/Banner_720";
import AdsMulti from "@/components/AdsMulti";
import LiveScoreWidget from "@/components/LiveScoreWidget";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-4 sm:px-8 md:px-16 lg:px-32 overflow-x-hidden gap-6">
        <AdsMulti />
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
        <AdsMulti />
    </div>
  );
}

