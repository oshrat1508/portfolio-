import React from "react";
import Project from "./Project";
import movieImage from "../assent/צילום מסך 2023-01-23 195335.png";
import sharePhoto from '../assent/צילום מסך 2023-01-23 195506.png'
import e_commerce from '../assent/צילום מסך 2023-01-29 114119.png'
export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full flex  items-center  flex-col pt-20 mb-10 ">
      <h1 className="text-xl font-medium underline mb-5"> my works</h1>
      <div className="md:w-3/4 flex  flex-col md:flex-row justify-around ">
          <Project projectName='movie' link={'https://oshratproject-client.onrender.com'} gitHub={'https://github.com/oshrat1508/movie-project-client'}  image={movieImage} />
          <Project projectName='share photo'  link='https://picosh-client.onrender.com/' gitHub='https://github.com/oshrat1508/share-photo-client' image={sharePhoto}/>          
          <Project projectName='share photo'  link='https://e-commerce-client-d1va.onrender.com' gitHub='https://github.com/oshrat1508/e-commerce-client' image={e_commerce}/>          

      </div>
    </section>
  );
}
