import ContentCat from "./components/ContentCat";
import HeaderDate from "./components/HeaderDate";

export default function Layout({ children }){
    return(
        
        <div className="min-h-[80vh]">
            <HeaderDate />
            <ContentCat /> 
            {children}
        </div>
    )
}