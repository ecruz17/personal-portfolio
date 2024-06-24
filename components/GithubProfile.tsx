"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { LuLoader2 } from 'react-icons/lu';

interface Profile {
  avatar_url: string;
  login: string;
  bio: string;
}

export const GitHubProfile = () => {
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    fetch('https://api.github.com/users/ecruz17')
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching GitHub profile:', error));
  }, []);

  if (!profile) {
    return <div className='flex items-center justify-center'><LuLoader2 className='animate-spin' size={35}/></div>;
  }

  return (
    <Link href={"https://github.com/ecruz17"} className='cursor-pointer'>
      <div className='bg-slate-50 text-blueBackground hover:shadow-md hover:brightness-110 p-4 rounded-md'>
      <div className='flex'>
        <Image
          src={profile.avatar_url}
          alt="GitHub Avatar"
          style={{ width: '100px', borderRadius: '50%' }}
          width={100}
          height={100}
        />  
          <FaGithub size={20} />
          <h2 className='text-sm font-light ml-2'>{profile.login}</h2>
        </div>
        <br />
      <p className='font-serif'>Check out my GitHub Profile here!</p>
      </div>
    </Link>
  );
};
