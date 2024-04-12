import Link from "next/link"
import { navLinks } from '@/constants';
import { cn } from "@/lib/utils";

const MobileManu = ({steIsOpen, isOpen}) => {
  return (
    <div 
      className={cn("bg-gradient-to-b from-black/70 to-black/90 shadow-lg border border-black lg:hidden  absolute top-14 left-10 rounded-lg p-5 z-20 transition-all duration-500",
    )}
    >
      <ul className="flex flex-col gap-4 w-full">
        {navLinks.map((link) => (
          <li
          onClick={() => steIsOpen(false)}
            key={link.path}
            className="-tracking-tighter text-border text-md font-normal px-2 py-1 w-full "
          >
            <Link href={link.path} >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default MobileManu