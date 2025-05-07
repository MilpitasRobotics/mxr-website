import React from "react";
import { TypewriterEffect } from "../tools/typewriter-effect";

function BlogCard(){
    return (
        <div>
            
            <div className='blog-row'>
            <div className='blog-column'>
                <a href="/blog/steam-showcase">
                <div className='blog-card'>
                <h2>Steam Showcase</h2>
                <img src="images/blog/SteamShowcase.png"></img>
                </div>
                </a>
                
            </div>
            <div className='blog-column'>
                <a href="/blog/guest-speakers">
                    <div className='blog-card'>
                    <h2>Guest Speakers</h2>
                    <img src="images/blog/guest2.png"></img>
                    </div>
                </a>
                
            </div>
            <div className='blog-column'>
                <a href="/blog/ftc-sunnyvale">

                <div className='blog-card'>
                <h2>FTC Sunnyvale comp</h2>
                <img src="images/blog/SunnyvaleComp.png"></img>
                </div>
                </a>
            </div>
            </div>

            <div className='blog-row'>
            <div className='blog-column'>
                <a href="/blog/ferris-wheel">

                <div className='blog-card'>
                <h2>HOCO ferris wheel</h2>
                <img src="images/blog/ferrisWheel.png"></img>
                </div>
                </a>
                
            </div>
            <div className='blog-column'>
                <a href="/blog/john-sinnot">
                <div className='blog-card'>
                <h2>John Sinnot Elementery classes</h2>
                <img src="images/blog/sinnotPic.png"></img>
                </div>
                </a>
            </div>
            <div className='blog-column'>
                <a href="/blog/vex-worlds">
                <div className='blog-card'>
                <h2>Vex Worlds</h2>
                <img src="images/blog/vexWorlds.png"></img>
                </div>
                </a>
            </div>
            </div>

            
        </div>
    );

}

export default BlogCard