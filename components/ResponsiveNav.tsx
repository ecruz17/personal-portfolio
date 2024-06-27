"use client"

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 2, text: 'About Me', path: 'about'},
    { id: 3, text: 'Experience', path: 'experience'},
    { id: 4, text: 'Projects', path: 'projects'},
    { id: 5, text: 'Stack', path: 'stack'},
    { id: 6, text: 'Contact', path: 'footer'}
  ];

  return (
    <div className='fixed z-30 bg-blueBackground flex justify-between items-center w-full mx-auto px-4 h-14 font-semibold shadow-md'>
      {/* Logo */}

      <code
        id='home'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
          <h2
            className='w-full text-2xl font-medium text-blueSubtitle items-center flex flex-row hover:scale-110 duration-75 cursor-pointer'
          >
            ecruz<p className='text-white'>dev</p>
          </h2>
        </code>
      
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:text-blueSubtitle m-2 cursor-pointer duration-100 uppercase'
            onClick={() => {
              const element = document.getElementById(item.path);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
              {item.text}
          </li>
        ))}       
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-blueBackground ease-in-out duration-500 z-30'
            : 'ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%] z-30'
        }
      >
        {/* Mobile Logo */}
        <a href="/" className='p-2'>
          <code>
            <h2 className='w-full text-2xl font-medium text-blueSubtitle items-center flex flex-row hover:scale-110 duration-75'>
              ecruz<p className='text-white'>dev</p>
            </h2>
          </code>
        </a>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 uppercase border-b hover:bg-colorLightGreen duration-100 hover:text-blueSubtitle cursor-pointer border-gray-600'
            onClick={() => {
              const element = document.getElementById(item.path);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            
              {item.text}
            
          </li>       
        ))}
      </ul>
    </div>
  );
};

export default Navbar;