import React from "react";
import "./styles.css";

const menuData = [
   {
      title: "Menu",
      items: ["Home", "Converter", "How it Works"],
   },
   {
      title: "About us",
      items: ["About", "Contact Us", "Privacy Policy"],
   },
   {
      title: "Screen Record",
      items: ["Browser Window", "Desktop", "Application"],
   },
];

export default function Footer() {
   return (
      <footer className="bg-[#120B48] md:flex items-start text-white text-base py-10 space-y-6 md:space-y-0">
         <div className="flex h-fit gap-2 text-3xl font-bold items-center justify-center mx-auto">
            <img src="logodark.svg" alt="" />
            HelpMeOut
         </div>
         <div className="flex sm:flex-row flex-col gap-10 justify-between w-full lg:w-4/6 px-16 mx-auto">
            {menuData.map((menuGroup, index) => (
               <div key={index} className="flex flex-col gap-4 text-center sm:text-left">
                  <span className="font-bold">{menuGroup.title}</span>
                  {menuGroup.items.map((item, itemIndex) => (
                     <span key={itemIndex}>{item}</span>
                  ))}
               </div>
            ))}
         </div>
      </footer>
   );
}