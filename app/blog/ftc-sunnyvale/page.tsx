"use client";

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
import { images } from "../scrollableData";

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
          <div className="h1-simple">FTC Sunnyvale!</div>
          <div className="side-min">
            <div className="h2-simple">Written by: Aryan Patel</div>
            <div className="h3-simple">- June 18, 2025</div>
          </div>
          <img
            src="/images/blog/mayMARS/mayMARS.webp"
            alt="Animated"
            className="responsive-image-1"
          />

          <p className='blog-paragraph'>
            In progress
          </p>

          <p className='blog-paragraph'>
            So why did we start MARS? Well its for a variety of factors!
            For one, it is good outreach and motivates students to join robotics in the future!
            It also gives us high schoolers voulunteering hours that we need to graduate!
            But mainly, it is a amazing way to fundraise! 
            Robotics is expensive, this year we burnt through around 12k.
            This was a great way to recoup that money!
          </p>
          <img
            src="/images/blog/mayMARS/help.webp"
            alt="Animated"
            className="responsive-image-1"
          />
          
          <p className='blog-paragraph'>
            <b>Code Quest</b>👽👾<br></br> 
            We asked Gupta how code quest went.
            He said "Hi, I am Arnav Gupta. 
            With the power vested in me as the Code Lead, I led Code quest. 
            Although everyone was excited to code, our "simple game" may have been a bit ambitious. 
            We didn't finish the game but we had a great time teaching and coding. 
            Just like in any other coding language, we were doing more debugging then coding.
            We are gonna simplify many things and streamline it for summer MARS"
          </p>
          <br></br>

          <video
            src="/images/blog/mayMARS/gupta.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "640px",
              display: "block",
              margin: "0 auto"
            }}
          />
          <br></br>


          <p className='blog-paragraph'>
            <b>Drive Lab</b>🪛🚗<br></br> 
            We asked Diyaan Zinjuwaria how Drive Lab went.
            He said "It went pretty well.
            All the parents really liked the slideshow where we explained the physics and 3D printing parts.
            The kids really liked the building portion and playing with the car.
            It was really stressful printing out all the 100 cars, that meant 100 frames, 400 wheels, 500 rubber bands, etc..
            Shoutout to josh shankla, logesh, and suyog for 3D printing and Aakarsh for buying the materials!"
          </p>
          <br></br>
          <video
            src="/images/blog/mayMARS/car.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "640px",
              display: "block",
              margin: "0 auto"
            }}
          />
          <br></br>
          <div className="image-row">
            <img
              src="/images/blog/mayMARS/drivelab.webp"
              alt="Sky"
              className="row-img"
            />
            <img
              src="/images/blog/mayMARS/help.webp"
              alt="Hoco"
              className="row-img"
            />
          </div>
          <br></br>

          <p className='blog-paragraph'>
            <b>Bubble Blastoff</b>🚀🫧<br></br> 
            For this event, we asked Aarohi Kulkarni how it went.
            She said "In this event, we taught kids about simple physics like Newtons 3rd law and pressure.
            We showed them how alka seltzer tablets create a bunch of gas which can create pressure to launch a model rocket.
            We then showed them how to decorate their rockets and helped them launch it!
            Overall all the kids loved it!"
          </p>
          <div className="image-row">
            <img
              src="/images/blog/mayMARS/rocket.webp"
              alt="Sky"
              className="row-img"
            />
            <img
              src="/images/blog/mayMARS/makingRocket.webp"
              alt="Hoco"
              className="row-img"
            />
          </div>
          <p className='blog-paragraph'>
            <b>Closing</b><br></br> 
            So at the end we gave the kids some snacks and let them drive around our high school robots.
            It was a great way to end our MARS workshop.
            We hope that we can continue to this year after year and never worry about fundraising again!
            Huge thanks to all the teachers, Mr. Okoye, Ms. Han, and especially Mrs. Salvi for making this possible!
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
