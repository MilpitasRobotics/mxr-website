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
              <img src="/images/icons/vex.jpg"></img>
              <h1>VEX</h1>

            </div>
            <h2>
            <TypewriterEffect words={[{text:"Team"},{text:"1669x!🥳"}]} className="h2" />
            </h2>
            <h3>
              Vex robotics is an international robotics competition with over 20,000 teams from more than 50  countries participated in over 1.700 comps.
              It is the largest and fastest-growing robotics program. We compete in comps to qualify for states, and ultimately the VEX robotics World Championships, held in Dallas, Texas. 
              Through vex, we make new friends, gain engineering skills, programming, teamwork, and critical thinking. 
              We recently created our sister team, 1669x for new members!
            </h3>
          </div>
        </FadeInOnScroll>
        
        <div className='side-img'>
          <img src="images/vex/oliver.webp"></img>
        </div>
        
      </div>

      <div className='c'>
        <h2>Our Leaders!</h2>
        
      </div> 
      <div className='class-row'>
        <div className='class-column'>
          <div className='class-card'>
            <h2>VEX lead</h2>
            <h3>
            <TypewriterEffect words={[{text:"Ivan"},{text:"Petrenko"}]} className="p" />
            </h3>
            <img src='images/people/ivan.png'></img>
            <h3>Ivan organizes and hosts vex meetings at his garage
              He also uses a CNC to cut custom polycarb for the bot.
            </h3>
            <p>Quote: </p>
          </div>
          
        </div>
        <div className='class-column'>
          <div className='class-card'>
            <h2>Build Lead</h2>

            <h3>
            <TypewriterEffect words={[{text:"Justin"},{text:"Chung"}]} className="p" />
            </h3>

            <img className="lead-card" src='images/people/justin.png'></img>
            <h3>Justin organizes club affairs as well
              He also founded the sister team 1669y and helps them with their bot.
            </h3>
            <p>Quote: ts pmo ts pmo frfr:🥀</p>
          </div>

        </div>
        <div className='class-column'>
          <div className='class-card'>
            <h2>Code Lead</h2>

            <h3>
            <TypewriterEffect words={[{text:"Oliver"},{text:"Ma"}]} className="p" />
            </h3>

            <img src='images/people/oliver.png'></img>
            <h3>
              He uses the PROS library to code the robot's teleop and auton.
              Oliver is also the club's treasurer
            </h3>
            <p>Quote: skibidi ohio rizz ong</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='side'>
        <FadeInOnScroll>
          <div className='v'>
            <div className='left'>
              <h2>High Stakes</h2>
            </div>
            <TypewriterEffect words={[{text:"2024-2025"}]} className="h2" />
            <h3>
              This years game was about yap yap yap.
              This years game was about yap yap yap.
              This years game was about yap yap yap.
              This years game was about yap yap yap.
            </h3>
          </div>
        </FadeInOnScroll>
        
        <div className='side-img'>
          <img src="images/vex/highStakes.webp"></img>
        </div>
        
      </div>

      <div className='side'>
        <FadeInOnScroll>
          <div className='v'>
            <div className='left'>
              <h2>Over Under</h2>
            </div>
            <TypewriterEffect words={[{text:"2023-2024"}]} className="h2" />

            <h3>
              This years game was about yap yap yap.
              This years game was about yap yap yap.
              This years game was about yap yap yap.
              This years game was about yap yap yap.
            </h3>
          </div>
        </FadeInOnScroll>
        
        <div className='side-img'>
        <img src="images/vex/overUnder.webp"></img>
        </div>
        
      </div>

      <div className='side'>
        <FadeInOnScroll>
          <div className='v'>
            <div className='left'>
              <h2>Spin Up</h2>
            </div>
            <TypewriterEffect words={[{text:"2022-2023"}]} className="h2" />

            <h3>
              This years game was about yap yap yap.
              This years game was about yap yap yap.
              This years game was about yap yap yap.
              This years game was about yap yap yap.
            </h3>
          </div>
        </FadeInOnScroll>
        
        <div className='side-img'>
        <img src="images/vex/spinup.webp"></img>
        </div>
        
      </div>

      <div className='pad'></div>
      <SponsorUs></SponsorUs>

      <div className="pad"></div>
      
      
      <Endbar/>
    </main>
  );
}


