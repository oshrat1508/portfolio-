import React from 'react'


export default function Skils(props) {
  return (
    <div className='flex flex-col justify-center items-center mr-2 '>
    <div>{props.img}</div>
    <div>{props.skilsName}</div>
    
    </div>
  )
}
