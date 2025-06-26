import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";

interface Props {
  title: string;
  website: string;
  img: string;
  description: string;
}

export const CarouselSlide = ({ title, website, img, description }: Props) => {
  return (
    <div className="keen-slider__slide flex flex-col justify-end h-[40vh] items-center bg-colorBgGreen shadow-md rounded-md" >
      <span className="hover:opacity-30" style={{ position: "relative", height: "100%", width: "100%" }}>
        <Image src={img} alt={title} fill style={{ objectFit: "cover", overflow: "clip" }} />
      </span>

      <aside className="flex flex-col justify-center items-center h-[100px] gap-2 p-4">
        <p className="text-xs md:text-small text-justify overflow-hidden max-h-10">{description}</p>
        <Link
          className='hover:underline bg-blueSecondary px-2 rounded-md flex'
          target="_blank" href={website} rel="noopener noreferrer">
          Test<span className="hidden sm:block"> - {title}</span>
        </Link>
      </aside>
      </div>
  )
}