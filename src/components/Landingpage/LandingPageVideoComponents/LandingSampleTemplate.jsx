import React, { useState } from "react";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import HoverVideoPlayer from "react-hover-video-player";
// import PausedOverlay from "./PausedOverlay";
// import LoadingOverlay from "./LoadingOverlay";
// import { InfoIcon } from "@chakra-ui/icons";
import LandingLoadingOverlay from "./LandingLoadingOverlay";
import LandingPausedOverlay from "./LandingPausedOverlay";
import "../Styles/Homepage.css";

// {videoLink,Label}

const LandingSampleTemplate = ({ imgp, video }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }
  return (
    <Box
      onMouseOver={over}
      onMouseOut={out}
      width="350px"
      height="200px"
      borderRadius="20px"
      // border="1px solid #dddde6"
      // className="video-sub"
    >
      <HoverVideoPlayer
        videoSrc={video}
        pausedOverlay={<LandingPausedOverlay imgp={imgp} />}
        loadingOverlay={<LandingLoadingOverlay />}
      />

      <Modal
        motionPreset="slideInBottom"
        size="4xl"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preview template</ModalHeader>
          <hr style={{ backgroundColor: "#dddde6" }} />
          <ModalCloseButton />
          <ModalBody>
            <video
              width="1000px"
              height="100%"
              src={video}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controls
            ></video>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LandingSampleTemplate;
