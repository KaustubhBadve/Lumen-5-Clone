import React from "react";

const ExploreLumen = () => {
  return (
    <div className="content_container">
      <div className="content_v">
        <img
          src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-scale.png"
          alt="video-logo"
          style={{
            width: "510px",
            height: "589px",
            marginTop: "0rem",
            marginLeft: "-3rem",
          }}
        />
      </div>
      <div>
        <div className="fontawesome">
          <i
            className="fa fa-file-text-o"
            style={{ fontSize: "40px", color: "white" }}
          ></i>
        </div>
        <div className="content_span">
          <span>
            Produce videos at scale
            <br />
            and in‑house. Seriously
            <br />
            easy.
          </span>
        </div>
        <div className="explore-para">
          Lumen5 is an unbelievably easy to use video creator built specifically
          for users without experience in video editing. The workflow is as
          simple as creating a PowerPoint presentation, and the output can be
          indistinguishable from professional agency-produced videos.
        </div>
        <div className="explore-para">
          You can create professional video from any text-based content and cut
          video creation time to an average of six minutes in Lumen5.
        </div>
        <div className="explore-para">
          Enable your global teams to produce localized content for their
          audience as well in a snap. Just don't tell your boss it was this easy
        </div>
      </div>
    </div>
  );
};

export default ExploreLumen;
