import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  isSecondary?: boolean;
}

export const MainBtn = ({ text, onClick, isSecondary}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`font-bold text-sm md:text-lg py-2 px-4 rounded 
      ${isSecondary ? "bg-[#547D98]" : "bg-blueSubtitle"} 
      ${isSecondary ? "hover:brightness-125" : "hover:brightness-125"}     
      hover:shadow-md duration-150 text-[#1E2020]`}
      >
      {text}
    </button>
  );
};
