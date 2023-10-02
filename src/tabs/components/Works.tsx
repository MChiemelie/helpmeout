import React from "react";
import "./styles.css";
import Footer from "./Footer";

const sections = [
   {
      imgSrc: "one.png",
      title: "Record Screen",
      description: "Click the 'Start Recording' button in our extension. Choose which part of your screen to capture and who you want to send it to.",
   },
   {
      imgSrc: "two.png",
      title: "Share Your Recording",
      description: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
   },
   {
      imgSrc: "three.png",
      title: "Learn Effortlessly",
      description: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
   },
];

export default function Works() {
   return (
      <div>
         <div className="w-full py-10 space-y-8">
            <h1 className="text-center font-bold text-3xl text-[#1B233D]">
               How it Works
            </h1>
            <div className="flex flex-col md:flex-row md:items-start items-center text-center justify-evenly p-10 gap-10">
               {sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                     <img src={section.imgSrc} alt={`step ${index + 1}`} className="w-10 mx-auto" />
                     <h2 className="font-bold text-2xl text-[#1B233D]">{section.title}</h2>
                     <p className="py-5 text-xl text-gray-800">{section.description}</p>
                     <img src="recorder.svg.png" alt={`step ${index + 1}`} className="w-5/6 mx-auto" />
                  </div>
               ))}
            </div>
         </div>
         <Footer />
      </div>
   );
}