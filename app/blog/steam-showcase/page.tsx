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

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const images = [
    { src: "/images/blog/ferrisWheel.png", alt: "Hoco Ferris Wheel", link: "https://example.com/ferris" },
    { src: "/images/blog/ferrisWheel.png", alt: "Downtown Lights", link: "https://example.com/downtown" },
    { src: "/images/blog/ferrisWheel.png", alt: "Concert Night", link: "https://example.com/concert" },
    { src: "/images/blog/ferrisWheel.png", alt: "City Bridge", link: "https://example.com/bridge" },
  ];

  return (
    <main className="pt-10 flex min-h-screen flex-col items-center justify-between bg-#0F151F" style={{ backgroundColor: "#0F151F" }}>
      <div className="gap"></div>

      <div className="blog-layout">
        <div className="body">
          <div className="h1-simple">Steam Showcase</div>
          <div className="side-min">
            <div className="h2-simple">Written by: lskdjfklsd</div>
            <div className="h3-simple">- July 26th 2025</div>
          </div>

          {/* Your blog text content */}
          <p style={{ color: "white", marginTop: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula...
          </p>
        </div>
        <div className="divider" />

        <ImageGallery images={images} />
      </div>

      <SponsorUs />
      <div className="pad"></div>
      <Endbar />
    </main>
  );
}
