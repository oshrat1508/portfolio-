import React from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";import { useState } from "react";
import {BsFillPersonFill,BsPerson ,BsFillJournalBookmarkFill} from 'react-icons/bs'
import {BiHomeAlt} from 'react-icons/bi'
import {GiBrain,} from 'react-icons/gi'
import {GoMailRead} from 'react-icons/go'
export default function HeaderNav() {
 
  const [nav, setNav] = useState(false);
  const [listesponsive, setlistesponsive] = useState(
    "px-4 cursor-pointer capitalize p-4 text-2xl rounded-full text-[#673964] m-0.5 md:m-2"
  );
  return (
    <div className="flex md:justify-between items-center justify-center w-screen fixed h-20  z-20 ">



      <ul className=" flex md:flex-col justify-center items-center fixed md:top-0 md:left-0 p-1 md:h-screen  md:w-32  ">
        <li className={listesponsive}><a href="#"><BiHomeAlt/></a> </li>
        <li className={listesponsive}><a href="#about"><BsPerson/></a></li>
        <li className={listesponsive}> <a href="#skills"><GiBrain/> </a></li>
        <li className={listesponsive}><a href="#portfolio"><BsFillJournalBookmarkFill/> </a></li>
        {/* <li className={listesponsive}><GoMailRead/></li> */}
      </ul>
</div>
      
    
  );
}
