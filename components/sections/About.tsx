import { HTMLAttributes } from "react";
import { FadeInComponent } from "../FadeInComponent";
import { GitHubProfile } from "../GithubProfile";
import { GlowingText } from "../GlowingText";
import { MainBtn } from "../MainBtn";

interface Props {
  about: React.RefObject<HTMLDivElement>;
  id: string | undefined;
}

export const About = ({ about, id }: Props) => {
  return (
    <div className="w-full my-44 pt-20" id={id}>
      <section>
        <article>
          <div className="grid grid-cols-10 justify-center items-center" >
            <div className="col-span-10 sm:col-span-6">
              <FadeInComponent>
                <GlowingText text="About Me" />
              </FadeInComponent>
              <p className="text-md lg:text-xl mt-10">
                Hi! I&apos;m <strong className="text-blueSubtitle">Emir Cruz Maldonado</strong>, a dedicated <u className="font-semibold">Software Developer</u> specialized in Full-Stack Web and Mobile development. My journey began at high school, but my passion for computers has been a part of me since my childhood. I&apos;ve had the opportunity to collaborate with industry experts, contributing to projects ranging from a startup logistics app to a company renowned for its <strong className="bg-blueSecondary px-1">Multicloud</strong> works.
              </p>
            </div>
            <div className="col-span-10 sm:col-span-4 mt-10">
              <GitHubProfile />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 overflow-x-hidden">
            <FadeInComponent>
              <div className="col-span-1 md:col-span-2 font-semibold text-2xl bg-blueBackground rounded-md p-6">
                SOFT SKILLS
                <ul className="text-lg font-medium">
                  • C1 English Level
                </ul>
                <ul className="text-lg font-medium">
                  • Collaboration
                </ul>
                <ul className="text-lg font-medium">
                  • Creative Thinking
                </ul>
                <ul className="text-lg font-medium">
                  • Attention to <strong className="text-blueSubtitle">detail</strong>
                </ul>
              </div>
            </FadeInComponent>

            <FadeInComponent direction="right">
              <div className="col-span-1 md:col-span-2 font-semibold text-2xl bg-blueBackground rounded-md p-6">
                INTERESTS
                <ul className="text-lg font-medium">
                  • Self learning
                </ul>
                <ul className="text-lg font-medium">
                  • Full-Stack Web & Mobile Development
                </ul>
                <ul className="text-lg font-medium">
                  • Up-to-date Tech News
                </ul>
                <ul className="text-lg font-medium">
                  • AI
                </ul>
              </div>
            </FadeInComponent>
          </div>


          <div className="flex items-center justify-center mt-6 space-x-4 overflow-x-hidden w-full">
              <p className="text-sm md:text-xl lg:text-2xl">{`<HitMeUp>`}</p>
            <MainBtn
              text="CONTACT ME"
              onClick={() => {
                const element = document.getElementById("footer");
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
              <p className="text-sm md:text-xl lg:text-2xl">{`</HitMeUp>`}</p>
          </div>


        </article>
      </section>
    </div>

    // <div ref={about} id="about">
    //   <section className="my-[30vh] pt-[10vh]">
        
    //   </section>
    // </div>
  )
}