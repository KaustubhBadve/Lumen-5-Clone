import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import LandingSampleTemplate from "../LandingPageVideoComponents/LandingSampleTemplate";
import "../Styles/Homepage.css";

const VideoTemplate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="video_container">
      <div className="video_d">
        <span className="video_template">Captivating video templates</span>

        <h5 className="video_drop">Drag and drop. No experience required.</h5>
      </div>
      <div className="video_converter">
        <div className="video-sub" onClick={onOpen}>
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/tb_tracer.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/tb_billow.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/tb_vertex.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/tb_circuit.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/tb_vault2.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/tb_notice.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/flux_tn.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/unity_tn.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
        <div className="video-sub">
          <LandingSampleTemplate
            className="video-sub"
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/looper_tn.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4"
            }
          />
          <div className="exploreplay-div">
            <i className="fa fa-play explore-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTemplate;
