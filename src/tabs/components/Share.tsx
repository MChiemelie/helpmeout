import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

export default function Share() {
   const [videoData, setVideoData] = useState<{ title: string, videoUrl: string, transcript: any[] }>({ title: '', videoUrl: '', transcript: [] });
   const { videoId } = useParams();

   useEffect(() => {
      if (videoId) {
         const fetchVideoData = async () => {
            try {
               const response = await fetch(`https://damisaalex.xyz/hngx5/api/videos/${videoId}`);
               if (response.ok) {
                  const data = await response.json();
                  setVideoData(data.videoData);
               } else {
                  // Handle error
               }
            } catch (error) {
               console.error('Error fetching video data', error);
            }
         };

         // Call the fetchVideoData function when videoId is truthy
         fetchVideoData();
      }
   }, [videoId]);


   const { title, videoUrl, transcript } = videoData;

   return (
      <div className="w-[90%] mx-auto my-16 space-y-8">
         <nav className="mx-auto flex items-center justify-between text-[#120B48]">
            <div className="flex lg:gap-4 gap-2 text-xl lg:text-3xl font-bold">
               <img src="logo.svg" alt="" />
               HelpMeOut
            </div>
            <div className="flex items-center gap-2 p-2 rounded text-base lg:text-xl font-semibold">
               <img src="profile.svg" alt="" />
               John Mark
               <img src="arrow.svg" alt="" />
            </div>
         </nav>
         <p className="text-xl text-gray-600 font-semibold">Home / Recent Video / <span className="text-[#100A42] font-bold ">{title}</span></p>
         <h1 className="flex text-3xl gap-1 items-center font-bold text-black">
            {title}
            <img src="edit.svg" alt="" />
         </h1>
         <div className="border-2 border-gray-400 rounded-2xl p-2">
            <img className='w-full' src="video4.png" />
         </div>
         <div className="flex justify-between gap-[10%]">
            <div className="flex items-center py-2 w-full">
               <div className="w-full relative">
                  <input
                     type="text"
                     placeholder="enter your email"
                     className="bg-black rounded-2xl text-black placeholder:text-gray-60 text-base font-meduim bg-opacity-10 border-2 border-white border-opacity-80 p-5 w-full focus:outline-white"
                  />
                  <button className="text-sm bg-gray-600 text-gray-200 rounded w-fit self-center aspect-[6/1] absolute top-5 right-3 p-1">
                     send
                  </button>
               </div>
            </div>
            <div className="flex items-center py-2 w-full">
               <div className="w-full relative">
                  <input
                     type="text"
                     // placeholder={`${videoUrl}`}
                     className="bg-gray-200 rounded-2xl placeholder:text-gray-600 placeholder:text-sm text-white text-base font-meduim bg-opacity-40 border-2 p-5 w-full"
                  />
                  <button className="flex gap-2 text-sm rounded w-fit self-center absolute top-5 right-3 p-1 border border-gray-400">
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
                  // href={button.social === "Facebook" ? `https://www.facebook.com/sharer/sharer.php?u=${videoUrl}` : ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 items-center flex font-semibold p-2 text-sm border border-gray-600 rounded"
               >
                  <img src={button.image} alt={button.social} />
                  {button.social}
               </a>
            ))}
         </div>
         <div className="space-y-4">
            <h3 className="font-bold text-3xl">Transcript</h3>
            <select name="language" id="lang" className="border border-gray-400 text-gray-500 rounded p-2 text-base">
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
   )
}