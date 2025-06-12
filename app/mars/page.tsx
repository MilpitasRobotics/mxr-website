"use client";

import { IBM_Plex_Mono } from "next/font/google";

import React from "react";
import { TypewriterEffect } from "@/components/tools/typewriter-effect";

import Contact from "@/components/parts/contact";
import FadeInOnScroll from "@/components/tools/fade-in-on-scroll";
import BlogCard from "@/components/parts/blog-cards";

import "../css/navbar.css";
import "../css/main.css";
import "../css/blog-card.css";
import "../css/endbar.css";

import Endbar from "@/components/parts/endbar";
import SponsorUs from "@/components/parts/sponsor-us";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="pt-10 flex min-h-screen flex-col items-center justify-between bg-#0F151F" style={{ backgroundColor: "#0F151F" }}>
      <div className="gap"></div>
      <FadeInOnScroll>
        <div className="side">
          <div className="v">
            <h1>MARS</h1>
            <h2>
            <TypewriterEffect words={[{text:"Milpitas"},{text:"Applied"},{text:"Robotics"},{text:"&"},{text:"Science"}]} className="h2" />
            </h2>
            <h3>
              Mars is a science workshop offered by MXR for elementary schoolers.
              Students outside of MUSD can also join!
              Currently our Summer Workshop is open for signups☀️!
            </h3>
            <a href="/blog/may-mars">
                <h3><b><i>➡️ Click here to check out our previous workshops!</i></b></h3>
            </a>

            <Contact/>
          </div>

          <div className='vi'>
            <img className="custom-image" src='images/mars/summerFlyer.png' width={600} height={1100}></img>
          </div>
          
      </div>
      </FadeInOnScroll>
      
      


      <SponsorUs></SponsorUs>

      <div className="pad"></div>
      
      
      <Endbar/>
    </main>
  );
}


