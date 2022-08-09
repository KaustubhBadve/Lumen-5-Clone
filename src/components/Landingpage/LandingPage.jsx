import React from "react";
import BlogPost from "./Content/BlogPost";
import Caraousel from "./Content/Caraousel";
import Color from "./Content/Color";
import ExploreVideo from "./Content/ExploreVideo";
import LandingPageContent from "./Content/LandingPageContent";
import TipsTricks from "./Content/TipsTricks";
import VideoImage from "./Content/VideoImage";
import VideoTemplate from "./Content/VideoTemplate";
import FooterLandingPage from "./FooterLandingPage/FooterLandingPage";
import NavbarLandingPage from "./Navbar/NavbarLandingPage";

const LandingPage = () => {
  return (
    <div>
      <NavbarLandingPage />
      <LandingPageContent />
      <VideoTemplate />
      <BlogPost />
      <VideoImage />
      <Color />
      <ExploreVideo />
      <Caraousel />
      <TipsTricks />
      <FooterLandingPage />
    </div>
  );
};

export default LandingPage;
