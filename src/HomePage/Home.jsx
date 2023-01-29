import React from "react";
import {FaLinkedin ,FaArrowUp, FaAddressCard ,FaGithubSquare} from 'react-icons/fa'
import { useState } from "react";  
import photo1 from '../assent/osh.jpg'
import resume from '../assent/oshratbalay-resume.pdf'
export default function Home() {


  return (
    <section   name='home' className={` h- md:h-[90vh]  flex flex-col md:flex-row md:items-center `}>
      <div className=" md:w-[45%]  w-full p-1 md:ml-32 md:mr-44 my-20">
    <h6 className="text-fuchsia-800 font-bold">welcome to my potfolio</h6>
    <h1 className="md:text-5xl text-3xl p-2 md:my-14 ">Hey I'm <span className="text-[#673964] ">oshrat</span>  . I'm full stack <br />  web developer</h1>
    <div className="flex text-2xl w-36 justify-around  mb-10"><a href="http://tiny.cc/oshrat-linkedin" target={"_blank"}><FaLinkedin className="cursor-pointer"/></a><a href={resume} download>  <FaAddressCard className="cursor-pointer"/></a><a href="https://github.com/oshrat1508" target={"_blank"}> <FaGithubSquare /> </a> </div>
    <div className="animate-bounce flex flex-col items-center w-36"><FaArrowUp className=" text-fuchsia-900"/>
   <span className="font-bold text-xs mt-2">download my resume</span> </div>
   </div>
   <div className="md:h-[55%] md:w-72 w-48 h-64  border-4 border-fuchsia-800 md:right-52 right-36 top-[420px] md:top-28 rounded-md absolute "></div>
   <div className="md:h-[55%] md:w-72 w-48 h-64  border-4 border-[#673964] md:right-40 right-16 top-[370px] md:top-40 rounded-md absolute"></div>
   <img className='h-[60%] rounded-md md:w-72 w-48 z-10 self-center md:self-auto' src={photo1} alt="" />
    </section>
  );
}

