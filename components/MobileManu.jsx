import Link from "next/link"
import { navLinks } from '@/constants';

const MobileManu = ({primary, isOpen}) => {
  return (
      <div 
      className="bg-black/40 lg:hidden w-full py-2 mt-4">
        <ul className="flex flex-col gap-4 w-full">
          {navLinks.map((link) => (
            <li
              key={link.path}
              className="text-white text-lg font-normal px-4 py-2 w-full "
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