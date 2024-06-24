"use client"
import { useRef } from "react";
import { MainBtn, Stack, Experience, GlowingText, GitHubProfile } from "@/components";

//TODO: Add flare to cursor

export default function Home() {

  const about = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mx-10 lg:mx-32">
      <div className="flex flex-col my-[35vh]" id="/">
        <div className="flex flex-col justify-center items-center">
          {/* Title */}
          <div className="flex flex-row justify-between">
            <code className="text-5xl md:text-7xl">
              <span className="text-blueSubtitle">ecruz</span>
              <span>dev</span>
            </code>
          </div>

          <div className="text-xl font-normal my-2">
            Ready to help you out!
          </div>
          <div className="flex flex-row mt-5 gap-2">
            <MainBtn
              text="DOWNLOAD CV"
              isSecondary={false}
              //TODO: Implement Download CV
              onClick={()=>{}}
            />
            <MainBtn
              text="ABOUT ME"
              isSecondary={true}
              onClick={() => {
                about.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      </div>

      < div className="flex flex-col items-center" ref={about} id="about" >
        <section className="my-[15vh]">
          <article>
            <div className="grid grid-cols-10 justify-center items-center gap-4 flex-wrap">
              <div className="col-span-10 sm:col-span-6">

                <GlowingText
                  text="About Me"
                />
                <p className="text-md lg:text-xl mt-10">
                  - Hi! I'm <strong className="text-blueSubtitle"> Emir Cruz Maldonado</strong>, a full time <u className="font-semibold"> Software Developer</u> specialized in Web and Mobile applications development, I've been coding since highschool but I started loving computers since I was a <strong>child.</strong> I've worked with experts in the field, from a startup of a logistics app to a company specialized in developing with the unfamous <strong className="bg-blueSecondary px-1 w-fit">AWS</strong>.
                </p>
              </div>
              <div className="col-span-10 sm:col-span-4 mt-10">
                <GitHubProfile />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="col-span-2 md:col-span-1 font-semibold text-2xl bg-blueBackground rounded-md p-6">
                SOFT SKILLS
                <ul className="text-lg font-medium">
                  - C2 English Level
                </ul>
                <ul className="text-lg font-medium">
                  - Collaboration
                </ul>
                <ul className="text-lg font-medium">
                  - Creative Thinking
                </ul>
                <ul className="text-lg font-medium">
                  - Attention to  <strong className="text-blueSubtitle">detail</strong>
                </ul>               
              </div>
              <div className="col-span-2 md:col-span-1 font-semibold text-2xl bg-blueBackground rounded-md p-6">
                INTERESTS
                <ul className="text-lg font-medium">
                  - Music Production & DJ
                </ul>
                <ul className="text-lg font-medium">
                  - Self learning
                </ul>
                <ul className="text-lg font-medium">
                  - Web & Mobile Development
                </ul>              
              </div>
            </div>          
            <div className="flex gap-2 justify-center items-center mt-6">
              <p className="text-sm md:text-xl lg:text-2xl">{`<HitMeUp>`}</p>
              <MainBtn text={"CONTACT ME"} onClick={() => {
                const element = document.getElementById("footer");
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} />
              <p className="text-sm md:text-xl lg:text-2xl">{`</HitMeUp>`}</p>
              </div>
          </article>
        </section>
      </div>

      <Experience />
      
      <Stack />
    </div>
  )
}
