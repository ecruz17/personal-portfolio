import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  website: string;
  img: string;
  description: string;
}

export const CarouselSlide = ({ title, website, img, description }: Props) => {
  const [truncatedDescription, setTruncatedDescription] = useState(description);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setTruncatedDescription(description.substring(0, 15) + (description.length > 20 ? '...' : ''));
      } else {
        setTruncatedDescription(description);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [description]);

  return (
    <div className="keen-slider__slide flex flex-col justify-end h-[20vh] md:h-[30vw] lg:h-[28vw] items-center bg-blueSecondary shadow-md rounded-md">
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="absolute mb-6 z-30 flex flex-col text-justify items-center px-[20%]">
        <p className="mb-4 text-sm md:text-base text-justify">{truncatedDescription}</p>
        <p className="text-sm md:text-xl lg:text-2xl px-2 text-center">{title}</p>
        <Link
          className='flex justify-center items-center text-sm md:text-lg font-bold px-2 md:px-4 md:p-2 mx-[20%] my-2 rounded-md bg-blueSubtitle text-blueBackground hover:brightness-110 transition-105 duration-150'
          target="_blank" href={website} rel="noopener noreferrer">
          TEST
        </Link>
      </div>
      <span className="absolute bg-gradient-to-t from-blueBackground to-transparent h-full w-full"/>
    </div>
  )
}