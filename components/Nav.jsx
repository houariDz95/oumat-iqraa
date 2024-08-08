"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import dynamic from 'next/dynamic';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
const MobileManu = dynamic(() => import('./MobileManu'))

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={"py-4 bg-primary"}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div
        >
          <Link href="/"  className="flex items-center gap-2 pr-4 md:pr-0"
>
            <Image src={`/assets/logo.svg`} alt="Logo" width={30} height={30} className="object-contain" />
            <span className="text-white text-xl">أمة اقرأ</span>
          </Link>
        </div>

        <div
          className="flex items-center"
        >
          <ul className="hidden md:flex gap-6 space-x-3">
            {navLinks.map((link) => (
              <li
                key={link.path}
              >
                <Link href={link.path} className={`${pathname === link.path || pathname.startsWith(link.path.length > 1 && link.path) ? "text-white  bg-white/50 px-2 py-1 rounded-md" : "text-white hover:text-opacity-50"}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            variant="outlined"
            size="icon"
            className="block lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <AiOutlineClose size={24} className='text-white'/> : <AiOutlineMenu size={24} className='text-white'/>}
          </Button>
        </div>
      </div>
      {isMenuOpen && <MobileManu  steIsOpen={setIsMenuOpen} isOpen={isMenuOpen} />}
    </nav>
  );
};

export default Navbar;
