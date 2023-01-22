import React from "react";
import Navbar from "./Nav/Nav";
import About from "./About/About";
import Home from "./HomePage/Home";
import css from './App.css'
import Portfolio from "./Portfolio/Portfolio";
import Experience from "./Experience/Experience";
import Contant from "./Contant/Contant";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Home className=''/>
      <Experience/>
      <Portfolio/>
      <About/>
      
    </div>
  );
}
