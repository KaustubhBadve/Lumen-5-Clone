import React, { useState } from "react";
import LandingSampleTemplate from "../LandingPageVideoComponents/LandingSampleTemplate";

const ExploreVideo = () => {
  const [Communications, setCommunication] = useState(false);
  const [marketing, setMarketing] = useState(true);
  const [promotion, setPromotion] = useState(false);
  const [people, setPeople] = useState(false);
  const [local, setLocal] = useState(false);
  const handleMarketing = () => {
    setMarketing(!marketing);
    setCommunication(false);
    setPromotion(false);
    setPeople(false);
    setLocal(false);
  };
  const handleCommunication = () => {
    setCommunication(!Communications);
    setMarketing(false);
    setPromotion(false);
    setPeople(false);
    setLocal(false);
  };
  const handlePromotion = () => {
    setPromotion(!promotion);
    setCommunication(false);
    setMarketing(false);
    setPeople(false);
    setLocal(false);
  };
  const handlePeople = () => {
    setPeople(!people);
    setCommunication(false);
    setMarketing(false);
    setPromotion(false);
    setLocal(false);
  };
  const handleLocal = () => {
    setLocal(!local);
    setPeople(false);
    setCommunication(false);
    setMarketing(false);
    setPromotion(false);
  };
  return (
    <div className="explore-container">
      <div className="explore-sub-container">
        <div className="explore-head">
          <span>Explore videos made with Lumen5</span>
        </div>
        <div className="explore-btn">
          <button
            onClick={handleMarketing}
            style={
              marketing
                ? { backgroundColor: "#5846f6", color: "white" }
                : { backgroundColor: "white", color: "blue" }
            }
          >
            Content Marketing
          </button>
          <button
            onClick={handleCommunication}
            style={
              Communications
                ? { backgroundColor: "#5846f6", color: "white" }
                : { backgroundColor: "white", color: "blue" }
            }
          >
            Communications
          </button>
          <button
            onClick={handlePromotion}
            style={
              promotion
                ? { backgroundColor: "#5846f6", color: "white" }
                : { backgroundColor: "white", color: "blue" }
            }
          >
            Promotional
          </button>
          <button
            onClick={handlePeople}
            style={
              people
                ? { backgroundColor: "#5846f6", color: "white" }
                : { backgroundColor: "white", color: "blue" }
            }
          >
            People & Culture
          </button>
          <button
            onClick={handleLocal}
            style={
              local
                ? { backgroundColor: "#5846f6", color: "white" }
                : { backgroundColor: "white", color: "blue" }
            }
          >
            Localization
          </button>
        </div>
        {local && (
          <div className="explore-template">
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%201%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(1).mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local-TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%202%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(2).mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}
        {people && (
          <div className="explore-template">
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Volunteers%20Week%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Volunteers%20Week.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture-TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}
        {promotion && (
          <div className="explore-template">
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Global%20Leader%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Global%20Leader%20(1).mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Innovation%20Awards%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20(1).mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}
        {marketing && (
          <div className="explore-template">
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content-TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}
        {Communications && (
          <div className="explore-template">
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <LandingSampleTemplate
                className="video-sub"
                imgp={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19%20TN.png"
                }
                video={
                  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19.mp4"
                }
              />
              <div className="exploreplay-div">
                <i className="fa fa-play explore-play" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreVideo;
