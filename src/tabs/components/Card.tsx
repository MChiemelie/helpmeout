import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image, title, date, videoId }) {
   return (
      <div className="mx-auto bg-white rounded-2xl p-4 space-y-4 border-2 border-gray-300">
         <img src={image} className="aspect-16/9 border border-gray-300 rounded-lg" alt={title} />
         <div className="flex justify-between items-start">
            <div className="">
               <h2 className="text-lg font-semibold">{title}</h2>
               <p className="text-gray-700 text-base font-semibold">{date}</p>
            </div>
            <div className="flex justify-between gap-4">
               <button>
                  <img src="link.svg" alt="Link" />
               </button>
               <button>
                  <img src="details.svg" alt="Details" />
               </button>
            </div>
         </div>
      </div>
   );
}