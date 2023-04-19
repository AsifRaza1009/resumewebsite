import Image from 'next/image'
import React from 'react'



const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Next.js" },
    { skill: "Chakra UI" },
    { skill: "Tailwind CSS" },
    { skill: "Figma" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Specilization in Satistics" },
    { skill: "Good Knowladge of Mathematics" },
  ]

export default function about() {
  return (
    
   <section id="About">


      <div className="my-12 pb-12 md:pt-14 md:pb-30 px-4 md:px-8 text-white">
        <h1 className="text-center font-bold text-5xl animate-pulse text-red-700 hover:text-gray-400">
          About Me
          <hr className="w-8 h-1 mx-auto my-4 bg-red-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-20 px-15 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 ">
              Some thing to know about me!
              <hr className="w-10 h-1 mx-auto my-4 bg-red-800 border-0 rounded"></hr>
            </h1>
            <p>
              Hi, my name is Asif Raza and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> {" "}
              working experinces in {" "}
              <span className="font-bold text-red-500"> {"Banking"} </span>,
              <span className="font-bold text-red-500"> {"Real Estate"} </span>,
              <span className="font-bold text-red-500"> {"Software Development"} </span>,{" "}
              based in Sahiwal, Pakistan.
            </p>
            <br />
            <p>
              I Postgraduated from <span className="font-bold text-red-500"> {"Bahauddin Zakariya University, Multan"} </span> , Pakistan, in 2005
              with a specilisation in <span className="font-bold text-red-500"> {" Statistics "} </span> and have certification in 
              <span className="font-bold text-red-500"> {" Web 3.0 and Metaverse "} </span>. I have working experiences of more 
              then 18 years. (13 year working experience in Banking (Both in Pakistan and UAE) 5 year in  Working Experience Real Estate in Pakistan (Own Business)  ) 
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-red-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
               always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 ">
            <h1 className="text-2xl font-bold mb-6">
                My Skills
                <hr className="w-10 h-1 mx-auto my-4 bg-red-800 border-0 rounded"></hr>
                </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-teal-700 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                  >
                    {item.skill}
                    
                  </p>
                )
                
              })}
              
            </div>
             
          </div> 
        </div>
      </div>
      
            </section>
    
  )
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

