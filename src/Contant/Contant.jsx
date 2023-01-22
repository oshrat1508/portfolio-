import React from 'react'

export default function Contant() {
  return (
    <section className='min-w-full h-screen flex flex-col items-center'>
      <h1 className='text-4xl w-3/4 text-start mt-36 mb-16'> Contant</h1>
      <div className=' flex flex-col w-1/4'>
      <input className='border-solid border-2 border-lime-800' type="text" placeholder='Enter Your Name' />
      <input className='border-solid border-2 border-red-300 my-5 ' type="text" placeholder='Enter Your Email' />
      <input className='border-solid border-2 pb-60 border-orange-400' type="text" placeholder='Enter Your massege' />
      <button className='p-2 bg-gray-800 w-[50%] mt-2 '>send</button>
      </div>
    </section>
  )
}
