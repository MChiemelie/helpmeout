import React from "react";
import "./styles.css";

export default function Hero() {
   return (
      <div className="flex sm:flex-row flex-col justify-center mx-auto px-10 lg:px-[8%] items-center">
         <div className="p-4 self-center space-y-6">
            <h1 className="text-4xl md:text-7xl sora">Show Them <br /> Don't Just Tell</h1>
            <p className="text-lg md:text-2xl font-semibold w-4/5 text-gray-900">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <button className="bg-[#120B48] text-white flex text-base lg:text-lg  items-center p-3 gap-2 rounded">
               Install HelpMeOut
               <img src="arrowright.svg" alt="" />
           </button>
         </div>
         <div className="grid grid-cols-4 grid-flow-col gap-4 p-4 lg:w-3/5">
            <img src="/hero1.png" className="col-span-2 rounded  w-full " />
            <img src="/hero2.png" className="col-span-2 rounded  w-full " />
            <img src="/hero3.png" className="row-span-2 col-span-2 rounded  w-full" />
         </div>
      </div>
   )
}