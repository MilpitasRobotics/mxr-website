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
      <div className="side">
        <FadeInOnScroll>
          
          <div className="v">
            <h1>
              MXR
            </h1>
            <TypewriterEffect words={[{text:"Milpitas"},{text:"Xtreme"},{text:"Robotics"}]} className="h2" />
            <h3>
              Hello World! 
              We are a student-run robotics club from Milpitas High School. 
              We compete in international robotics competitions such as VEX and FTC.
              We are a group of diverse, fun, and passionate students who love STEM and robotics. 
            </h3>
            <Contact/>
          </div>
        </FadeInOnScroll>
        <div className='side-img'>
          <img src="images/blog/teamPic.png"></img>
        </div>
      </div>
      <div className="side">
        <FadeInOnScroll>
          <div className="v">
            <TypewriterEffect words={[{text:"Who"},{text:"are"},{text:"We?🤔"}]} className="h2" />
            <h3>
              We are a robotics club that competes in VEX and FTC. Around 15 years old now, our club takes pride in teamwork and problem solving. We have competed in VEX for over 5 years and have made it to states and worlds. We recently expanded to FTC and included many new members. We are looking to expand to FRC in the future. 
            </h3>
            <h3>
              Apart from competitive robotics, we also have many outreach programs. We teach SPIKE lego robotics to john sinnot elementery school students. We have also founded the M.A.R.S. program, which is robotics workshop for elementary school students across MUSD. We also enhance our school spirit by participating in school events and activities. We recently created a ferris wheel for the school's homecoming event. For more details, visit our blog!
            </h3>
          </div>
        
        </FadeInOnScroll>
        <div className='side-img'>
          <img src="images/blog/teamPic2.webp"></img>
        </div>
      </div>
      <BlogCard></BlogCard>
      <SponsorUs></SponsorUs>

      <div className="pad"></div>
      
      
      <Endbar/>
    </main>
  );
}


