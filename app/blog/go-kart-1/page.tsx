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
          <div className="h1-simple">2024 Summer Gokart!</div>
          <div className="side-min">
            <div className="h2-simple">Written by: Sriram Sivakumar</div>
            <div className="h3-simple">- July 13th 2025</div>
          </div>
          <img
            src="/images/blog/goKart1/main.webp"
            alt="Animated"
            className="responsive-image"
          />
          <p className='blog-paragraph'>
            Wassup. So over the the 2024 summer, we were really eager to start FRC.
            Our plan was to use the old FRC tank bot froun like 2008, revamp it, and use it for advertising.
            So we snuck into the lab and took the parts to ADITYAAAA's house.
          </p>
          <br></br>
          <video
            src="/images/blog/goKart1/printer.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "700px",
              display: "block",
              margin: "0 auto"
            }}
          />
          <br></br>
          <p className='blog-paragraph'>
            So first off, we started with cadding the gokart in onshape.
            We used some polycarb and standoffs to make a custom gearbox.
            In thoery, it worked pretty alright, but it was really annoying to manualy messure and drill and cut.
            We also had to 3D print some gears and we made a lot of errors when making the gearbox which made it less sturdy.
          </p>

          <img
            src="/images/blog/goKart1/shreyasu.webp"
            alt="Animated"
            className="responsive-image"
          />

          <p className='blog-paragraph'>
            We used a random old chair and took it apart and mounted it to the gokart.
            We just plucked some caster wheels from some random shopping cart from smart & final.
            For legal purposes, that last sentance was a joke by the way.
            Overall, we finished the mechanical stuff just fine, and it was onto the electronics and coding!
          </p>
          <br></br>

          <video
            src="/images/blog/goKart1/test.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "700px",
              display: "block",
              margin: "0 auto"
            }}
          />
          <br></br>
          <p className='blog-paragraph'>
            For the electrical, we decided to just go with an arduino to control some old VEX motor controllers.
            We were also using CIM motors and a 12v car battery. Thats when the problems started.
            The vex motor contorllers simply could not supply enough current, perhaps because they were old.
            We also didn't have enough controllers for each motor so it had to supply current to 3 motors which didn't help
            In the end, school started as well, and we had to ditch the project... for now
          </p>

          <br></br>
          <video
            src="/images/blog/goKart1/yay.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "700px",
              display: "block",
              margin: "0 auto"
            }}
          />
          <br></br>
          <p className='blog-paragraph'>
            We asked our resident ape, aditya, what he thought about the car. He told us "So like basically webuilt an f1 car. 
            We also learned a lot of engineering principles, but probably commited more OSHA violations"
            
          </p>
          
          <p className='blog-paragraph'>
            
            But we didn't loose hope. Next summer, we are continuing the gokart project.
            We plan to use actual FRC electrical components, custom cnc gearboxes, pneumatic wheels, and most importantly a speaker.
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
