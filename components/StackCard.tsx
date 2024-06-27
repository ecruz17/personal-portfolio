import Image from "next/image";

interface Props {
  name: string;
  icon: string;
}

export const StackCard = ({ name, icon }: Props) => {
  return (
    <div className="flex flex-col justify-center bg-slate-700 shadow-md rounded-lg py-2 hover:brightness-125 hover:scale-105 duration-75">
        <Image
          className="w-3/4 mx-auto"
          width={300}
          height={300}
          src={icon}
          alt={name + "icon"}
        />
        <p className="text-center font-semibold hidden md:block md:text-sm lg:text-base">{name}</p>
    </div>
  )
}