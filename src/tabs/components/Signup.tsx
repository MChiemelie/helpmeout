import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
   return (
      <div className="h-screen space-y-8 mx-auto flex flex-col justify-center items-center w-[90%]">
         <div className="flex items-center lg:gap-4 gap-2 text-xl md:text-3xl font-bold">
            <img src="logo.svg" alt="" />
            HelpMeOut
         </div>
         <div className="flex flex-col items-center justify-center w-[80%] max-w-2xl space-y-4">
            <h1 className="font-bold text-3xl md:text-5xl">Log in or Sign up</h1>
            <p className="text-base font-semibold text-gray-600 text-center w-[70%]">Join millions of others in sharing successful moves on <span className="text-gray-900">HelpMeOut</span>.</p>
            <div className="w-full space-y-8">
               <Link to={'/dashboard'} className="flex border border-gray-700 w-full p-2 items-center justify-center gap-4 text-lg font-semibold rounded-lg">
                  <img src="google.svg" alt="" />
                  Continue with Google
               </Link>
               <Link to={'/dashboard'} className="flex border border-gray-700 w-full p-2 items-center justify-center gap-4 text-lg font-semibold rounded-lg">
                  <img src="facebook.svg" alt="" />
                  Continue with Facebook
               </Link>
            </div>
            <div className="flex items-center w-full text-gray-800 text-base font-semibold">
               <div className="w-full h-0.5 bg-gray-400" />
               <span className="mx-4">or</span>
               <div className="w-full h-0.5 bg-gray-400" />
            </div>
            <div className="w-full space-y-8">
               <div>
                  <label htmlFor="email" className="font-semibold text-base">Email</label>
                  <input type="text" id="email" name="email" placeholder="Enter your email address" className="flex border border-gray-400 w-full p-4 placeholder:text-base placeholder:text-gray-600 font-semibold rounded-lg" />
               </div>
               <div>
                  <label htmlFor="password" className="font-semibold text-base">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter your Password" className="flex border border-gray-400 w-full p-4 placeholder:text-base placeholder:text-gray-600 font-semibold rounded-lg" />
               </div>
               <Link to={'/dashboard'}  className="bg-[#120B48] flex  w-full p-2 md:p-3 items-center justify-center gap-4 text-base font-meduim rounded-lg text-white">Sign Up</Link>
            </div>
         </div>
      </div>
   )
}