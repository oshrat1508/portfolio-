import React from 'react'
import { useState } from 'react'
import photo1 from '../assent/osh.jpg'

export default function About() {
  const [home , setHome] = useState('no')

  
  return (
    <section id='about' className=' md:h-[60vh] flex flex-col md:flex-row md:ml-36 mb-16 md:mb-0 justify-center mt-10 md:mt-9 '>
      <div className='md:w-[50%] w-screen flex flex-col'>
      <h1 className='text-3xl mb-5 ml-2'>About my self ...</h1>
      <div className= ' md:w-[70%]  p-2 md:p-0  flex flex-col justify-around  md:flex-row   '>
      <div className='  flex  text-lg items-center'> Expected graduation from the Full Stack course at Tech Career, Technology Training center December 2022
Can work independently, but also an excellent team player.
Outstanding interpersonal and communication skills.
Experience in work that required computerized and verbal communication, exceeding performance expectations.
Excellent at project organization and prioritization of tasks in high pressure situations.
Quick self learner, highly motivated to succeed.</div></div>
   </div>  
   <section className=' md:w-[50%] w-[100%] mt-10 flex flex-col items-center'>
      {/* <h1 className='text-4xl w-3/4 text-start mt-36 mb-16'> Contant</h1> */}
      <div className=' flex flex-col w-4/5'>
      <input className=' border-b-2 rounded-t-md outline-none p-1 border-purple-800 ' type="text" placeholder='Enter Your Name' />
      <input className=' border-b-2 rounded-t-md outline-none p-1 border-purple-800 my-5 ' type="email" placeholder='Enter Your Email' />
      <textarea className=' border-b-2 rounded-t-md outline-none p-1 border-purple-800 h-20 mb-3' type="text"  placeholder='Enter Your massege' />
      
      <button className='p-2 bg-slate-400 rounded mt-2  '>send</button>
      </div>
    </section>   
</section>
  )
}
