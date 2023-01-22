import React from "react";

export default function Project(props) {
  return (
    <div className="flex justify-between    flex-wrap  w-80 h-60">
      <div className="flex items-center w-full h-0 justify-center justify-around mt-2 relative top-40 z-10">
        <button className="bg-white border-solid border-2 rounded w-20 border-fuchsia-400">
          Code
        </button>
        <button className="bg-white border-solid border-2 rounded w-20 border-red-600">
          Demo
        </button>
      </div>
      <div className="">
      <img className="drop-shadow-xl mb-7 " src={props.image} alt="" />
      <div className="text-xl ">{props.projectName}</div></div>
    </div>
  );
}
