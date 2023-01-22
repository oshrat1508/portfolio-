import React from "react";
import {FaLinkedin , FaAddressCard ,FaGithubSquare} from 'react-icons/fa'
import { useState } from "react";  
import photo1 from '../assent/osh.jpg'

export default function Home() {


  return (
    <section   name='home' className={` h- md:h-[90vh]  flex flex-col md:flex-row md:items-center `}>
      <div className=" md:w-[45%]  w-full p-1 md:ml-32 md:mr-44 my-20">
    <h6 className="text-fuchsia-800 font-bold">welcome to my potfolio</h6>
    <h1 className="md:text-5xl text-3xl p-2 md:my-14 ">Hey I'm <span className="text-[#673964] ">oshrat</span>  . I'm full stack <br />  web developer</h1>
    <div className="flex text-2xl w-36 justify-around  mb-10"> <FaLinkedin className="cursor-pointer"/> <FaAddressCard className="cursor-pointer"/> <FaGithubSquare />  </div>
   </div>
   <div className="md:h-[55%] md:w-72 w-48 h-[40%]  border-4 border-fuchsia-800 md:right-52 right-36 top-[360px] md:top-28 rounded-md absolute "></div>
   <div className="md:h-[55%] md:w-72 w-48 h-[40%]  border-4 border-[#673964] md:right-40 right-10 top-[310px] md:top-40 rounded-md absolute"></div>
   <img className='h-[60%] rounded-md md:w-72 w-48 z-10 self-center md:self-auto' src={photo1} alt="" />
    </section>
  );
}
