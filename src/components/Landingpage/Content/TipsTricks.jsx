import React from "react";
import { Link } from "react-router-dom";
import pricing from "./Pricing.png";

const TipsTricks = () => {
  return (
    <div className="tips-container">
      <div>
        <span>Tips and tricks for amplifying your brand with video</span>
      </div>
      <div className="tips-box">
        <div>
          <div>
            <img
              src="https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg"
              alt="tips-logo"
            />
          </div>
          <div className="tips-blog">
            <p>BLOG</p>
            <h5>Video Marketing: How to Get Started [Step by Step]</h5>
          </div>
          <div className="tips-footer">
            <Link to="#">Read story →</Link>
          </div>
        </div>
        <div className="">
          <div>
            <div>
              <img
                src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg"
                alt="tips-logo"
              />
            </div>
            <div className="tips-blog">
              <p>BLOG</p>
              <h5>
                How to Increase Your Facebook Video Views [Complete Guide]
              </h5>
            </div>
            <div className="tips-footer">
              <Link to="#">Read story →</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div>
              <img
                src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg"
                alt="tips-logo"
              />
            </div>
            <div className="tips-blog">
              <p>BLOG</p>
              <h5>The Importance of Video in Your Content Strategy</h5>
            </div>
            <div className="tips-footer">
              <Link to="#">Read story →</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing dd" style={{margin:"auto",marginLeft:"260px"}}>
        <img src={pricing} alt="" />
      </div>
    </div>
  );
};

export default TipsTricks;
