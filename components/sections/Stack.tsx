import React from 'react';
import { GlowingText } from '..';

export const Stack = () => {
  return (
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
  )
}
