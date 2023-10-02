import React from "react";
import { Nav, Hero } from "./index"
import "./styles.css";

export default function Header() {
   return (
      <div className="bg-white h-screen flex flex-col justify-center">
         <Nav />
         <Hero />
      </div>
   )
}