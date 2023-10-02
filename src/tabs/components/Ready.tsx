import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const buttons = [
   {
      image: "facebook.svg",
      social: "Facebook",
   },
   {
      image: "whatsapp.svg",
      social: "WhatsApp",
   },
   {
      image: "telegram.svg",
      social: "Telegram",
   },
];

export default function Ready() {
   return (
      <div>
         <div className="bg-white">
            <Nav />
         </div>
         <div className="md:flex divide-x-2 divide-gray-300 gap-10 my-32">
            <div className="md:w-1/2 ">
               <div className="flex flex-col items-left space-y-10 text-xl w-5/6 mx-auto">
                  <h1 className="hidden sm:block text-4xl xl:text-5xl font-bold">Your video is ready!</h1>
                  <div className="space-y-6">
                     <div>
                        <span className="text-gray-500 text-sm font-semibold">Name</span>
                        <p className="flex text-2xl gap-1 items-center font-bold text-[#413C6D]">Untitled_Video_20232509
                           <img src="edit.svg" />
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center py-2">
                     <div className="w-full max-w-2xl relative">
                        <input
                           type="text"
                           placeholder="enter your email"
                           className="bg-black rounded-lg text-black placeholder:text-gray-60 text-base font-meduim bg-opacity-10 border-2 border-white border-opacity-80 p-4 w-full"
                        />
                        <button className="text-sm bg-gray-600 text-gray-200 rounded w-fit self-center aspect-[7/1] absolute top-4 right-3 p-1">
                           send
                        </button>
                     </div>
                  </div>
                  <div>
                     <span className="flex text-xl gap-1 items-center font-semibold">Video Url</span>
                     <div className="flex items-center py-2">
                        <div className="w-full max-w-2xl relative">
                           <input
                              type="text"
                              placeholder="https://www.helpmeout/Untitled_Video_20232509"
                              className="bg-gray-200 rounded-lg placeholder:text-gray-600 placeholder:text-sm text-white text-base font-meduim bg-opacity-40 border-2 p-3 w-full"
                           />
                           <button className="bg-gray-200 flex gap-2 text-sm rounded w-fit self-center absolute top-3 right-3 p-1 border border-gray-400">
                              <img src="copy.svg" alt="" />
                              copied
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     {buttons.map((button, index) => (
                        <a
                           key={index}
                           // href={button.social === "Facebook" ? `https://www.facebook.com/sharer/sharer.php?u=${videoLink}` : ""}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="gap-2 items-center flex font-semibold p-1 text-sm border border-gray-600 rounded"
                        >
                           <img src={button.image} alt={button.social} />
                           {button.social}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
            <div className="flex flex-col justify-center md:w-1/2 space-y-8 px-16">
               <div className="bg-slate-50 rounded-lg w-full border-2 border-gray-200">
                  <img src="video1.png" alt="" className="w-full opacity-30" />
                  <div className="h-1 w-1/5 bg-[#120B48]" />
                  <div className="flex justify-between items-center p-4">
                     <p className="text-lg text-gray-400 tracking-widest inter">0:30/3:00</p>
                     <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                           <img src="play.svg" />
                           Play
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <img src="volume.svg" />
                           Volume
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <img src="setting.svg" />
                           Settings
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h3 className="font-bold text-3xl">Transcript</h3>
                  <select name="language" id="lang" className="border border-gray-400 text-gray-500 rounded p-1 text-base">
                     <option value="english">English</option>
                     <option value="igbo">Igbo</option>
                     <option value="hausa">Hausa</option>
                     <option value="yourba">Yourba</option>
                  </select>
                  <ul className="space-y-4 overflow-x-auto h-48 border-opacity-30 border-b-gray-400 border-b-80">
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>0.01</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>0.15</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>0.30</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>1.00</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>0.01</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>0.15</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>0.30</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                     <li className="flex text-md sm:text-lg lg:text-xl justify-between items-start gap-6">
                        <span>1.00</span>
                        <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="bg-gray-100 flex py-16">
            <div className="flex flex-col justify-center items-center mx-auto w-[50%] gap-8">
               <h2 className="font-bold text-2xl text-center">To ensure the availability and privacy of your video, we recommend saving it to your account.</h2>
               <button type="submit" className="bg-[#120B48] py-2 px-8 text-center rounded text-white text-lg">Save Video</button>
               <p className="text-xl font-semibold"><span className="text-gray-600">Don’t have an account?</span><a href="#" className="underline text-[#120B48]"> Create account</a></p>
            </div>
         </div>
         <Footer />
      </div>
   );
}