"use client";

import { useState } from "react";

export function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="nav">
        {/* Left side: Logo */}
        <div className="nav-left">
          <a href="/" className="logo">
            <img src="/images/icons/mascot.png" width="70" height="70" />
            <h1>MXR</h1>
          </a>
        </div>

        {/* Right side: Navigation links */}
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="/vex">VEX</a></li>
            <li><a href="/ftc">FTC</a></li>
            <li><a href="/frc">FRC</a></li>
            <li><a href="/blog">Blog🙂</a></li>
            <li><a href="/mars">M.A.R.S.🚀</a></li>
          </ul>
        </div>

        {/* Hamburger icon */}
        <div
          className={`hamburger-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sponsor button */}
      <a href="#sponsor" className="top-link">
        <div className="sponsor-border">
          <div className="sponsorbtn">
            <h1>Sponsor Us!</h1>
          </div>
        </div>
      </a>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "visible" : ""}`}>
        <ul>
          <li><a href="/vex">VEX</a></li>
          <li><a href="/ftc">FTC</a></li>
          <li><a href="/frc">FRC</a></li>
          <li><a href="/blog">Blog🙂</a></li>
          <li><a href="/mars">M.A.R.S.🚀</a></li>
        </ul>
      </div>
    </div>
  );
}
