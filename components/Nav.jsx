"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from '@/constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import { auth } from '@/firebase';
import { Avatar, Menu, MenuItem } from '@mui/material';
import ProfileMenu from './ProfileMenu';

const Navbar = ({primary}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleSignOut = async () => {
    await auth.signOut(); 
    window.location.reload();
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); // Update the currentUser state when the authentication state changes
    });
    
    return () => {
      unsubscribe(); // Unsubscribe the listener when the component is unmounted
    };
  }, []);
  return (
    <nav className={`${primary ? "bg-primary" : "bg-gray-900"} py-4`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center p-2"
        >
          <Image src={`/assets/${primary ? 'logo_01' : 'logo_02'}.png`} alt="Logo" width={36} height={36} className="ml-2" />
          <span className="text-white text-xl font-bold xs:block hidden">أمة اقرأ</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <ul className="hidden lg:flex gap-6 space-x-3">
            {navLinks.map((link) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={link.path}
              >
                <Link href={link.path} className="text-white hover:text-gray-200">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          {!currentUser ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-4 bg-secondary text-white px-4 py-2 rounded"
            >
              <Link href="/auth"> تسجيل الدخول</Link>
            </motion.button>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative ml-4"
            >
              <Avatar
                src={currentUser?.photoURL}
                alt={currentUser?.displayName}
                sx={{ width: 50, height: 50, cursor: 'pointer' }}
                onClick={toggleProfileMenu}
              />
              {isProfileMenuOpen && (
                 <ProfileMenu isProfileMenuOpen={isProfileMenuOpen} toggleProfileMenu={toggleProfileMenu} handleSignOut={handleSignOut}/>
              )}
            </motion.div>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="ml-4 lg:hidden bg-white text-primary px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </motion.button>
        </motion.div>
      </div>
      {isMenuOpen && (
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${primary ? "bg-primary" : "bg-gray-900"} bg-gray-900 lg:hidden p-4`}>
          <ul className="flex flex-col gap-4 py-2">
            {navLinks.map((link) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={link.path}
              >
                <Link href={link.path} className="text-white hover:text-gray-200">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
