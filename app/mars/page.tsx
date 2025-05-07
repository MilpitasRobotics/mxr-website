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
              Mars is a science workshop offered by MXR for elementary schoolers in Milpitas.
              Our upcoming workshop will be on May 31st. 
              It will be at Milpitas High School upper L building. 
              The workshop is from 8:30 to 12:30. The cost is 40$ per student. 
              Parents can stay if they wish to.
            </h3>
            <Contact/>
          </div>

          <div className='vi'>
            <img   className="inline-block" src='images/mars/qrcode.png' width={300} height={300}></img>
            <h2>Scan to sign up!☝️</h2>
          </div>
          
      </div>
      </FadeInOnScroll>
      
      <div className='c'>
            <h2>
            <TypewriterEffect words={[{text:"What"},{text:"do"},{text:"we"},{text:"offer?"}]} className="h2" />
            </h2>
        <h3>We offer 3 classes in each of our workshops.
          The kids start in one class and rotate to the next class after 40 mins.
          Each class focuses on a certain STEM topic. 
          We teach them what it is about and help them do an interactive activity/experiment.
          They get to take home the experiment as well to further play around with it at home.
        </h3>
      </div> 
      <div className='class-row'>
        <div className='class-column'>
          <div className='class-card'>
            <h2>Drive Lab!</h2>
            <h3>
              In this activity, we teach kids about 3D printing.
              We also teach them about rubber and elastic energy.
              The kids will receive 3D printed parts and build a rubber band powered car.
              They are free to take it home and experiment further!
            </h3>
            <img src="images/mars/car.png"></img>

          </div>
          
        </div>

        <div className='class-column'>
          <div className='class-card'>
            <h2>Bubble Blastoff!</h2>
            <h3>
              Here we help kids make a model rocket.
              We teach kids about how rockets work and acid-base reactions
              The rocket uses water and alka-seltzer tablets to create CO2 and lift off!
              We help them launch it and teach them ways to improve it!
            </h3>
            <img src="images/mars/rocket.png"></img>
          </div>
         

        </div>
        <div className='class-column'>
          <div className='class-card'>
            <h2>Code Quest!</h2>
            <h3>In this activity, we help students create a 2D videogame.
              We teach them the basics of Scratch, a online block coding IDE.
              We help them code the game and help them work through bugs.
              In the end, the kids will have a full game.
            </h3>
            <img src="images/mars/code.png"></img>

          </div>
        </div>
      </div>

      <div className="side">
        <FadeInOnScroll>
          <div className="v">
            <h2>
            <TypewriterEffect words={[{text:"Schedule"}]} className="h2" />
            </h2>
            <h3>
              We split the kids into 3 groups. 
              Each group starts out at a different class.
              Then after 40 minutes (1 block) the kids rotate to the next class
              We help guide them to the next class during passing time.
              At the end, we will have a snack stand with hot chocolate.
              We will show them our high school robots and gokart and let them drive it around. 
            </h3>
            
          </div>
        </FadeInOnScroll>
        
        <div className="flex justify-center">
          <table className="w-[400px] border-separate border-spacing-[6px] rounded-xl bg-[#26303f] text-center">
            <thead>
              <tr className="bg-[#0c1017]">
                <th className="text-white text-4xl font-['Roboto'] p-2">Time</th>
                <th className="text-white text-4xl font-['Roboto'] p-2">Event</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["8:30-9:00", "Check in"],
                ["9:00-9:50", "Block 1"],
                ["9:50-10:00", "Passing"],
                ["10:00-10:50", "Block 2"],
                ["10:50-11:00", "Passing"],
                ["11:00-11:50", "Block 3"],
                ["11:50-12:30", "Check out"],
              ].map(([time, event], idx) => (
                <tr key={idx} className="bg-[#0c1017]">
                  <td className="text-white text-base font-normal font-['Roboto'] p-2 leading-7">{time}</td>
                  <td className="text-white text-base font-normal font-['Roboto'] p-2 leading-7">{event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
      <SponsorUs></SponsorUs>

      <div className="pad"></div>
      
      
      <Endbar/>
    </main>
  );
}


