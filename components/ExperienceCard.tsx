import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  company: string;
  charge: string;
  duration: string;
  description: string;
  keyPoints?: string[];
  color?: string;
  logo: string;
  website: string;
}

export const ExperienceCard = ({ company, charge, duration, keyPoints, description, color, logo, website }: Props) => {
  return (
    <div className={`flex justify-start items-start text-justify w-full rounded-lg bg-blueBackground p-6 text-white hover:brightness-125 transition-105 duration-150`}>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col justify-center mb-4'>
          <span
          className={`${color ? `text-${color}` : 'text-white'} text-2xl font-bold`}>
            {company}
          </span>
          <span className='font-mono text-lg col-span-1'>{ charge }</span>
          <span className='text-xl col-span-1'>{duration}</span>
        </div>

        <div className='flex justify-end items-center'>
          <Image src={logo} alt="Company_Logo" className='rounded-lg' width={200} height={200}/>
        </div>
        
        <div className='col-span-2'>

        <p className='text-sm md:text-lg mb-4'>{description}</p>
          {
          keyPoints?.map((point, index) => (
            <div
              key={index}
              className='flex items-baseline gap-2 text-sm md:text-baseline mt-2'>
              <div className='w-2 h-2 rounded-full bg-white'></div>
              <ul key={index}>
                {point}
              </ul>
            </div>
            ))
          }          
        </div>
      
        <Link
          className='col-span-2 flex justify-center items-center text-lg font-bold p-2 mx-0 md:mx-[20%] my-2 rounded-lg bg-blueSubtitle text-blueBackground hover:brightness-110 transition-105 duration-150'
          target="_blank" href={website} rel="noopener noreferrer">
          VISIT WEBSITE
        </Link>
      </div>
    </div>
  )
}
