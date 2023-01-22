import React from "react";
import {AiOutlineLink ,AiFillGithub} from 'react-icons/ai'
export default function Project(props) {
  return (
    <div className="flex justify-between flex-wrap w-72 md:w-80">
      <div className="flex items-center w-full h-0  mt-2 relative top-40 z-10">
          <AiOutlineLink size={20} className='mr-3'/>
          <AiFillGithub size={20}/>
      </div>
      <div className="">
      <img className="drop-shadow-xl mb-7 " src={props.image} alt="" />
      <div className="text-xl ">{props.projectName}</div></div>
    </div>
  );
}
