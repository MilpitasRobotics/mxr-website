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
          <div className="h1-simple">John Sinnot Robotics classes!</div>
          <div className="side-min">
            <div className="h2-simple">Written by: Justin Chung</div>
            <div className="h3-simple">- June 16th 2025</div>
          </div>
          <img
            src="/images/blog/johnSinnot/sinnotPic.png"
            alt="Animated"
            className="responsive-image"
          />

          <p className='blog-paragraph'>
            Every year, our club MXR, and the John sinnot PTA collaborate and host sinnot PTA robotics club.
            We conduct 6 meetings throughout the year where we teach lego SPIKE robotics!
            Our MXR members get volunteering hours and the kids get the learn about robotics!
          </p>
          <p className='blog-paragraph'>
            Check out the sinnot PTA website for how to register: https://www.sinnottpta.org/programs/robotics-club-with-mxr#h.zgojr81ihzxc

          </p>
          <br></br>

          <img
            src="/images/blog/johnSinnot/lego.png"
            alt="Animated"
            className="responsive-image"
          />
          
          <p className='blog-paragraph'>
            So what is SPIKE robotics? Glad you asked! 
            <b> LEGO® Education SPIKE Prime Set</b> is a simple way to introduce STEM and robotics.
            It combines colorful LEGO with simple block coding analogous to SCRATCH.
            The kids learned how to use motors, sensors, and code to create line following robots!
          </p>
          <br></br>

          <img
            src="/images/blog/johnSinnot/teach.png"
            alt="Animated"
            className="responsive-image"
          />
          <p className='blog-paragraph'>
            This year, our favorite Justin, Justin Chung helped organize the classes together with Sinnot PTA.
            So we asked justin, how did sinnot classes go this year? 
          </p>
          <img
            src="/images/blog/johnSinnot/learn.png"
            alt="Animated"
            className="responsive-image"
          />
          <img
            src="/images/blog/johnSinnot/happy.png"
            alt="Animated"
            className="responsive-image"
          />
          <img
            src="/images/blog/johnSinnot/many.png"
            alt="Animated"
            className="responsive-image"
          />

          
          
          
          
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
