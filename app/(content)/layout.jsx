import ContentCat from "./components/ContentCat";

export default function Layout({ children }){
    return(
        <div>
            <ContentCat />
            {children}
        </div>
    )
}