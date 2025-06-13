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
          <div className="h1-simple">MXR Dumpster Dive!</div>
          <div className="side-min">
            <div className="h2-simple">Written by: Swayam Shukla</div>
            <div className="h3-simple">- July 13th 2025</div>
          </div>
          <img
            src="/images/blog/dumpsterDive/harish.webp"
            alt="Animated"
            className="responsive-image"
          />

          <p className='blog-paragraph'>
            Dumpster Diving may seem odd at first, but for harish and pranay, it is a yearly tradition!
            Its always around this time of year that all the teachers try to clear out their classrooms.
            This means a bunch of perfectly usable stuff thrown into the junk!
          </p>
          <br></br>

          <p className='blog-paragraph'>
            This year, with Vinayamanivenkatasaiharishmanaukonda (yes thats his real name) as our ring leader, we too went dumpster diving.
            We asked harish how it went, he proudly proclaimed "Um hello my name is Harish.
            So ya, it went pretty well.
            Josh found a working printer and a lot of spray paint".
            When asked to elaborate, he started talking about how he hated chocolate dipped ice cream...
          </p>
          <br></br>
          <img
            src="/images/blog/dumpsterDive/printer.webp"
            alt="Animated"
            className="responsive-image"
          />
          <br></br>
          <p className='blog-paragraph'>
            We were wondering how this affected Harish's aura and rizz.
            When asked, what do the huz think about dumpster diving, he told us this, 
            "Well I actually got a few girls to join such as regina and kate.
            They didn't actually want to go inside the dumpster, and they kinda left".
            We figured that since Harish never really had any rizz or aura anyway, it didn't make much of an impact.
          </p>

          <p className='blog-paragraph'>
            The validity of these statmeents is yet to be fact-checked by us🤔.
            Well, thats it for us for now, stay tuned and read more blogs for more non-partisan true american patriot news reporting!
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
