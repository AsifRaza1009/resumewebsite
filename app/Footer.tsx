import Image from "next/image";
import Link from "next/link";
import React from "react";
import piaic from "../public/piaiclogo.png";
export default function footer() {
  return (
    <section id='contacts'>
      <div className=' flex flex-col md:flex-row md:justify-around text-center text-white text-lg pb-4 mt-20 '>
        <div className='py-8  md:flex-col'>
          <h3 className='text-2xl font-semibold pb-4  hover:text-red-400'>PIAIC</h3>
          <Image src={piaic} alt='PIAIC' className="mx-auto
          " />
        </div>
        <div>
          <h2 className='text-2xl font-semibold pb-2 pt-4  hover:text-red-400'> Useful Links</h2>
          <ul className="md:text-left">

          <li className='hover:text-red-500 hover:animate-pulse'>
            <a href='#/'>Home</a>
          </li>
          <li className='hover:text-red-500 hover:animate-pulse'>
            <a href='#About'>About</a>
          </li>
          <li className='hover:text-red-500 hover:animate-pulse'>
            <a href='#projects'>Projects</a>{" "}
          </li>
          <li className='hover:text-red-500 hover:animate-pulse'>
            <a href='#contacts'>Contact</a>
          </li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-semibold pb-2 pt-4  hover:text-red-400'>Follow</h3>
          <ul className=" md:text-left ">

          <li className="hover:text-red-500 hover:animate-pulse" >
            {" "}
            <Link href=''>Facebook</Link>
          </li>
          <li className="hover:text-red-500 hover:animate-pulse">
            {" "}
            <Link href=''>YouTube</Link>
          </li>
          <li className="hover:text-red-500 hover:animate-pulse">
            {" "}
            <Link href=''>Linkdin</Link>
          </li>
          <li className="hover:text-red-500 hover:animate-pulse">
            {" "}
            <Link href=''>Twitter</Link>
          </li>
          <li className="hover:text-red-500 hover:animate-pulse">
            {" "}
            <Link href=''>Git</Link>
          </li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-semibold pb-2 pt-4 hover:text-red-400 '>Contact Detail</h3>
          <p className=" md:text-left">GT Road Sahiwal</p>
          <p className="md:text-left">+92 300 6903603</p>
          <Link href='https://mail.yahoo.com/d/compose' target="_blank" className="text-left">[Send a Mail to me]</Link>
        </div>
      </div>
    </section>
  );
}
