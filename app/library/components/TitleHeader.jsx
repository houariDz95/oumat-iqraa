
const TitleHeader = ({title}) => {
  return (
    <div className='relative h-[150px] w-screen flex items-center justify-center bg-gradient-to-r text-white from-indigo-500 to-primary mb-8'>
        <h1 className="'text-2xl font-bold">{title}</h1>
    </div>
  )
}

export default TitleHeader