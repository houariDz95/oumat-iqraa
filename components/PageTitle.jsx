import Link from "next/link"

const PageTitle = ({title, desc, articles}) => {
  return (
    <div className="text-center w-full h-[304px] p-4 flex-col-center gap-2 bg-svg-pattern text-white relative">
        <h1 className="head_text">{title}</h1>
        <p className="text-md text-center">{desc}</p>
        {articles && <p className="text-center text-md text-white">
          ابدأ الكتابة للمقالات  
         {" "} <Link href="/articles/write" className="orange_gradient font-bold hover:underline">
            من هنا
          </Link>
          </p>}
    </div>
  )
}

export default PageTitle