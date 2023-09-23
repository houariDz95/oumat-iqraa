"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useMediaQuery } from "@react-hook/media-query";

import dynamic from 'next/dynamic';
const MobileManu = dynamic(() => import('./MobileManu'))

const Navbar = ({primary}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const pathname = usePathname()
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className={`${primary ? "bg-gray-900 md:bg-primary" : "bg-gray-900"} py-4 `}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div
        >
          <Link href="/"  className="flex items-center gap-2 pr-4 md:pr-0"
>
            <Image src={`/assets/${primary && !isMobile ? 'logo_01' : 'logo_02'}.png`} alt="Logo" width={30} height={30} className="object-contain" />
            <span className="logo_text">أمة اقرأ</span>
          </Link>
        </div>

        <div
          className="flex items-center"
        >
          <ul className="hidden md:flex gap-6 space-x-3">
            {navLinks.map((link) => (
              <li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={link.path}
              >
                <Link href={link.path} className={`${pathname === link.path ? "text-white  border-b" : "text-white hover:text-opacity-50"}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="ml-4 md:hidden bg-white text-primary px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
      {isMenuOpen && <MobileManu  primary={primary}  isOpen={isMenuOpen} />}
    </nav>
  );
};

export default Navbar;
