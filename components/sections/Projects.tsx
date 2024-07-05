import React from 'react';
import { Carousel, GlowingText } from '..';
import { FadeInComponent } from '../FadeInComponent';

export const Projects = () => {
  return (
    <div className="flex flex-col" id="projects">
      <section className="my-24">
        <article>
          <div className='flex justify-center'>
            <FadeInComponent>
            <GlowingText
              text="Projects"
              />
            </FadeInComponent>
          </div>
          <p className='text-lg md:text-xl mt-6'>
            {"Here are some of my projects and it's deployment, I mainly work with Full-Stack web applications, hope you find them interesting and feel free to explore them."}
          </p>
          <Carousel />
        </article>
      </section>
    </div>
  )
}
