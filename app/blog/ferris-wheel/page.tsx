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
          <div className="h1-simple">HOCO Ferris Wheel!</div>
          <div className="side-min">
            <div className="h2-simple">Written by: Sriram Sivakumar</div>
            <div className="h3-simple">- July 26th 2025</div>
          </div>
          <img
            src="/images/blog/ferrisWheel/float.gif"
            alt="Animated"
            className="responsive-image"
          />

          <p className='blog-paragraph'>
            Every year our school leadership kids and ASB make homecoming floats with cardboard and paint and wood.
            This year tho, we were commisioned by the senior class to make a model spinny ferris wheel for them.
            Specifically ASB (Annoying student Body) asked us and we got to work!
          </p>
          <br></br>

          <p className='blog-paragraph'>
            We started off by chopping up some PVC pipes with a special type of cutter. 
            They were like scissors on steroids. 
            We had to get our strongest senior sawan srivastava and kevin to cut most of them
            It was simple but satisfying work, cutting and chopping PVC together
          </p>
          <br></br>
          <img
            src="/images/blog/ferrisWheel/center.png"
            alt="Animated"
            className="responsive-image"
          />
          <br></br>

          <p className='blog-paragraph'>
            We then put together the pipes with T connectors to make the ferris wheel shape. 
            For the center, josh shankla our resident redneck cut up some wood and screwed in PVC pipes!
            This made up the center of our ferris wheel.
            The hole was meant to spin on the free axle, which was just another piece of PVC pipe. 
          </p>
          <br></br>
          <img
            src="/images/blog/ferrisWheel/base.webp"
            alt="Animated"
            className="responsive-image"
          />
          <p className='blog-paragraph'>
            My goat Josh shankla, also got some wood and made the base of the ferris wheel.
            We brought it to the lab and mounted it with eager excitement. 
            Thats when the problems started 💀. 
            The friction was wayyyy to high, the wheel could barely turn!
          </p>

          <p className='blog-paragraph'>
            Oh and there was the motor as well. 
            It was like 12 dollars and looked more like an RC car motor.
            The sprocket wasn't even compatible, there was no way it was gonna work.
            Oh, and the deadline was in 3 days😢.
            We had to lock in
          </p>

          <img
            src="/images/blog/ferrisWheel/drill.webp"
            alt="Animated"
            className="responsive-image"
          />

          <p className='blog-paragraph'>
            So, sriram, group leader, with his infinite aura, got to work. 
            We thought of buying bearings, but those were expensive and wouldn't arrive on time.
            I hoped we could just use some duct tape to tape up the axle and the wood to lower the friction enough.
            Shoutout to HENRY PING to spending hours taping up the ferris wheel axle.
            It was much more frustrating than it sounds cuz we coulnd't dissasemble the axle...
          </p>

          <img
            src="/images/blog/ferrisWheel/axle.webp"
            alt="Animated"
            className="responsive-image"
          />

          <p className='blog-paragraph'>
            After we got it taped up, sriram, with his infinite aura and proffesional graciousness found out the torque needed.
            So we had to pull a Ms.Downum and use our limited supplies to basically do a AP physics experimental design lab.
            We got some string and a water bottle. We hung the water bottle from the rim of the ferris wheel, exactly perpendicular to the ground
            We filled up the water bottle a bit by bit until it finally turned the ferris wheel.
            By measuring the volume of water, we found out the mass, and therefor force and torque needed to turn the ferris wheel!
            <br></br>
            yippeee!
          </p>

          <p className='blog-paragraph'>
            But bad news, the torque was way to high, and the bummy 12 dollar motor from allixpress was not gonna work.
            We had almost given up, where were we gonna find a DC motor large enough, not the mention the power supply!
            Thats when we found our junky old FRC robot, hidden away behind piles of junk and spiderwebs
            Maybe, just maybe, the motors and the gearbox still worked!
          </p>
          <br></br>
          <video
            src="/images/blog/ferrisWheel/finally.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "500px",
              display: "block",
              margin: "0 auto"
            }}
          />
          <br></br>

          <p className='blog-paragraph'>
            We dissasembled it and mounted it onto the ferris wheel, careful not to get our hopes up.
            As for the power supply, I brought my old car battery from my dad's toyota corolla.
            Josh shankla brought jumper cables to connect the motor to the battery
          </p>

          <p className='blog-paragraph'>
            Finally, everything was done, and it was time for a quick test run.
            We also made sure to definantly for sure no exceptions on god put on our safety goggles!
            We hooked up the motor to the battery...<br></br>
            The ferris wheel started creaking slowly, we gave it a little push, and WOOSH! 
            The wheel started spinning faster and faster. I was overjoyed, I was overwhelmed with joy. 
          </p>
          <div className="image-row">
            <img
              src="/images/blog/ferrisWheel/sky.png"
              alt="Sky"
              className="row-img"
            />
            <img
              src="/images/blog/ferrisWheel/hoco.webp"
              alt="Hoco"
              className="row-img"
            />
          </div>
          <p className='blog-paragraph'>
            So that was pretty sickk.
            Hopefully we can use it at clog rush and rallies to inc our club aura⤴️ 
            Thats it for us, BYEEE! check out our other blogs as well!👋
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
