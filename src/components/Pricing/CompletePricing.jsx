import { Box, Container } from "@chakra-ui/react";
import React from "react";
import NavbarLandingPage from "../Landingpage/Navbar/NavbarLandingPage";
import Pricing from "./Pricing";
import FooterLandingPage from "../Landingpage/FooterLandingPage/FooterLandingPage";
const CompletePricing = () => {
  return (
    <div>
      <NavbarLandingPage/>
      <Pricing />
      <FooterLandingPage/>
    </div>
  );
};

export default CompletePricing;
