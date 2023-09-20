"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { navLinks } from '@/constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import dynamic from 'next/dynamic';
const MobileManu = dynamic(() => import('./MobileManu'))

const Navbar = ({primary}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname()
  console.log(pathname)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    }

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`${primary ? "bg-gray-900 md:bg-primary" : "bg-gray-900"} py-4 `}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          initial={!isMobile ? { opacity: 0, x: -20 } : {opacity: 1,  x: 0}}
          animate={!isMobile ? { opacity: 1, x: 0 }: {}}
          transition={!isMobile ? { duration: 0.5 } : {}}
        >
          <Link href="/"  className="flex items-center gap-2 pr-4 md:pr-0"
>
            <Image src={`/assets/${primary && !isMobile ? 'logo_01' : 'logo_02'}.png`} alt="Logo" width={30} height={30} className="object-contain" />
            <span className="logo_text">أمة اقرأ</span>
          </Link>
        </motion.div>

        <motion.div
          initial={!isMobile ? { opacity: 0, x: 20 } : {opacity: 1,  x: 0 }}
          animate={!isMobile ? { opacity: 1, x: 0 }: {}}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <ul className="hidden md:flex gap-6 space-x-3">
            {navLinks.map((link) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={link.path}
              >
                <Link href={link.path} className={`${pathname === link.path ? "text-white  border-b" : "text-white hover:text-opacity-50"}`}>
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="ml-4 md:hidden bg-white text-primary px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </motion.button>
        </motion.div>
      </div>
      {isMenuOpen && <MobileManu  primary={primary}  isOpen={isMenuOpen} />}
    </nav>
  );
};

export default Navbar;
