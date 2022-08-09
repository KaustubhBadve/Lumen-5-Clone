import React from "react";
import { Link } from "react-router-dom";

const VideoImage = () => {
  return (
    <div className="content_container" style={{ backgroundColor: "white" }}>
      <div>
        <div className="fontawesome" style={{ backgroundColor: "#02D3DA" }}>
          <i
            className="fa fa-book"
            aria-hidden="true"
            style={{ fontSize: "40px", color: "white" }}
          ></i>
        </div>
        <div className="content_span">
          <span>
            Content library with
            <br />
            millions of stock
            <br />
            photos & videos
          </span>
        </div>
        <div className="content_blog">
          The Lumen5 media library gives you easy access to millions of photos,
          video clips, and audio files, so you always have the elements you need
          to create the perfect video.
        </div>
        <div className="blog-start">
          <Link to="#" className="text-primary">
            View plans →
          </Link>
        </div>
        <div className="hr"></div>
        <div className="blog-lumen">
          “We promoted our downloadable study on top PPC skills for 2019 on
          social media using a short video created in Lumen5 in just 30 minutes,
          and decreased cost per download by 5x!”
        </div>
        <div className="d-flex mt-4 align-items-center">
          <div>
            <img
              loading="lazy"
              className="user-thumbnail rounded-circle"
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-julia-o.jpg"
              style={{ width: "52px", height: "52px" }}
            />
          </div>
          <div className="d-flex flex-column mx-3">
            <div>
              <strong>Julia Olennikova</strong>
              <span>
                , Product Marketing
                <br /> Manager
              </span>
            </div>
            <div>
              <img
                loading="lazy"
                className="company-logo"
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-semrush.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content_v">
        <img
          src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png"
          alt="video-logo"
          style={{
            width: "510px",
            height: "380px",
            marginTop: "15rem",
            marginLeft: "-3rem",
          }}
        />
      </div>
    </div>
  );
};

export default VideoImage;
