import Banner_720 from "@/Banners/Banner_720";
import ContentCat from "./components/ContentCat";
import Script from 'next/script';
import HeaderDate from "./components/HeaderDate";
import ArticleDetailsOther from "@/components/articles/ArticleDetailsOther";

export default function Layout({ children }){
    return(
        
        <div className="min-h-[80vh]">
            {/* <HeaderDate />
            <ContentCat /> */}
            {children}
           <ArticleDetailsOther />
           <script async="async" data-cfasync="false" src="//affordspoonsgray.com/8d0e5ef90b16b8673778be8c227df469/invoke.js"></script>
            <div id="container-8d0e5ef90b16b8673778be8c227df469"></div>
        </div>
    )
}