interface Props {
  text: string;
  textSize?: string
}

export const GlowingText = ({ text, textSize }: Props) => {
  return (
    <div className="-z-30 relative">
      <span className={`uppercase absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-blueSubtitle via-greenTitles to-blueSecondary bg-clip-text ${textSize ? `${textSize}` : 'text-5xl sm:text-6xl lg:text-7xl'} box-content font-extrabold text-transparent select-none`}>
        {text}
      </span>
      <h1
        className={`uppercase relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-blueSubtitle via-greenTitles to-blueSecondary bg-clip-text ${textSize ? `${textSize}` : 'text-5xl sm:text-6xl lg:text-7xl'} font-extrabold text-transparent select-auto`}>
        {text}
      </h1>
    </div>
  )
}
