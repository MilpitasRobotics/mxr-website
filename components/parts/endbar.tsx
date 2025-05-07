import React from "react";
import FrostedSponsorCard from "./sponsor-card";
import { TypewriterEffect } from "../tools/typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import Contact from "./contact";

/**/


function Endbar() {
  return (
    
    <div className="endbar">
      <div className="pad"></div>
        <TypewriterEffect words={[{text:"Meet"},{text:"our"},{text:"Sponsors!🙂"}]} className="h2" />
      <div className="pad"></div>

      <div className="row">
        <div className="column">
          <img src="/images/sponsors/xd.jpg"></img>
        </div>
        <div className="column">
          <img src="/images/sponsors/musd.png"></img>
          
        </div>
        <div className="column">
          <img src="/images/sponsors/robosource.jpg"></img>
          
        </div>
        <div className="column">
          <img src="/images/sponsors/servicenow.jpeg"></img>
          
        </div>
        <div className="column">
          <img src="/images/sponsors/gogosqueeze.png"></img>

        </div>
        <div className="column">
          <img src="/images/sponsors/ACS.jpeg"></img>

        </div>
        <div className="column">
          <img src="/images/sponsors/microsoft.jpg"></img>

        </div>
        <div className="column">
          <img src="/images/sponsors/nasa.png"></img>

        </div>
    
        
      </div>
      <div className="pad"></div>

      <div className="bottom">
        <div className="bottom-side">
          <img src="images/icons/mascot.png" width="80" height="80"></img>
          <h1>MXR</h1>
        </div>
        <div className="pad"></div>

        <p>© 2023 M.X.R. All rights reserved.</p>
        <p>All rights reserved</p>
        <p>Made with 💖 & 🙉</p>
        <p>Code licensed under MIT</p>
      </div>
        
    </div>
  );
}

export default Endbar;