import React from "react";
import {FaLinkedin , FaAddressCard ,FaGithubSquare} from 'react-icons/fa'
import { useState } from "react";  
import photo1 from '../assent/osh.jpg'

export default function Home() {


  return (
    <section   name='home' className={`  h-[90vh] flex items-center  ml-36`}>
      <div className="mr-56">
    <h6 className="text-fuchsia-800 font-bold">welcome to my potfolio</h6>
    <h1 className="text-5xl my-14 ">Hey I'm <span className="text-[#673964] ">oshrat</span>  . I'm full stack <br />  web developer</h1>
    <div className="flex text-2xl w-36 justify-around"> <FaLinkedin className="cursor-pointer"/> <FaAddressCard className="cursor-pointer"/> <FaGithubSquare />  </div>
   </div>
   <div className="h-[55%] w-72 border-4 border-fuchsia-800 right-60 top-20 rounded-md absolute "></div>
   <div className="h-[55%] w-72 border-4 border-[#673964] right-44 top-36 rounded-md absolute "></div>
   <img className='h-[60%] rounded-md w-72 z-10' src={photo1} alt="" />
    </section>
  );
}
