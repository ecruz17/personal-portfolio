import React from 'react';
import { Carousel, GlowingText } from '..';
import { FadeInComponent } from '../FadeInComponent';

export const Projects = () => {
  return (
    <section className="flex flex-col pt-20" id="projects">
          <div className='flex justify-center'>
            <FadeInComponent>
            <GlowingText
              text="Projects"
              />
            </FadeInComponent>
          </div>
          <p className='text-lg md:text-xl mt-6'>
            {"Here are some of my Fullstack personal projects, hope you find them interesting,  feel free to explore them."}
          </p>
          <Carousel />
    </section>
  )
}
