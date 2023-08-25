import { auth } from "@/firebase"
import Link from "next/link"
import {motion} from 'framer-motion';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { navLinks } from '@/constants';

const MobileManu = ({primary, handleSignOut, isOpen}) => {
  return (
    <motion.div 
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
        {auth.currentUser && (
          <div className='flex items-center justify-start mt-4 border-t border-gray-200/20 pt-4 gap-6'>
            {/* Profile Button */}
              <Link
                href={`/profile/${auth?.currentUser?.uid}`}
                className="text-white hover:text-gray-100/50 flex-center gap-4"
              >
                <FaUser className="inline-block mr-2" />
                الملف الشخصي
              </Link>
            {/* Sign Out Button */}
              <button
                className="text-white hover:text-gray-100/50 flex-center gap-4"
                onClick={handleSignOut}
              >
                <FaSignOutAlt className="inline-block mr-2" />
                تسجيل الخروج
              </button>
          </div>
        )}
      </ul>
    </motion.div>
  )
}

export default MobileManu