import React from 'react'
import Skils from './Skils'
import { DiJavascript ,DiHtml5 ,DiSass,DiReact ,DiNodejsSmall,DiBootstrap ,DiPython ,DiMysql ,DiMongodb}  from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
export default function Experience() {
  return (
    <section className='md:min-w-[60%] w-full mt-20 md:mt-0 flex  flex-col items-center   '>
      <h1 className='text-xl font-medium underline'>Skills</h1>
    <div className=' flex flex-col md:w-3/5 md:justify-around justify-center  md:flex-row mt-5'  >
      
     <div className='flex flex-col md:mr-10 items-center justify-center '>
      <h1 className='font-medium text-lg mb-5'> Frontend</h1>
      <div className='flex flex-wrap justify-around md:w-[400px]'>
      <Skils img = {<DiHtml5 size={40} className='text-red-700 text-8xl'/>} skilsName="html"/>
      <Skils img = {<DiSass size={40} className='text-fuchsia-800'/>} skilsName="sass"/>
      <Skils img = {<DiJavascript size={40} className='text-yellow-300'/>} skilsName="jacaScript"/>
      <Skils img = {<DiReact size={40} className='text-sky-500'/>}skilsName="react"/>
      <Skils img = {<DiBootstrap size={40} className='text-blue-700'/>}skilsName="Bootstrap"/>
      <Skils img = {<SiTailwindcss size={40} className='text-sky-300'/>}skilsName='Tailwindcss'/>
      </div>
     </div>
    
     <div className='flex flex-wrap flex-col items-center md:mr-10  justify-center '>
      <h1 className='font-medium text-lg mb-5'> Backend</h1>
      <div className='flex  justify-between md:w-[300px]'>
      <Skils img = {<DiPython size={40} className='text-g'/>}skilsName='Python'/>
      <Skils img = {<DiNodejsSmall size={40} className='text-green-600'/>}skilsName="node.js"/>
      <Skils img = {<DiMysql size={40} className='text-[#005B86] text-8xl'/>} skilsName="MySQL"/>
      <Skils img = {<DiMongodb size={40} className='text-green-800'/>} skilsName="Mongodb"/>
      
      </div>
     </div>
   

      {/* <Skils img = {<DiHtml5 size={40} className='text-red-700 text-8xl'/>} skilsName="html"/>
      <Skils img = {<DiSass size={40} className='text-fuchsia-800'/>} skilsName="sass"/>
      <Skils img = {<DiJavascript size={40} className='text-yellow-300'/>} skilsName="jacaScript"/>
      <Skils img = {<DiReact size={40} className='text-sky-500'/>}skilsName="react"/>
      <Skils img = {<DiNodejsSmall size={40} className='text-green-600'/>}skilsName="node.js"/>
      <Skils img = {<DiBootstrap size={40} className='text-blue-700'/>}skilsName="Bootstrap"/>
      <Skils img = {<SiTailwindcss size={40} className='text-sky-300'/>}skilsName='Tailwindcss'/>
      <Skils img = {<DiPython size={40} className='text-g'/>}skilsName='Python'/> */}
     
    </div></section>
  )
}
