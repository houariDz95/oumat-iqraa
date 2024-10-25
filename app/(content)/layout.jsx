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
        </div>
    )
}