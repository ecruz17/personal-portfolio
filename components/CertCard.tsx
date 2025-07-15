import Image from "next/image";

interface Props {
  name: string;
  icon: string;
}

export const CertCard = ({ name, icon }: Props) => {
  return (
    <div className="flex flex-col justify-center py-2 hover:brightness-125 hover:scale-105 duration-75">
        <Image
          className="w-auto md:w-3/4 mx-auto"
          src={icon}
        alt={name + "icon"}
        width={500}
        height={500}
        />
        <p className="text-center font-semibold hidden md:block md:text-sm lg:text-base">{name}</p>
    </div>
  )
}