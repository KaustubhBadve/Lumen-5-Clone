import "../Styles/Homepage.css";
import React from "react";
import { Link } from "react-router-dom";

const FooterLandingPage = () => {
  return (
    <>
      <div className="footer_container" style={{ marginTop: "31rem" }}>
        <div>
          <div>
            <img className="imgff"
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png"
              alt="footer_logo"
              style={{ width: "7.5rem", height: "2rem" }}
            />
          </div>
          <div>
            <p className="footer_para ">
              Lumen5 combines powerful A.I. with a simple drag-and-drop
              interface to help you create professional video content in
              minutes.
            </p>
          </div>
        </div>
        <div className="KK">
          <div >
            <span className="footer_span">EXPLORE</span>
            <ul className="footer_links">
              <li>About</li>
              <li>Features</li>
              <li>Careers</li>
              <li>LinkedIn</li>
              <li>Support</li>
              <li>Product Updates</li>
            </ul>
          </div>
          <div className="XX">
            <span className="footer_span">VIDEO TOOLS</span>
            <ul className="footer_links">
              <li>Add Text to Video</li>
              <li>Cut Video</li>
              <li>Merge Video</li>
              <li>Compress Video</li>
              <li>Resize Video</li>
              <li>See all</li>
            </ul>
          </div>
          <div className="XX">
            <span className="footer_span">VIDEO CREATORS</span>
            <ul className="footer_links">
              <li>Video Editor</li>
              <li>Photo Video Maker</li>
              <li>Facebook Video Maker</li>
              <li>YouTube Intro Maker</li>
              <li>Instagram Video Maker</li>
              <li>See all</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
          <span className="">Copyright © 2022 Lumen5</span>
        </div>
        <div>
          <span className="">
            <Link to="#" className="text-white">
              Terms of Use &
            </Link>{" "}
            <Link to="#" className="text-white">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterLandingPage;
