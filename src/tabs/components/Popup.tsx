import React from "react";
import "./styles.css";

export default function Popup() {
   return (
      <div className=" bg-[#F2F4F7] rounded-lg">
         <div className="w-11/12 mx-auto flex flex-col text-center items-center pt-10 justify-between py-4 font-semibold">
            <div className="flex items-start space-x-4 w-52">
               <img src="success.png" alt="icon" />
               <img src="close-circle.png" alt="close" />
            </div>

            <p className="p-5 text-lg">
               Your video link has been sent <br /> to{" "}
               <span className="text-[#120B48]">johnmark@gmail.com</span>
            </p>
            <p className="p-5 text-base">
               Would you need to view this video later? <br /> Save to your account
               now!
            </p>

            <button className="bg-[#120B48] h-10 text-white text-base text-center rounded-md mt-3 p-2 w-30">
               Save Video
            </button>

            <p className="pt-10 text-sm">
               Don't have an account?{" "}
               <span className="text-[#120B48] text-base font-bold">
                  Create account
               </span>{" "}
            </p>
         </div>
      </div>
   );
}