import React from "react";

const Bespoke = () => {
  return (
    <div className="bespoke-container" style={{marginBottom:"110px"}}>
      <div className="bespoke-header">
        <div className="" style={{ textAlign: "center" }}>
          <span className="bespoke-span">Bespoke custom templates</span>
        </div>
        <h5 className="bespoke-h5">
          We work with your brand team every step of the way
        </h5>
      </div>
      <div style={{gap:"30px"}} className="bespoke-video">
        <div>
          <video
          muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src="https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4"
            className="video"
            
          />
          <div className="exploreplay-div" style={{ top: "32%", left: "43%" }}>
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <video
          muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src="https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4"
            className="video"
          />
          <div className="exploreplay-div" style={{ top: "32%", left: "43%" }}>
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <video
          muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src="https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4"
            className="video"
          />
          <div className="exploreplay-div" style={{ top: "32%", left: "43%" }}>
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <video
          muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src="https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4"
            className="video"
          />
          <div className="exploreplay-div" style={{ top: "32%", left: "43%" }}>
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bespoke;
