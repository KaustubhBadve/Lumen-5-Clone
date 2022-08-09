import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Company from "./Company";
import "../Styles/Homepage.css";

const LandingPageContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className="content_container">
        <div>
          <span className="content_span">
            Video maker built to <br /> supercharge your <br /> content strategy
          </span>
          <div className="content_p">
            Easily make videos for <br /> <b>content marketing</b>, <br />{" "}
            <b>thought leadership</b>, and <br />
            <b>brand awareness</b> in a snap.
          </div>
          <div className="content-btn">
            <Link
              to="/auth/signup/"
              type="button"
             
              className="lumen5-button3 btn btn-rounded btn-primary btn-lg"
              id='AA'
            >
              <span >Sign up free</span>
            </Link>
          </div>
        </div>
        <div className="content_v">
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png"
            alt="video-logo"
            style={{ width: "510px", height: "480px" }}
          />
          <div className="icon-circle" onClick={onOpen}>
            <i
              className="fa fa-play"
              aria-hidden="true"
              style={{ color: "#5846f6", fontSize: "24px" }}
            ></i>
          </div>
        </div>
      </div>
      <div>
        <Company />
      </div>

      <Modal
        motionPreset="slideInBottom"
        size="4xl"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <video
              width="1000px"
              height="100%"
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/product-tour-header.mp4"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controls
            ></video>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LandingPageContent;
