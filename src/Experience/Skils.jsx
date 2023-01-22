import React from 'react'


export default function Skils(props) {
  return (
    <div className='flex flex-col justify-center items-center '>
    <div>{props.img}</div>
    <div>{props.skilsName}</div>
    
    </div>
  )
}
