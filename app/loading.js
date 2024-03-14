import Loader from "@/components/Loader"

const loading = () => (
    <div className='w-full h-[calc(100vh-100px)] flex items-center justify-center'>
        <Loader />
    </div>
)

export default loading