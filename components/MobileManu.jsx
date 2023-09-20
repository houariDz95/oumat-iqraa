import Link from "next/link"
import {LazyMotion, domAnimation, m} from 'framer-motion';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { navLinks } from '@/constants';

const MobileManu = ({primary, isOpen}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div 
      initial={{ opacity: 0, y: '-100%' }} 
      animate={{
        opacity: isOpen ? 1 : 0, 
        y: isOpen ? 0 : '-100%', 
        transition:{ duration: 0.5, ease: 'easeIn'}
      }}
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
      </m.div>
    </LazyMotion>
  )
}

export default MobileManu