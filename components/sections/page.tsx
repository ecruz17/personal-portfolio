"use client"
import { useRef } from "react";
import { GlowingText } from "@/components/GlowingText";
import { About, MainBtn } from "@/components";
import { Experience } from "@/components/sections/Experience";

//TODO: Add flare to cursor

export default function Home() {

  const about = useRef<HTMLDivElement | null>(null);

  return (
    <>
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

      <About
        ref={about}
      />

      <Experience/>

      {/* Centered section */}
      <div className="flex flex-col items-center" id="stack">
        <section className="my-[50vh] mx-10">
          <article>
            <GlowingText
              text="Tech Stack"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aperiam nesciunt voluptatibus eius voluptates, optio dolores odio quasi voluptatem ad culpa exercitationem quisquam praesentium? Consequuntur saepe ullam quibusdam possimus architecto!
            </p>
          </article>
        </section>
      </div>
    </>
  )
}
