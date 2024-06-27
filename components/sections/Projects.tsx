import React from 'react';
import { Carousel, GlowingText } from '..';

export const Projects = () => {
  return (
    <div className="flex flex-col" id="projects">
      <section className="my-[30vh]">
        <article>
          <GlowingText
            text="Projects"
          />
        
            <Carousel />
        </article>
      </section>
    </div>
  )
}
