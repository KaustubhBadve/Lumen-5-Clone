import React from "react";
import Caraousel from "../Landingpage/Content/Caraousel";
import ExploreVideo from "../Landingpage/Content/ExploreVideo";
import TipsTricks from "../Landingpage/Content/TipsTricks";
import FooterLandingPage from "../Landingpage/FooterLandingPage/FooterLandingPage";
import Bespoke from "./Content/Bespoke";
import ContentCreation from "./Content/ContentCreation";
import Engaging from "./Content/Engaging";
import EnterpriseCustomer from "./Content/EnterpriseCustomer";
import EnterpriseMaintain from "./Content/EnterpriseMaintain";
import EnterpriseNavbar from "./Content/EnterpriseNavbar";
import EnterpriseReview from "./Content/EnterpriseReview";
import ExploreLumen from "./Content/ExploreLumen";

const EnterpriseContent = () => {
  return (
    <div >
      <EnterpriseNavbar />
      <Engaging />
      <Bespoke/>
      <ContentCreation/>
      <ExploreLumen/>
      <EnterpriseMaintain/>
      <EnterpriseCustomer/>
      <EnterpriseReview/>
      <ExploreVideo/>
      <Caraousel/>
      <TipsTricks/>
      <FooterLandingPage/>
    </div>
  );
};

export default EnterpriseContent;
