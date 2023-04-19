

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Panaverse DAO Website",
    description:
      "Panaverse DAO is a website in which all kind of te detail about the Panaverse company under which a comprehensive Educational, Professional Training and Humain Development program are under process .",
    image: "/logo4.png",
    github: "https://github.com/AsifRaza1009/panaverse-website",
    link: "https://vercel.com/asifraza1009/website2",
  },
  {
    name: "ToDo App",
    description: "ToDo project is a to do list app that built using the Next.js and Chakra",
    image: "/todo.png",
    github: "https://github.com/AsifRaza1009/ToDo-App",
    link: "https://vercel.com/asifraza1009/todoapp",
  },
  {
    name: "Pricing UI Page ",
    description:
      "Simple page of UI by using design of Figma on Next.js Frame work .",
    image: "/pricing.png",
    github: "https://github.com/AsifRaza1009/pricingUI",
    link: "https://vercel.com/asifraza1009/pricinguichakra",
  },
  {
    name: "ATM Machine Project ",
    description:
      "Built a ATM project using Node.js and TS .",
    image: "/ATM.jpg",
    github: "https://github.com/AsifRaza1009/asif-atm",
    link: "https://github.com/AsifRaza1009/asif-atm",
  },
  {
    name: "Number Guessing Game ",
    description:
      "Built a Number Guess project using Node.js and TS .",
    image: "/number.jpg",
    github: "https://github.com/AsifRaza1009/asif-number-guessing",
    link: "https://github.com/AsifRaza1009/asif-number-guessing",
    
  },
  {
    name: "Word Counter ",
    description:
      "Built a Word Counter project using Node.js and TS .",
    image: "/word-counter.jpg",
    github: "https://github.com/AsifRaza1009/asif-word-counter",
    link: "https://github.com/AsifRaza1009/asif-word-counter",
  },
  {
    name: "Currrency Converter ",
    description:
      "Built a Currency Converter project using Node.js and TS .",
    image: "/currency.jpg",
    github:"https://github.com/AsifRaza1009/asif-currency-converter",
    link: "https://github.com/AsifRaza1009/asif-currency-converter",
  },
  
]

export default function Project() {
  return (
    <>
<section id="projects">
<div className="">

      <h1 className="text-center font-bold text-5xl text-red-700 animate-pulse hover:text-gray-500">
        Projects
        <hr className="w-16 h-1 mx-auto my-6 bg-red-700 border-0 rounded"></hr>
      </h1>
</div>

      <div className="flex flex-col space-y-20 px-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              
                <div className="flex flex-col md:flex-row md:space-x-20">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-2xl shadow-2xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2 shadow-2xl pl-10 ">
                    <h1 className="text-4xl font-bold mb-6 text-white animate-pulse hover:text-red-400">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-white">
                      {project.description}
                    </p>
                    <div className="flex flex-row text-purple-700 align-bottom space-x-4 pb-3">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              
            </div>
          )
        })}
        
      </div>
    </section>    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
