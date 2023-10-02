import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Nav() {
   const [toggle, setToggle] = useState(false);

   const handleModal = () => {
      setToggle((prev) => !prev);
   };

   return (
      <div className="bg-white z-10 py-1 lg:py-3 w-full fixed top-0 border-b-2 border-gray-300">
         <nav className="mx-auto flex items-center justify-between py-4 px-[5%] text-[#120B48]">
            <div className="flex items-center lg:gap-4 gap-2 text-xl md:text-3xl font-bold">
               <img src="logo.svg" alt="" />
               HelpMeOut
            </div>
            <div className="hidden sm:block lg:space-x-8 space-x-4 text-base md:text-xl font-semibold">
               <span>Features</span>
               <span>How It Works</span>
            </div>
            <Link to="signup" className="hidden sm:block text-[#120B48] font-semibold text-lg sm:text-2xl">
               Get Started
            </Link>
            <img
               src={toggle ? "close.svg" : "menu.svg"}
               className="text-sm w-10 cursor-pointer sm:hidden"
               onClick={handleModal}
               alt={toggle ? "Close" : "Menu"}
            />

            {toggle && (
               <div className="fixed left-0 sm:hidden z-20 w-full min-h-full text-2xl font-bold text-center bg-white font-quicksand top-20 sidebar">
                  <ul className="font-medium font-work_sans leading-[18.77px] text-black flex flex-col justify-center items-center gap-20 min-h-[80vh]">
                     <Link to="#features" onClick={handleModal}>
                        Features
                     </Link>
                     <Link to="#works" onClick={handleModal}>
                        How It Works
                     </Link>
                     <Link
                        to="/signup"
                        className="text-Primary font-semibold text-2xl"
                        onClick={handleModal}
                     >
                        Get Started
                     </Link>
                  </ul>
               </div>
            )}
         </nav>
      </div>
   );
}