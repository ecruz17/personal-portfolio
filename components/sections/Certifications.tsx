import { CertCard } from "../CertCard";
import { FadeInComponent } from "../FadeInComponent";
import { GlowingText } from "../GlowingText";

const aws = [
  {
    name: "Cloud Practitioner",
    icon: "https://images.credly.com/size/600x600/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
  },
  {
    name: "AI Practitioner",
    icon: "https://images.credly.com/size/600x600/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png"
  },
  {
    name: "Solutions Architect - Associate",
    icon: "https://images.credly.com/size/600x600/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    name: "Developer - Associate",
    icon: "https://images.credly.com/size/600x600/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
  },
];

const azure = [
  {
    name: "Azure AI Engineer - Associate",
    icon: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1604427253/image13260559831400607304.png"
  },
]

export default function Certifications() {
  return (
    <div id="certifications" className="w-full pt-14 ">
      <div className='mt-10'>
        <FadeInComponent>
          <GlowingText
            text="Certifications"
            textSize='text-5xl md:text-8xl'
          />
        </FadeInComponent>
      </div>
      <div className='flex justify-start items-center gap-2 mt-10'>
        <p className='text-2xl md:text-6xl my-4 font-bold'>AWS</p>
      </div>
      <div className='grid grid-cols-4 lg:grid-cols-3 px-10 md:px-32 gap-2'>
        {
          aws.map((item, index) => (
            <CertCard
              key={index}
              name={item.name} icon={item.icon}
            />
          ))
        }
      </div>
      <div className='flex justify-start items-center gap-2 mt-10'>
        <p className='text-2xl md:text-6xl my-4 font-bold'>Azure</p>
      </div>
      <div className='grid grid-cols-4 lg:grid-cols-3 px-10 md:px-32 gap-2'>
        {
          azure.map((item, index) => (
            <CertCard
              key={index}
              name={item.name} icon={item.icon}
            />
          ))
        }
      </div>
    </div>
  )
}