import Link from 'next/link';
import { BiLogoGithub, BiMailSend } from 'react-icons/bi';
import { BsHeartFill, BsLinkedin } from 'react-icons/bs';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className='mt-auto shadow-md bg-blueBackground text-center py-4 w-[115%] sm:w-full' id='footer'>
      <h2 className='text-2xl md:text-4xl font-bold'>CONTACT ME</h2>
      <div className='flex flex-col justify-center items-center'>
        <div className='relative flex justify-center items-center my-3 gap-14 md:gap-32'>
          <Link className="animate-pulse" target="_blank" href="https://www.linkedin.com/in/ecruzdev/" rel="noopener noreferrer">
            <BsLinkedin className='w-6 h-6 md:w-12 md:h-12' />
          </Link>
          <Link className="animate-pulse" target="_blank" href="https://github.com/ecruz17" rel="noopener noreferrer">
            <BiLogoGithub className='w-6 h-6 md:w-12 md:h-12' />
          </Link>
          <Link className="animate-pulse" target="_blank" href="mailto:emircruz.m@gmail.com" rel="noopener noreferrer">
            <BiMailSend className='w-6 h-6 md:w-12 md:h-12' />
          </Link>
        </div>
        <p className='flex gap-1 items-center text-sm md:text-base'>
          Developed with
          <BsHeartFill size={12} color='#9ad2f6' />
          by:
          <Link
            href="https://github.com/ecruz17"
            className='font-bold underline'
          >
            ecruzdev
          </Link>
        </p>
        <p className='text-sm md:text-base'>All rights reserved ©{year}</p>
      </div>
    </footer>
  )
}
