import React from "react";
import { TypewriterEffect } from "../tools/typewriter-effect";

function BlogCard2(){
    return (
        <div>
            <div className='blog-row'>
            <div className='blog-column'>
                <a href="/blog/dumpster-dive">
                <div className='blog-card'>
                <h2>MXR Dumpster Dive???</h2>
                <img src="images/blog/dumpsterDive/harish.webp"></img>
                </div>
                </a>
                
            </div>
            <div className='blog-column'>
                <a href="/blog/go-kart-1">
                    <div className='blog-card'>
                    <h2>Go-kart part 1</h2>
                    <img src="images/blog/goKart1/main.webp"></img>
                    </div>
                </a>
                
            </div>
            <div className='blog-column'>
                <a href="/blog/state-advocacy">

                <div className='blog-card'>
                <h2>State advocacy</h2>
                <img src="images/blog/stateAdvocacy/main.png"></img>
                </div>
                </a>
            </div>
            </div>

            <div className='blog-row'>
            <div className='blog-column'>
                <a href="/blog/vex-rookie-comp">

                <div className='blog-card'>
                <h2>Vex 1669Y NorCal Silicon Valley Tourney!</h2>
                <img src="images/blog/vexRookieComp/main.png"></img>
                </div>
                </a>
                
            </div>
            <div className='blog-column'>
                <a href="/blog/sdlkj">
                <div className='blog-card'>
                <h2>NA</h2>
                <img src="images/blog/vexStates/main.png"></img>
                </div>
                </a>
            </div>
            <div className='blog-column'>
                <a href="/blog/vex-worlds">
                <div className='blog-card'>
                <h2>NA</h2>
                <img src="images/blog/vexWorlds.png"></img>
                </div>
                </a>
            </div>
            </div>

            
        </div>
    );

}

export default BlogCard2