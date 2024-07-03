import React from 'react';
import { Carousel, GlowingText } from '..';

export const Projects = () => {
  return (
    <div className="flex flex-col" id="projects">
      <section className="my-[12vh]">
        <article>
          <div className='flex justify-center'>
            <GlowingText
              text="Projects"
            />
          </div>
          <p className='text-lg md:text-xl mt-10'>
            {"Here are some of my projects and it's deployment, I mainly work with Full-Stack web applications, hope you find them interesting and feel free to explore them."}
          </p>
          <Carousel />
        </article>
      </section>
    </div>
  )
}
