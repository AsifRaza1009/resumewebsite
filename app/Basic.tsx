import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowDown  } from 'react-icons/hi';

export default function Basic() {
  return (
    <>
    <section id='/' >
 
    <div className=" bg-[url('/bgimg.jpg')] flex flex-col text-center text-white items-center justify-center px-20 py-2 sm:py-32 md:py-20 md:flex-row space-x-4 md:text-left">
        <div className="md:w-1/2">
          <Image
            src="/asif.png"
            alt=" Asif Raza"
            width={350}
            height={350}
            
            className="drop-shadow-2xl rounded-full"
            />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m <span className='animate-pulse text-red-700 hover:text-gray-400'>Asif Raza</span></h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Developer{" "}
            </span>
            based in Sahiwal,Pakistan. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <a href='#projects'  className="text-neutral-400 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:text-red-600"
            
            >
            Projects
          </a> 
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
      <Link href=''  className="text-blue-300 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700  "
            
            >
           <HiArrowDown size={35}  className='animate-pulse' />
          </Link>
        
      </div>  
    
              </section>
              
        </>
    
  )
}
