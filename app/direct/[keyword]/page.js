import BannerSq from "@/banners/BannerSq"
import Link from "next/link"
import Script from "next/script"

export async function generateMetadata({params: {id}}){

  return {
    title: "movies",
    description: "link for movies",
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image": "/assets/movies.jpg",
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image": "/assets/movies.jpg",
      "og:type": "website",
    }
    }
}


const page = () => {

  return (
    <div className="max-6xl mx-auto min-h-screen bg-zinc-500 flex items-center justify-center  flex-col">
        <BannerSq />
        <Script type='text/javascript' src='//pl20816003.toprevenuegate.com/bf/9e/b6/bf9eb6e7b5ddd3ce92701feb9b883409.js' />
        <Script async="async" data-cfasync="false" src="//pl20812775.toprevenuegate.com/6b3890282dbcd2ff77e5aedcafd49c1a/invoke.js" />
        <Link 
        href="https://www.toprevenuegate.com/e767z6fz?key=f1dc2a62bf2183080fdc32f1321ce96e"
        className="bg-green-500 px-10 py-4 rounded-xl text-white font-semobold"
        target="_blank"
        >
          Download
          </Link>
        <div id="container-6b3890282dbcd2ff77e5aedcafd49c1a"></div>
    </div>
  )
}

export default page