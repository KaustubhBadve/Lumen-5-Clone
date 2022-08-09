import {
  ChatIcon,
  ChevronDownIcon,
  LinkIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import NavbarTempSelc from "../user Dashboard/UserDashNavbar";
import final from "./Images/final.mp4";
import {useNavigate} from "react-router-dom"




const FinalVideoDownload = () => {
  let username=localStorage.getItem("name")
  const navigate=useNavigate()
  return (
    <Box>
      <NavbarTempSelc />
      <Stack direction="row" width="100%" ml="130px">
        <Stack direction="column">
          <Stack
            mr="170px"
            direction="row"
            pr="30px"
            pl="20px"
            justifyContent="space-between"
            mb="30px"
            width="1000px"
            alignItems="center"
            height="70px"
            borderRadius="6px"
            mt="30px"
            border="1px solid #dddee6"
            borderLeft="4px solid blue"
          >
            <Box mr="20px" color="gray600">
              <b>Upgrade</b> to remove Lumen5 credit scene{" "}
              <QuestionOutlineIcon color="gray.500" />
            </Box>
            <Button
              ml="30px"
              _hover={{ color: "white", backgroundColor: "#1606ad" }}
              backgroundColor="white"
              fontSize="15px"
              fontWeight="550"
              color="#5b4af6"
              borderRadius="30px"
              border="1px solid #5b4af6"
              width="110px"
              pr="8px"
              pl="8px"
              onClick={()=> navigate("/pricing")}
            >
              Upgrade
            </Button>
          </Stack>

          <video width="1000px" autoPlay controls src={final} />

          <Stack
            width="1000px"
            p="20px"
            border="1px solid #dddee6"
            direction="column"
            mb="-10px"
          >
            <Box fontSize="25px">Untitled video</Box>
            <Stack direction="row">
              <Box
                borderRadius="50%"
                width="60px"
                fontSize="24px"
                height="60px"
                pt="14px"
                textAlign="center"
                backgroundColor="gray.400"
              >
               {username[0]}
              </Box>
              <Stack pr="500px" pt="14px" lineHeight="15px">
                <Box fontSize="18px">{username}</Box>
                <Box fontSize="15px">Published on Jul 24</Box>
              </Stack>

              <Box>
                <Button
                  _hover={{ color: "white", backgroundColor: "#1606ad" }}
                  backgroundColor="white"
                  fontSize="15px"
                  fontWeight="550"
                  color="#5b4af6"
                  borderRadius="30px"
                  border="1px solid #5b4af6"
                  width="110px"
                  height="50px"
                  pr="8px"
                  mr="20px"
                  pl="8px"
                >
                  Edit Video
                </Button>
                <a href={final} download>
                <Button
                  _hover={{ color: "white", backgroundColor: "#1606ad" }}
                  backgroundColor="#5b4af6"
                  height="50px"
                  fontSize="15px"
                  fontWeight="550"
                  color="white"
                  borderRadius="30px"
                  border="1px solid #5b4af6"
                  width="110px"
                  pr="8px"
                  pl="8px"
                >
                  Download
                </Button></a> 
              </Box>
            </Stack>
          </Stack>
          <Stack
            width="1000px"
            p="20px"
            height="100px"
            border="1px solid #dddee6"
            direction="row"
            borderTop="none"
            alignContent="center"
          >
            <Box
              justifyContent="space-between"
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <LinkIcon />
              <Box
                border="1px solid #dddee6"
                height="30px"
                pr="10px"
                pl="10px"
                borderRadius="6px"
              >
                Anyone with the link <ChevronDownIcon />
              </Box>

              <Box
                marginLeft="400px"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Box ml="10px">
                  <i className="fa-solid fa-file-lines"></i> Transscript
                </Box>
                <Box ml="10px">
                  <i className="fa-solid fa-crop-simple"></i> Resize
                </Box>
                <Box ml="10px">
                  <i class="fa-solid fa-link"></i> Copy link
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>

        <Box   p="20px" height="100vh">
          <Stack justifyContent="center"  direction="row">
            <Box fontSize="25px" color="gray.600">
              Comments
            </Box>
            <Box fontSize="25px" color="gray.400">
              Scene 1
            </Box>
          </Stack>
          <img
            width="350px"
            height="100px"
            src="https://storage.googleapis.com/lumen5-site-images/collab-comment.png"
          />
          <Box fontSize="23px" color="gray.800" textAlign="center">
            Be the first to leave a <br />
            comment on this scene
          </Box>

          <Button 
              _hover={{ color: "white", backgroundColor: "#1606ad" }}
              backgroundColor="white"
              ml="50px"
              fontSize="15px"
              fontWeight="550"
              color="#5b4af6"
              borderRadius="30px"
              border="1px solid #5b4af6"
              width="250px"
              pr="8px"
              mt="60px"
              pl="8px">
                <ChatIcon mr="15px"/>Comment on this scene</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FinalVideoDownload;
