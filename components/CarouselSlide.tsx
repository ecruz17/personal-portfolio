import Link from "next/link";

interface Props {
  title: string;
  website: string;
}

export const CarouselSlide = ({ title, website }: Props) => {
  return (
    <div className="keen-slider__slide flex flex-col justify-center items-center bg-blueSecondary rounded-md">
      <p className="text-2xl">{title}</p>
      <Link
        className='col-span-2 flex justify-center items-center text-lg font-bold p-2 mx-0 md:mx-[20%] my-2 rounded-lg bg-blueSubtitle text-blueBackground hover:brightness-110 transition-105 duration-150'
        target="_blank" href={website} rel="noopener noreferrer">
        TEST
      </Link>
    </div>
  )
}