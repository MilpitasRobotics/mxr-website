import React from "react";
import FrostedSponsorCard from "./sponsor-card";
import { TypewriterEffect } from "../tools/typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import Contact from "./contact";
import { HeroHighlight, Highlight } from "@/components/tools/hero-highlight";

import { IBM_Plex_Mono } from "next/font/google";


import FadeInOnScroll from "@/components/tools/fade-in-on-scroll";
import BlogCard from "@/components/parts/blog-cards";

import { MoveRightIcon } from "lucide-react";

import { motion, LayoutGroup } from "framer-motion";
/**/


function SponsorUs() {
  return (
    <HeroHighlight className="px-10 space-y-8">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          viewport={{ once: true}}
          className="space-y-12 text-[28px] lg:text-7xl px-4 font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <Highlight className="h2">
            Want to sponsor us?
          </Highlight>
        </motion.h1>
        {/* desktop prospectus link */}
        <Link href="/prospectus.pdf" className="hidden lg:flex">
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="flex flex-col gap-y-1 text-4xl text-blue-400 font-bold w-full items-center justify-center"
          >
              <div className="flex flex-row gap-x-4">
                <motion.div
                  variants={{
                    rest: { x: -50 },
                    hover: { x: 0 },
                  }}
                  transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  <MoveRightIcon size={36} />
                </motion.div>
                View our sponsors prospectus
              </div>
              <motion.div
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
                className="bg-blue-400 w-[35rem] h-1">
              </motion.div>
          </motion.div>
        </Link>
        {/* mobile prospectus link */}
        <Link href="/prospectus.pdf" className="lg:hidden">
          <div className="text-blue-400 text-xl font-bold text-center">
            View our sponsors prospectus
          </div>
        </Link>
      </HeroHighlight>
    
        
  );
}

export default SponsorUs;