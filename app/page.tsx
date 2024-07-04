"use client";

import { useRef } from "react";
import { MainBtn, Stack, Experience, GlowingText, GitHubProfile } from "@/components";
import { Projects } from "@/components/sections/Projects";
import Link from "next/link";
import { FadeInComponent } from '../components/FadeInComponent';

export default function Home() {
  const about = useRef<HTMLDivElement | null>(null);

  return (

    <div className="mx-10 lg:mx-32">
      <div className="flex flex-col my-[30vh] pb-[30vh]" id="/">

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between">
            <code className="text-5xl md:text-7xl shadow-lg">
              <span className="text-blueSubtitle absolute blur-lg shadow-lg animate-pulse">ecruz</span>
              <span className="text-blueSubtitle">ecruz</span>
              <span className="blur-lg absolute animate-pulse">dev</span>
              <span>dev</span>
            </code>
          </div>
          <div className="text-xl font-normal my-2">Ready to help you out!</div>
          <div className="flex flex-row mt-5 gap-2">
            <Link href="./ecruz_cv.pdf" download passHref>
              <MainBtn text="DOWNLOAD CV" isSecondary={false} onClick={() => { }} />
            </Link>
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

      <div ref={about} id="about">
        <section className="my-[30vh] pt-[10vh]">
          <div className="grid grid-cols-10 justify-center items-center gap-4 flex-wrap" >
            <div className="col-span-10 sm:col-span-6">
              <FadeInComponent>
                <GlowingText text="About Me" />
              </FadeInComponent>
              <p className="text-md lg:text-xl mt-10">
                Hi! I&apos;m <strong className="text-blueSubtitle">Emir Cruz Maldonado</strong>, a dedicated <u className="font-semibold">Software Developer</u> specializing in Web and Mobile application development. My journey in coding began in high school, but my passion for computers has been a part of me since childhood. I&apos;ve had the opportunity to collaborate with industry experts, contributing to projects ranging from a startup logistics app to a company renowned for its work with <strong className="bg-blueSecondary px-1 w-fit">AWS</strong>.
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
                  - C1 English Level
                </ul>
                <ul className="text-lg font-medium">
                  - Collaboration
                </ul>
                <ul className="text-lg font-medium">
                  - Creative Thinking
                </ul>
                <ul className="text-lg font-medium">
                  - Attention to <strong className="text-blueSubtitle">detail</strong>
                </ul>
              </div>
            </FadeInComponent>

            <FadeInComponent direction="right">
              <div className="col-span-1 md:col-span-2 font-semibold text-2xl bg-blueBackground rounded-md p-6">
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
                <ul className="text-lg font-medium">
                  - Latest Tech News
                </ul>
              </div>
            </FadeInComponent>
          </div>


          <div className="flex justify-center gap-2 items-center mt-6">
            <FadeInComponent>
              <p className="text-sm md:text-xl lg:text-2xl">{`<HitMeUp>`}</p>
            </FadeInComponent>
            <MainBtn
              text="CONTACT ME"
              onClick={() => {
                const element = document.getElementById("footer");
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
            <FadeInComponent direction="right">
              <p className="text-sm md:text-xl lg:text-2xl">{`</HitMeUp>`}</p>
            </FadeInComponent>
          </div>
        </section>
      </div>

      <Experience />
      <Projects />
      <Stack />
    </div>
  );
}
