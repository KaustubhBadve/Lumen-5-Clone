import React, { useState } from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Allvideos from "./Allvideos";
import InstantVideos from "./InstantVideos";
import Brandkits from "./Brandkits";
import Savetemplates from "./Savetemplates";
import Analytics from "./Analytics";

const UserDashSidebar = () => {
    const [allvideos, setallvideos] = useState(false)
    const [instantvideos, setinstantvideos] = useState(false)
    const [brandkits, setbrandkits] = useState(false)
    const [savetemplate, setsavetemplate] = useState(false)
    const [analytics, setanalytics] = useState(false)
   const handleallVideos=()=>{
    setallvideos(true);
    setinstantvideos(false);
    setbrandkits(false);
    setsavetemplate(false);
    setanalytics(false);
   }
   const handlealinstantvideos = () => {
     setallvideos(false);
     setinstantvideos(true);
     setbrandkits(false);
     setsavetemplate(false);
     setanalytics(false);
   };
   const handlebrandkits=()=>{
    setallvideos(false);
    setinstantvideos(false);
    setbrandkits(true);
    setsavetemplate(false);
    setanalytics(false);
   }
   const handlesavedtemplate = () => {
     setallvideos(false);
     setinstantvideos(false);
     setbrandkits(false);
     setsavetemplate(true);
     setanalytics(false);
   };
   const handleanalytics = () => {
     setallvideos(false);
     setinstantvideos(false);
     setbrandkits(false);
     setsavetemplate(false);
     setanalytics(true);
   };
  return (
    <Stack direction="row">
      <Box width="300px" height="100vh" pt="50px" border="1px solid #dddee6" lineHeight="55px">
        <Stack pl="30px" direction="column" textAlign="left">
          <Link spy={true} activeClass="activeClass" to="Intro" smooth={true}>
            <Text
              _hover={{ color: "black" }}
              cursor="pointer"
              fontSize="22px"
              fontWeight="500"
              color="#838d9e"
              onClick={handleallVideos}
            >
              All videos
            </Text>
          </Link>
          <Link spy={true} to="Modern" smooth={true}>
            {" "}
            <Text
              _hover={{ color: "black" }}
              cursor="pointer"
              fontSize="22px"
              fontWeight="500"
              color="#838d9e"
              onClick={handlealinstantvideos}
            >
              Instant Videos
            </Text>
          </Link>
          <Link spy={true} to="P" smooth={true}>
            {" "}
            <Text
              _hover={{ color: "black" }}
              cursor="pointer"
              fontSize="22px"
              fontWeight="500"
              color="#838d9e"
              onClick={handlebrandkits}
            >
              Brand Kits
            </Text>
          </Link>
          <Link spy={true} to="Dynamic" smooth={true}>
            {" "}
            <Text
              _hover={{ color: "black" }}
              cursor="pointer"
              fontSize="22px"
              fontWeight="500"
              color="#838d9e"
              onClick={handlesavedtemplate}
            >
              Saved Template
            </Text>
          </Link>
          <Link spy={true} to="GEOMETRIC" smooth={true}>
            {" "}
            <Text
              _hover={{ color: "black" }}
              cursor="pointer"
              fontSize="22px"
              fontWeight="500"
              color="#838d9e"
              onClick={handleanalytics}
            >
              Analytics
            </Text>
          </Link>
          {/* <Link spy={true} to="Rounded" smooth={true}>
            {" "}
            <Text
              _hover={{ color: "black" }}
              cursor="pointer"
              fontSize="22px"
              fontWeight="500"
              color="#838d9e"
            >
              Rounded
            </Text>
          </Link> */}
          {/* <Link spy={true} to="GRADIENTS" smooth={true}>
            {" "}
            <Text
              _hover={{ color: "black" }}
              cursor="pointer"
              fontSize="22px"
              fontWeight="500"
              color="#838d9e"
            >
              Gradients
            </Text>
          </Link> */}
        </Stack>
      </Box>
      <Box>
        {analytics ? (
          <Analytics />
        ) : instantvideos ? (
          <InstantVideos />
        ) : brandkits ? (
          <Brandkits />
        ) : savetemplate ? (
          <Savetemplates />
        ) : (
          <Allvideos />
        )}
      </Box>
    </Stack>
  );
};

export default UserDashSidebar;
