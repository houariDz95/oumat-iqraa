import Link from "next/link"
import { navLinks } from '@/constants';

const MobileManu = ({primary, isOpen}) => {
  return (
      <div 
      className={`${primary ? "bg-gray-900 md:bg-primary" : "bg-gray-900"} bg-gray-900 md:hidden p-4`}>
        <ul className="flex flex-col gap-4 py-2">
          {navLinks.map((link) => (
            <li
              key={link.path}
            >
              <Link href={link.path} className="text-white hover:text-gray-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default MobileManu