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
      <div className='gap'></div>
      <div className='side'>
        <FadeInOnScroll>
          <div className='v'>
            <div className='left'>
              <img src="/images/icons/FTC.png"></img>
              <h1>FTC</h1>

            </div>
            <h2>
            <TypewriterEffect words={[{text:"Team"},{text:"#27669!🥳"}]} className="h2" />
            </h2>
            <h3>
              FTC is an international robotics competition that combines engineering, coding and teamwork in a competitive enviroment.
              We CAD robots using Onshape, make our parts using 3D printers, and watch them compete.
              We Code our robots using an Android based control hub with java.
              With over 7,000 teams across more than 45 countries, FTC promotes innovation and real-world problem solving.
              Each year culminates in high-stakes regional qualifiers, state championships, and the FIRST WORLD championship.

            </h3>
          </div>
        </FadeInOnScroll>
        
        <div className='side-img'>
          <img src="images/ftc/ftcBot.png"></img>
        </div>
        
      </div>

      <div className='c'>
        <h2>Our Leaders!</h2>
      </div> 
      
      <div className='class-row'>
        <div className='class-column'>
          <div className='class-card'>
            <h2>FTC lead</h2>
            <h3>
            <TypewriterEffect words={[{text:"Sriram"},{text:"Sivakumar"}]} className="p" />
            </h3>
            <img src='images/people/ram.png'></img>
            <h3>I am sriram. I organize meetings and make sure the team is on track. I help members learn cadding and coding😅
            </h3>
            <p>Quote: wait a minute, get it how u live it...</p>
          </div>
          
        </div>
        <div className='class-column'>
          <div className='class-card'>
            <h2>Mech Lead</h2>

            <h3>
            <TypewriterEffect words={[{text:"Diyaan"},{text:"zinjuwaDia"}]} className="p" />
            </h3>

            <img src='images/people/diyaan.png'></img>
            <h3>
            He helps other team members with CADing in Onshape
            He also CADed much of the bot and helped 3D print parts.
            </h3>
            <p>Quote: bro ms downum likes me so much</p>
          </div>

        </div>
        <div className='class-column'>
          <div className='class-card'>
            <h2>Code Lead</h2>

            <h3>
            <TypewriterEffect words={[{text:"Gupta"},{text:"Arnav"}]} className="p" />
            </h3>

            <img src='images/people/gupta.jpg'></img>
            <h3>
            Gupta codes some parts of the bot.
            He coded some of the teleop I guess...
            The boy works very hard, but he not that good...
            </h3>
            <p>Quote: dont't play the fool with me nigesh</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='side'>
      <FadeInOnScroll>
        <div className='v'>
          <div className='left'>
            <h2>Into the Deep!</h2>
          </div>
          <TypewriterEffect words={[{text:"🌊2024-2025!💦"}]} className="h2" />

          
          <h3>
            This years game was about yap yap yap.
            This years game was about yap yap yap.
            This years game was about yap yap yap.
            This years game was about yap yap yap.
          </h3>
        </div>
        
      </FadeInOnScroll>
      <div className='side-img'>
        <img src="images/ftc/ftcBot.png"></img>
      </div>
      </div>

      <div className='pad'></div>
      <SponsorUs></SponsorUs>

      <div className="pad"></div>
      
      
      <Endbar/>
    </main>
  );
}


