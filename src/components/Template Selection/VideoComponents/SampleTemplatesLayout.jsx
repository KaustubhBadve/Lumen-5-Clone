import React, { useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const SampleTemplatesLayout = ({ imgp, video, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const HandleLoading = () => {
    navigate("/blogtoVideoConversion");
  };

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
      width="330px"
      height="230px"
      borderRadius="5px"
      border="1px solid #dddde6"
    >
      <HoverVideoPlayer
        videoSrc={video}
        pausedOverlay={<PausedOverlay imgp={imgp} />}
        loadingOverlay={<LoadingOverlay />}
      />
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        pr="20px"
        alignItems="center"
      >
        <Box pl="5px" fontSize="18px" fontWeight="600">
          {label}
        </Box>
        {isVisible ? (
          <Button
            onClick={onOpen}
            height="35px"
            _hover={{ color: "white", backgroundColor: "#5b4af6" }}
            width="90px"
            color="#5b4af6"
            borderRadius="30px"
            border="1px solid #5b4af6"
          >
            Preview
          </Button>
        ) : (
          ""
        )}
      </Stack>

      <Modal
        motionPreset="slideInBottom"
        size="2xl"
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
            <Text fontWeight="bold" mb="1rem">
              {label}
            </Text>

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

          <ModalFooter width="100%">
            <Box display="flex" alignItems="center" gap="3px" fontSize="24px" fontWeight="600" mr="20px">
              Format <InfoIcon />
            </Box>
            <Stack direction="row" gap="5px" alignItems="center">
              <Box cursor="pointer" border="3px solid #5846f6" p="7px">
                <Box bg="#bcb4fb" p="7px" borderRadius="7px">
                  <Text color="blue" fontWeight="400">
                    16:9
                  </Text>
                </Box>
              </Box>

              <Box cursor="pointer" p="7px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="45px"
                  height="45px"
                  bg="gray.300"
                  p="7px"
                  borderRadius="7px"
                >
                  <Text color="black" fontWeight="400">
                    1:1
                  </Text>
                </Box>
              </Box>

              <Box cursor="pointer" p="7px">
                <Box
                  width="35px"
                  height="50px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.300"
                  p="7px"
                  borderRadius="7px"
                >
                  <Text color="black" fontWeight="400">
                    9:16
                  </Text>
                </Box>
              </Box>

              <Box cursor="pointer" p="7px">
                <Box
                  width="35px"
                  height="50px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.300"
                  borderRadius="7px"
                >
                  <Text color="black" fontWeight="400">
                    9:16
                  </Text>
                </Box>
              </Box>
            </Stack>

            <Button
              _hover={{ color: "white", backgroundColor: "#5846f6" }}
              color="white"
              borderRadius="30px"
              border="1px solid #5b4af6"
              colorScheme="blue"
              ml="60px"
              pr="8px"
              pl="8px"
              onClick={() => {
                onClose();
                navigate("/blogtoVideoConversion");
              }}
            >
              USE THIS TEMPLATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SampleTemplatesLayout;
