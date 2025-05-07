"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  link: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="gallery-outer">
        <div className="pad"></div>
        <div className="pad"></div>

        <div className="gallery-title">Check out our other blogs below⬇️</div>
        <div className="gallery-wrapper">
        <div className="fade fade-top"></div>
        <button className="scroll-button left" onClick={() => scroll("left")}>
            <ChevronLeft size={24} />
        </button>

        <div className="gallery-container" ref={containerRef}>
            {images.map((img, idx) => (
            <a key={idx} href={img.link} target="_blank" rel="noopener noreferrer" className="gallery-item">
                <img src={img.src} alt={img.alt} className="gallery-image" />
                <h2>{img.alt}</h2>
            </a>
            ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll("right")}>
            <ChevronRight size={24} />
        </button>
        <div className="fade fade-bottom"></div>
        </div>
    </div>
    
  );
};

export default ImageGallery;
