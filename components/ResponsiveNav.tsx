"use client";

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 2, text: 'About Me', path: 'about' },
    { id: 3, text: 'Experience', path: 'experience' },
    { id: 4, text: 'Projects', path: 'projects' },
    { id: 5, text: 'Stack', path: 'stack' },
    { id: 6, text: 'Contact', path: 'footer' },
  ];

  return (
    <div className='fixed z-30 bg-blueBackground flex justify-between items-center w-screen px-4 h-14 font-semibold shadow-md'>
      <code
        id='home'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <h2 className='text-2xl font-medium text-blueSubtitle flex items-center cursor-pointer hover:scale-110 duration-75'>
          ecruz<p className='text-white'>dev</p>
        </h2>
      </code>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 m-2 cursor-pointer uppercase hover:text-blueSubtitle duration-100'
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

      <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={`fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-blueBackground ease-in-out duration-500 z-30 transform ${nav ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
          <code
            id='home'
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          >
            <h2 className='py-3 px-4 text-2xl font-medium text-blueSubtitle flex items-center cursor-pointer hover:scale-110 duration-75'>
              ecruz<p className='text-white'>dev</p>
            </h2>
          </code>

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 uppercase border-b border-gray-600 cursor-pointer hover:bg-colorLightGreen hover:text-blueSubtitle duration-100'
            onClick={() => {
              const element = document.getElementById(item.path);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              setNav(false);
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
