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
      <div className='c'>
        <div className="h1-simple">Welcome to our blog!</div>
        <TypewriterEffect words={[{text:"Check"},{text:"out"},{text:"our"},{text:"blog"},{text:"links!😊"}]} className="h2" />
      </div> 
      <BlogCard></BlogCard>
      <SponsorUs></SponsorUs>
      <div className="pad"></div>
      <Endbar/>
    </main>
  );
}


