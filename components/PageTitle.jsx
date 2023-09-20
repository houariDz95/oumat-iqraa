
const PageTitle = ({title, desc}) => {
  return (
    <div className="text-center w-full h-[304px] p-4 flex-col-center gap-2 bg-svg-pattern text-white relative">
        <h1 className="head_text mb-2">{title}</h1>
        <p className="text-md text-center">{desc}</p>
    </div>
  )
}

export default PageTitle