import React from "react";
import { Routes, Route } from "react-router-dom";
import TempSelection from "./Template Selection/TempSelectionCombine";
import VideoConversionCombine from "./Video Conversion/VideoConversionCombine";
import LandingPage from "./Landingpage/LandingPage";
import CompletePricing from "./Pricing/CompletePricing";
import Login from "./Login&Signup/Login";

import CombineAllUserDas from "./user Dashboard/CombineAllUserDas";
import Otp from "./Payment/Otp";
import Confirmation from "./Payment/Confirmation";
import Payment from "./Payment/Payment";
import SignUp from "./Login&Signup/SignUp";
import EnterpriseContent from "./Enterprise/EnterpriseContent";
import FinalVideoDownload from "./Video Conversion/FinalVideoDownload";
import {RequireAuth} from './HOC/RequireAuth'
const MainRoutings = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<CompletePricing />} />
      <Route path='/payment' element={<RequireAuth><Payment/></RequireAuth>} />
      <Route path="/otpcheck" element={<RequireAuth><Otp /></RequireAuth>} />
      <Route path="/confirmation" element={<RequireAuth><Confirmation/></RequireAuth>} />

      <Route path="/enterprise" element={<EnterpriseContent/>} />
      {/* TODO  req auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/selectTemplate" element={<RequireAuth><TempSelection /></RequireAuth> } />
      <Route path="/dashboard" element={<RequireAuth><CombineAllUserDas /></RequireAuth>} />
      <Route
        path="/blogtoVideoConversion"
        element={<RequireAuth><VideoConversionCombine /></RequireAuth>}
      />
      <Route path="/finalvideoconversion" element ={<RequireAuth><FinalVideoDownload/></RequireAuth>} />
    </Routes>
  );
};

export default MainRoutings;