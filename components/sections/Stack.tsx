import React from 'react';
import { GlowingText, StackCard } from '..';
import { FadeInComponent } from '../FadeInComponent';

const frontend = [
  {
    name: "HTML5",
    icon: "https://img.icons8.com/color/480/html-5--v1.png"
  },
  {
    name: "CSS3",
    icon: "https://img.icons8.com/color/480/css3.png"
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/fluency/240/javascript.png"
  },
  {
    name: "React.js & Native",
    icon: "https://img.icons8.com/color/480/react-native.png"
  },
  {
    name: "NextJS",
    icon: "https://img.icons8.com/fluency/240/nextjs.png"
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/480/typescript.png"
  },
  {
    name: "TailwindCSS",
    icon: "https://img.icons8.com/color/480/tailwindcss.png"
  },
  {
    name: "Sass",
    icon: "https://img.icons8.com/color/480/sass.png"
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/bootstrap--v2.png"
  },
  {
    name: "Flutter",
    icon: "https://img.icons8.com/color/480/flutter.png"
  },
  {
    name: "Dart",
    icon: "https://img.icons8.com/color/480/dart.png"
  },
  {
    name: "Figma",
    icon: "https://img.icons8.com/color/480/figma--v1.png"
  },
];

const backend = [
  {
    name: "Node.js",
    icon: "https://img.icons8.com/fluency/240/node-js.png"
  },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/ios/250/express-js.png"
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/color/480/firebase.png"
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/480/mongodb.png"
  },
  {
    name: "MySQL",
    icon: "https://img.icons8.com/fluency/240/mysql-logo.png"
  },
  {
    name: "PostgreSQL",
    icon: "https://img.icons8.com/color/480/postgreesql.png"
  },
  {
    name: "GraphQL",
    icon: "https://img.icons8.com/color/480/graphql.png"
  },
  {
    name: "Postman",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
  },
];

const others = [
  {
    name: "AWS",
    icon: "https://img.icons8.com/color/480/amazon-web-services.png"
  },
  {
    name: "Docker",
    icon: "https://img.icons8.com/fluency/240/docker.png"
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/color/480/git.png"
  },
  {
    name: "Linux",
    icon: "https://img.icons8.com/color/96/linux--v1.png"
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/480/python--v1.png"
  },
];

export const Stack = () => {
  return (
    <div className="w-full my-40 pt-24" id='stack'>
      <section>
        <article>
          <FadeInComponent>
          <GlowingText
            text="Tech Stack"
            />
          </FadeInComponent>
          {/* FRONTEND */}
          <div className='flex justify-start items-center gap-2 mt-10'>
            <span className='h-1 bg-white w-6 rounded-sm' />
            <p className='text-3xl my-4 font-bold'>Front End</p>
          </div>
          <div className='grid grid-cols-4 lg:grid-cols-7 gap-4'>
            {
              frontend.map((item, index) => (
                <StackCard
                  key={index}
                  name={item.name} icon={item.icon}
                />
              ))
            }
          </div>
          {/* BACKEND */}
          <div className='flex justify-start items-center gap-2 mt-10'>
            <span className='h-1 bg-white w-6 rounded-sm' />
            <p className='text-3xl my-4 font-bold'>Back End</p>
          </div>
          <div className='grid grid-cols-4 lg:grid-cols-7 gap-4'>
            {
              backend.map((item, index) => (
                <StackCard
                  key={index}
                  name={item.name} icon={item.icon}
                />
              ))
            }
          </div>
          {/* EXTRAS */}
          <div className='flex justify-start items-center gap-2 mt-10'>
            <span className='h-1 bg-white w-6 rounded-sm' />
            <p className='text-3xl my-4 font-bold'>Others</p>
          </div>
          <div className='grid grid-cols-4 lg:grid-cols-7 gap-4'>
            {
              others.map((item, index) => (
                <StackCard
                  key={index}
                  name={item.name} icon={item.icon}
                />
              ))
            }
          </div>
        </article>
      </section>
    </div>
  )
}
