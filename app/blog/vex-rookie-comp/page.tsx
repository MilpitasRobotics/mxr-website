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
          <div className="h1-simple">VEX 1669Y wins championship!</div>
          <div className="side-min">
            <div className="h2-simple">Written by: Justin Chung</div>
            <div className="h3-simple">- July 13th 2025</div>
          </div>
          <img
            src="/images/blog/vexRookieComp/main.png"
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
