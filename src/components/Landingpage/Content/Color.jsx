import React from "react";
import { Link } from "react-router-dom";

const Color = () => {
  return (
    <div className="content_container">
      <div className="content_v">
        <img
          src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png"
          alt="video-logo"
          style={{
            width: "550px",
            height: "420px",
            marginTop: "9rem",
            marginLeft: "-3rem",
          }}
        />
      </div>
      <div>
        <div className="fontawesome" style={{ backgroundColor: "#F8558E" }}>
          {/* <i
            class="fa fa-file-text-o"
            style={{ fontSize: "40px", color: "white" }}
          ></i> */}
          <i
            className="fa fa-paint-brush"
            aria-hidden="true"
            style={{ fontSize: "40px", color: "white" }}
          ></i>
        </div>
        <div className="content_span">
          <span>
            Making it easy to
            <br />
            stay on brand
          </span>
        </div>
        <div className="content_blog">
          It has never been easier to stay on brand. With Lumen5 templates, you
          can customize each video with your unique logo, watermark, fonts,
          colors, and more.
        </div>
        <div className="blog-start">
          <Link to="#" className="text-primary">
            Get started for free →
          </Link>
        </div>
        <div className="hr"></div>
        <div className="blog-lumen">
          “Whenever I got in touch with Lumen5 I felt like my suggestions
          mattered and I was being listened to. It’s like I’m co-creating in a
          tiny way. It’s a great feeling.”
        </div>
        <div className="d-flex mt-4 align-items-center">
          <div>
            <img
              loading="lazy"
              className="user-thumbnail rounded-circle"
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg"
              style={{ width: "52px", height: "52px" }}
            />
          </div>
          <div className="d-flex flex-column mx-3">
            <div>
              <strong>Promod Sharma</strong>
              <span>, Actuary & Insurance Consultant</span>
            </div>
            <div>
              <img
                loading="lazy"
                className="company-logo"
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-taxevity-color.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
