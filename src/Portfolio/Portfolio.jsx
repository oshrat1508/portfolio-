import React from "react";
import Project from "./Project";
import p from "../assent/screenshot.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full flex  items-center  flex-col pt-20 mb-32 ">
      <h1 className="text-3xl underline"> my works</h1>
      <div className="md:w-3/4 flex  flex-col md:flex-row justify-between ">
          <Project projectName='movie'  image={p} />
          <Project projectName='mall' image={p} />
          <Project projectName='share photo' image={p}/>
      </div>
    </section>
  );
}
