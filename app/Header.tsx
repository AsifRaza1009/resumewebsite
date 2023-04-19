import Image from 'next/image'
import React from 'react'
import piaic from '../public/piaiclogo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
export default function Header() {
  return (
    <div className='flex justify-between sm:px-15 py-2 px-10 items-center  '>

<div className='w-20 '>
    <h3 className='text-white text-xl font-semibold shrink-0'> Asif</h3>
</div>
<div>
    <ul className=' sm:flex space-x-11 items-center font-bold hidden text-white'>
        <li className='hover:text-red-500 hover:animate-pulse'> <a href='#/'>Home</a></li>
        <li className='hover:text-red-500 hover:animate-pulse'><a href='#About'>About</a></li>
        <li className='hover:text-red-500 hover:animate-pulse'><a href='#projects'>Projects</a> </li>
        <li className='hover:text-red-500 hover:animate-pulse'><a href='#contacts'>Contact</a></li>
        
           
    </ul>
    
</div>
<div className=' static md:hidden'>

<AiOutlineMenu / >
  </div>







    </div>
  )
}
