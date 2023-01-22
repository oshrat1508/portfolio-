import React from "react";
import Project from "./Project";
import p from "../assent/screenshot.png";

export default function Portfolio() {
  return (
    <section className="w-full h-screen flex  items-center  flex-col pt-24 ">
      <h1 className="text-5xl"> my works</h1>
      <div className="w-3/4 flex  flex-col h-full">
        <div className="flex justify-around   ">
          <Project projectName='protfolio'  image={p} />
          <Project projectName='protfolio' image={p} />
          <Project projectName='protfolio' image={p}/>
        </div>
        <div className="flex justify-around ">
          <Project projectName='protfolio' image={p}/>
          <Project projectName='protfolio' image={p}/>
          <Project projectName='protfolio' image={p}/>
        </div>
      </div>
    </section>
  );
}
