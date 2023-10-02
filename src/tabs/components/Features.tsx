import React from "react";
import "./styles.css";

const featuresData = [
   {
      icon: "simple.svg",
      title: 'Simple Screen Recording',
      description: 'Effortless screen recording for everyone. Record with ease, no tech expertise required.',
   },
   {
      icon: "easy.svg",
      title: 'Easy-to-Share URL',
      description: 'Share your recordings instantly with a single link. No attachments, no downloads.',
   },
   {
      icon: "revisit.svg",
      title: 'Revisit Recordings',
      description: 'Access and review your past content effortlessly. Your recordings, always at your fingertips.',
   },
];

export default function Features() {
   return (
      <div className="bg-white py-10 space-y-8">
         <h1 className="text-center font-bold text-3xl md:text-5xl text-[#1B233D]">Features</h1>
         <p className="text-center text-xl lg:text-2xl font-medium">Key Highlights of Our Extension</p>
         <div className="flex flex-col-reverse lg:flex-row p-10 justify-center items-center gap-10">
            <div className="self-center space-y-10 lg:w-2/5 py-10 lg:p-0">
               {featuresData.map((feature, index) => (
                  <div key={index}>
                     <div className="flex items-start gap-4">
                        <img src={feature.icon} />
                        <div>
                           <h2 className="font-bold text-xl lg:text-3xl text-[#1B233D]">{feature.title}</h2>
                           <p className="lg:w-4/5 text-lg lg:text-xl">{feature.description}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="flex items-center justify-center">
               <img src="Video-rep.png" alt="video-rep" className="lg:w-11/12 border rounded-lg"/>
            </div>
         </div>
      </div>
   );
}
