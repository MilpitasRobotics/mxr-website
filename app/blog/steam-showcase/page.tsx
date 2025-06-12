"use client";
import { images } from '../scrollableData'; // adjust path as needed

import { IBM_Plex_Mono } from "next/font/google";
import React from "react";
import { TypewriterEffect } from "@/components/tools/typewriter-effect";

import Contact from "@/components/parts/contact";
import FadeInOnScroll from "@/components/tools/fade-in-on-scroll";
import BlogCard from "@/components/parts/blog-cards";
import SponsorUs from "@/components/parts/sponsor-us";
import Endbar from "@/components/parts/endbar";
import ImageGallery from "@/components/parts/scrollable"; // NEW Import

import "../../css/navbar.css";
import "../../css/blog.css";
import "../../css/blog-card.css";
import "../../css/scrollable.css";
import "../../css/endbar.css"; // ✅ KEEPING all your imports!!

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="pt-10 flex min-h-screen flex-col items-center justify-between bg-#0F151F" style={{ backgroundColor: "#0F151F" }}>
      <div className="gap"></div>

      <div className="blog-layout">
        <div className="body">
          <div className="h1-simple">Steam Showcase 2025!</div>
          <div className="side-min">
            <div className="h2-simple">Written by: Sriram Sivakumar</div>
            <div className="h3-simple">- June 12th 2025</div>
          </div>
          <img
            src="/images/blog/steamShowcase2025/SteamShowcase.png"
            alt="Animated"
            className="responsive-image image-filters"
          />

          <p className='blog-paragraph'>
            Every year our school district hosts STEAM showcase.
            This is a sort of science fair, that includes our whole Milpitas School District.
            That means there are kids from kindergarten all the way to high school participating!
          </p>
          <p className='blog-paragraph'>
            Check the MUSD steam showcase website: https://sites.google.com/musd.org/steam-showcase
          </p>
          <br></br>
          
          <p className='blog-paragraph'>
            So we asked our glorious group leader, Sriram Sivakumar, how STEAM showcase went! 
            He told us, "I think its really important for recruiting. 
            This is where we gotta start brainwashing all the rancho and russel kids into joining our club!"
          </p>
          <br></br>

          <img
            src="/images/blog/steamShowcase2025/driving.webp"
            alt="Animated"
            className="responsive-image image-filters"
          />

          <p className='blog-paragraph'>
            We also walked around looking at some other kids projects!
            Some russel kids made this tiny arduino robot with a distance sensor.
            When it encounters a wall it turns around by itself which was really cool!
            We also saw this cool project with a voice powered water fountain using an arduino and a motor!
          </p>

          <p className='blog-paragraph'>
            By far tho, the coolest project there had to be the rubriks cube solver.
            Some elementary schooler used FLL lego parts and stepper motors to make a automatic rubiks cube solver!
          </p>

          <p className='blog-paragraph'>
            We also asked our favorite justin, Justin Chung how it went. 
            He told us "We always setup in the cafeteria every year.
            This year we did the same, but they upgraded the large gym area a lot.
            They had a mat and it was much better organized.
            We are gonna setup in the large gyme for sure!"
          </p>
          
        </div>
        <div className="divider" />

        <ImageGallery images={images} />
      </div>
      <div className='gap'></div>
      <SponsorUs />
      <div className="pad"></div>
      <Endbar />
    </main>
  );
}
