import React from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="content_container">
      <div className="content_v">
        <img
          src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png"
          alt="video-logo"
          style={{
            width: "510px",
            height: "380px",
            marginTop: "9rem",
            marginLeft: "-3rem",
          }}
        />
      </div>
      <div className="NN">
        <div className="fontawesome">
          <i
            className="fa fa-file-text-o"
            style={{ fontSize: "40px", color: "white" }}
          ></i>
        </div>
        <div className="content_span">
          <span>
            Transform blog posts
            <br />
            into videos with A.I.
          </span>
        </div>
        <div className="content_blog">
          Starting from a blank page is hard — and with Lumen5, you don’t have
          to. Our AI-powered technology helps you storyboard your ideas, fit
          your content to a layout, and find music and visuals that enhance your
          message.
        </div>
        <div className="blog-start">
          <Link to="#" className="text-primary">
            Get started for free →
          </Link>
        </div>
        <div className="hr"></div>
        <div className="blog-lumen">
          “Lumen5 has enabled us to create more videos and drive more traffic,
          while having more time to invest in other projects.”
        </div>
        <div className="d-flex mt-4 align-items-center">
          <div>
            <img
              loading="lazy"
              className="user-thumbnail rounded-circle"
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg"
              style={{ width: "52px", height: "52px" }}
            />
          </div>
          <div className="d-flex flex-column mx-3">
            <div>
              <strong>Drew Sykes</strong>
              <span>, Social Media Director</span>
            </div>
            <div>
              <img
                loading="lazy"
                className="company-logo"
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-nc-red.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
