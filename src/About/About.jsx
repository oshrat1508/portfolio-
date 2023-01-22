import React from 'react'
import { useState } from 'react'
import photo1 from '../assent/osh.jpg'

export default function About() {
  const [home , setHome] = useState('no')

  
  return (
    <section id='about' className=' h-[60vh] flex ml-36 justify-center  mt-32 '>
      <div className='w-[50%] flex flex-col'>
      <h1 className='text-3xl mb-5'>About my self ...</h1>
      <div className= ' w-[70%]  flex flex-col justify-around  md:flex-row   '>
      <div className='  flex [100%] text-lg items-center'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deserunt optio modi est explicabo? Fugit dolore rem exercitationem labore quos esse commodi architecto aspernatur. Repellat temporibus, nesciunt inventore debitis nulla quas id architecto doloremque. Ex aliquid iusto debitis perferendis nobis?</div></div>
   </div>  
   <section className=' w-[50%] flex flex-col items-center'>
      {/* <h1 className='text-4xl w-3/4 text-start mt-36 mb-16'> Contant</h1> */}
      <div className=' flex flex-col w-3/5'>
      <input className=' border-b-2 rounded-t-md outline-none p-1 border-purple-800 ' type="text" placeholder='Enter Your Name' />
      <input className=' border-b-2 rounded-t-md outline-none p-1 border-purple-800 my-5 ' type="email" placeholder='Enter Your Email' />
      <textarea className=' border-b-2 rounded-t-md outline-none p-1 border-purple-800 h-10 mb-3' type="text" placeholder='Enter Your massege' />
      
      <button className='p-2 bg-slate-400 rounded mt-2 '>send</button>
      </div>
    </section>   
</section>
  )
}
