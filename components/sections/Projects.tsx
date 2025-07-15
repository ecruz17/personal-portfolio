import React from 'react';
import { Carousel, GlowingText } from '..';
import { FadeInComponent } from '../FadeInComponent';

export const Projects = () => {
  return (
    <section className="pt-20 h-[100vh]" id="projects">
          <div>
            <FadeInComponent>
            <GlowingText
            text="Projects"
            textSize='text-5xl md:text-8xl'
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
