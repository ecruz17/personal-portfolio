import React from 'react';
import { ExperienceCard, GlowingText } from '..';
import { FadeInComponent } from '../FadeInComponent';

const mxmart = [
'Developed AWS-based applications with Next.js, TypeScript, ReactQuery, and Tailwind CSS.',
  'Utilized AWS Sevices such as: Amplify, IAM, Cognito, Lambda, DynamoDB, SQS, and API Gateway.',
  'Used AWS CodeCommit and Git for version control.' ,
  'Engaged in continuous self-paced learning of AWS services to ensure proficiency and up-to-date skills.' ,
];

const freeway = [
  'Supported FreeWay app development processes.', 'Verified that software met requirements.', 'Collaborated on future projects and features.', 'Suggested a screen re - design that was implemented.', 'Found and fixed several validation bugs, increasing the app’s performance by 12 %'
]

export const Experience = () => {
  return (
    <div className="w-full my-16 pt-20" id="experience">
      <section>
        <article>
          <div className='py-10 flex flex-col items-center'>
            <FadeInComponent>
              <GlowingText
                text="Experience"
                textSize='text-5xl md:text-8xl'
              />
            </FadeInComponent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 overflow-x-hidden">
            <div className="col-span-1 md:col-span-2">
              <FadeInComponent>
                <ExperienceCard
                  company='MxMart Solutions'
                  charge='Front End Developer'
                  duration='Nov 2023 – Present'
                  description='Developed AWS-based applications for numerous clients with a modern tech stack for front-end and back-end, utilizing various AWS services and maintaining version control while continuously updating AWS skills through self-paced learning.'
                  keyPoints={mxmart}
                  logo='/mxmart_logo.png'
                  website='https://mxmartsolutions.com/'
                />
              </FadeInComponent>
            </div>

            <div className="col-span-1 md:col-start-2 md:col-span-2 overflow-x-hidden">
              <FadeInComponent direction='right'>
                <ExperienceCard
                  company='BrightCoders'
                  charge='React Native Mobile Developer'
                  duration='May 2023 – Sep 2023'
                  description='Developed mobile applications with technologies such as React Native with TypeScript, while implementing
              good practices, test-based development and tools for managing local and remote repositories as well as
              connection to APIs such as Firebase. In addition to developing fundamental skills in software development
              such as teamwork and effective communication using an agile methodology.'
                  logo='/brightcoders_logo.png'
                  website='https://www.brightcoders.com/'
                />
              </FadeInComponent>
            </div>

            <div className="col-span-1 md:col-span-2 overflow-x-hidden">
              <FadeInComponent>
                <ExperienceCard
                  company='Universidad de Colima'
                  charge='Full Stack Developer'
                  duration='Feb 2023 – May 2023 '
                  logo='/udc_logo.png'
                  description='Developed a comprehensive web application for a fictional hardware store using React.js for the front end,
designed from scratch in Figma. Created the backend with Node.js and a NoSQL database on MongoDB,
featuring validated login and encrypted passwords using the bcrypt algorithm, and supported multiple
profile management. Deployed the backend on Railway.app and the front end on GitHub Pages.'
                  website='https://github.com/ecruz17/la-ferreteria-app'
                />
              </FadeInComponent>
            </div>

            <div className="col-span-1 md:col-start-2 md:col-span-2 overflow-x-hidden">
              <FadeInComponent direction='right'>
                <ExperienceCard
                  company='FreeWay'
                  charge='Mobile Developer'
                  duration='Oct 2021 – Nov 2023'
                  description="Developed an hybrid Mobile Application for FreeWay's Logistics App with Flutter framework using Dart, Providers, External Libraries and consuming own APIs usign an integration with GraphQL in the project."
                  website='https://www.linkedin.com/company/freeway-mx/'
                  logo='/freeway_logo.jpeg'
                  keyPoints={freeway}
                />
              </FadeInComponent>
            </div>

            <div className="col-span-1 md:col-span-2 overflow-x-hidden">
              <FadeInComponent>
                <ExperienceCard
                  company='Universidad de Colima'
                  charge='Student'
                  duration='Expected to graduate in June 2024.'
                  description='Cursed the "Software Engineer" educational program for 4 years with the following objective: Develop projects and technological solutions for automation, data process management, and information generation through the use of various programming languages, environments, and software development methodologies, in accordance with the well-being and safety of society.'
                  logo='/udc_logo.png'
                  website='https://www.ucol.mx/estudia-udec/oferta-superior-licenciatura,191.htm'
                />
              </FadeInComponent>
            </div>
          </div>

        </article>
      </section>
    </div>
  )
}
