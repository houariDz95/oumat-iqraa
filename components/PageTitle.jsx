import Link from "next/link"

const PageTitle = ({title, desc, articles, ai}) => {
  return (
    <div className="text-center w-full h-[304px] p-4 flex-col-center gap-2 bg-svg-pattern text-white relative">
        <h1 className="text-[40px] font-semibold italic max-w-2xl text-white">{title}</h1>
        <p className="text-md text-center">{desc}</p>
        {articles && <p className="text-center text-md text-white">
          ابدأ الكتابة للمقالات  
         {" "} <Link href="/articles/write" className="text-secondary hover:underline">
            من هنا
          </Link>
          </p>}
        {ai && <p className="text-center text-md text-white">
          العودة إلى معرض الصور   
         {" "} <Link href="/ai-image-generator" className="text-secondary hover:underline">
            من هنا
          </Link>
          </p>}
    </div>
  )
}

export default PageTitle