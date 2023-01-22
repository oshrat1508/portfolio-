import React from "react";
import css from "./Nav.css";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";import { useState } from "react";
import {BsFillPersonFill,BsPerson ,BsFillJournalBookmarkFill} from 'react-icons/bs'
import {BiHomeAlt} from 'react-icons/bi'
import {GiBrain,} from 'react-icons/gi'
import {GoMailRead} from 'react-icons/go'
export default function HeaderNav() {
 
  const [nav, setNav] = useState(false);
  const [listesponsive, setlistesponsive] = useState(
    "px-4 cursor-pointer capitalize p-4 text-2xl rounded-full text-[#673964]  m-2"
  );
  return (
    <div className="flex  justify-between items-center w-full fixed h-20   ">



      <ul className=" ease-out duration-300  flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen  md:w-32  ">
        <li className={listesponsive}><a href="#"><BiHomeAlt/></a> </li>
        <li className={listesponsive}><a href="#about"><BsPerson/></a></li>
        <li className={listesponsive}> <GiBrain/></li>
        <li className={listesponsive}><BsFillJournalBookmarkFill/></li>
        <li className={listesponsive}><GoMailRead/></li>
      </ul>
</div>
      
    
  );
}
