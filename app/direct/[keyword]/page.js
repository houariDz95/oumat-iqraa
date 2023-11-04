import BannerSq from "@/banners/BannerSq"
import Redirect from "@/components/Redirect"
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
    <div className="max-6xl mx-auto min-h-screen bg-zinc-500 flex items-center justify-center  flex-row">
        <BannerSq />
        <Script type='text/javascript' src='//pl21201816.toprevenuegate.com/9a/09/61/9a0961c3a8eb0e15c0cd5bb0ed6b5c2e.js' />
        <Script type='text/javascript' src="//pl21201781.toprevenuegate.com/6638e496d98320ae6eda5fbad9755f56/invoke.js"  />
        <Redirect />
        <div id="container-6b3890282dbcd2ff77e5aedcafd49c1a"></div>
    </div>
  )
}

export default page