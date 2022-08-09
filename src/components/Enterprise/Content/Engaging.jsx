import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import Company from "../../Landingpage/Content/Company";

const Engaging = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="engage-conatiner">
      <div className="content_container" style={{ backgroundColor: "#24282f" }}>
        <div>
          <span className="content_span" style={{ color: "white" }}>
            <h6 style={{ fontSize: "18px", padding: "8px" }}>ENTERPRISE</h6>
            Create engaging
            <br /> videos at scale while <br /> keeping on brand.
          </span>
          <div className="content_p" style={{ color: "white" }}>
            Lumen5 is the easiest and <br /> fastest way to create videos
            <br />
            with your own custom branded
            <br /> templates. Decentralize video <br />
            creation on your teams with <br /> confidence.
          </div>
          <div className="content-btn">
            <Link
              to="/auth/signup/"
              type="button"
              className="lumen5-button3 btn btn-rounded btn-primary btn-lg"
            >
              <span>Request a Demo</span>
            </Link>
          </div>
        </div>
        <div className="content_v">
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-header.png"
            alt="video-logo"
            style={{ width: "560px", height: "410px", margin: "7rem -6rem" }}
          />
          <div
            className="icon-circle"
            onClick={onOpen}
            style={{ top: "42%", left: "25%" }}
          >
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

export default Engaging;
