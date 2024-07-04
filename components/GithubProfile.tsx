"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

export const GitHubProfile = () => {
  return (
    <Link href={"https://github.com/ecruz17"} className='cursor-pointer'>
      <div className='bg-slate-50 text-blueBackground hover:shadow-md hover:brightness-110 p-4 rounded-md'>
      <div className='flex items-center  gap-2'>
        <Image
          src="https://avatars.githubusercontent.com/u/47923715?v=4"
          alt="GitHub Avatar"
          style={{ width: '100px', borderRadius: '50%' }}
          width={100}
          height={100}
        />  
          <FaGithub size={20} />
          <h2 className='text-sm font-light ml-2'>ecruz17</h2>
        </div>
        <br />
      <p className='font-serif'>Check out my GitHub Profile here!</p>
      </div>
    </Link>
  );
};
