"use client";

import { useRef } from "react";
import { MainBtn, Stack, Experience, GlowingText, GitHubProfile } from "@/components";
import { Projects } from "@/components/sections/Projects";
import Link from "next/link";
import { FadeInComponent } from '../components/FadeInComponent';
import { About } from "@/components/sections/About";

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
                window.scrollTo({ top: 900, behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      </div>

      <About about={about} id="about"/>
      <Experience />
      <Projects />
      <Stack />
    </div>
  );
}
