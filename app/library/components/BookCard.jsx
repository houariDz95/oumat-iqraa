import { Button } from "@/components/ui/button"
import Link from "next/link"


const BookCard = ({img, id, title, forContributor}) => {
  return (
    <Link href={forContributor ? `/library/contributors/${id}` :`/library/book/${id}`} className="relative shadow-md group">
        <img 
            src={img} 
            alt={title} 
            className="object-contain w-full h-full group-hover:opacity-25  transition duration-500  ease-linear group-hover:scale-105 overflow-hidden"
        />
        <Button 
        varian="default" 
        size="lg"
        className="
        hidden 
        lg:group-hover:block 
        absolute top-[50%] 
        left-[50%] -translate-x-[50%] 
        -translate-y-[50%] 
        transation
        font-bold
        ease-linear
        duration-500"
        >
            شاهد التفاصيل 
        </Button>
    </Link>
  )
}

export default BookCard