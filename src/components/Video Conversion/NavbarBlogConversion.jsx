import React, { useState } from "react";
import {
  BellIcon,
  CopyIcon,
  DragHandleIcon,
  EditIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Box,
  Image,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Spinner,
} from "@chakra-ui/react";
import final from "./Images/final.mp4";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { logout } from "../../Redux/Action";

const NavbarBlogConversion = ({imagePrior}) => {
  const [logoutbox, setlogoutbox] = useState(false)
  const [spinner, setspinner] = useState(false)
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  let username=localStorage.getItem("name")

  const dispatch=useDispatch()
  const HandleLogout=()=>{
    navigate("/")
    dispatch(logout())
  }

  const HandlePublish=()=>{
    setspinner(true)
    setTimeout(() => {
      setspinner(false)
      navigate("/finalvideoconversion")
    }, 4000);
  }
  return (
    <Box>
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #dddee6"
      p="13px"
      position="sticky"
      width="100%"
      backgroundColor="white"
      top="0.1%"
      left="1%"
      zIndex={1}
    >
      <Stack direction="row" alignItems="center">
        <Image
          cursor="pointer"
          onClick={() => navigate("/selectTemplate")}
          width="110px"
          src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
        />
        <Button
          width="60px"
          height="20px"
          fontSize="11px"
          _hover={{ color: "white", bg: "#5b4af6" }}
          border="1px solid #5b4af6"
          color="#5b4af6"
          onClick={()=> navigate("/pricing")}
        >
          UPGRADE
        </Button>
        <Editable defaultValue="Untitled video">
          <EditablePreview />
          <EditableTextarea height="30px" />
        </Editable>
        <EditIcon />
      </Stack>
      <Stack
        direction="row"
        gap="10px"
        alignItems="center"
        borderLeft="1px solid #dddee6"
        pl="13px"
      >
        <Button color="grey" fontWeight="500">
          Saved
        </Button>
        <Button
          _hover={{ color: "white", backgroundColor: "#1606ad" }}
          fontSize="14px"
          color="white"
          borderRadius="30px"
          border="1px solid #5b4af6"
          style={{ color: "#5846f6" }}
          width="90px"
          ml="60px"
          pr="8px"
          pl="8px"
          onClick={onOpen}
          disabled={imagePrior===false}
        >
          PREVIEW
        </Button>
        <Button
          variant="solid"
          _hover={{ color: "white", backgroundColor: "#1606ad" }}
          fontSize="14px"
          color="white"
          borderRadius="30px"
          border="1px solid #5b4af6"
          bg="#5846f6"
          width="120px"
          ml="60px"
          pr="8px"
          pl="8px"
          disabled={imagePrior===false}
          onClick={HandlePublish}
        >
          PUBLISH  {spinner ? <Spinner ml="10px"/> : "" }
        </Button>
        <DragHandleIcon />
        <BellIcon fontSize="25px" color="#5d6575" />
        <Box textAlign="center" pt="3px" borderRadius="50%"   onClick={()=>setlogoutbox(!logoutbox)} width="30px" height="30px" bg="#dddee6">
         {username[0]}
        </Box>
      </Stack>

      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal
          size="xl"
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Preview</ModalHeader>
            <ModalCloseButton />
            <hr />
            <ModalBody>
              <Box color="gray.600" mb="20px" fontSize="22px">
                Link access
              </Box>
              <Box fontSize="14px" mb="20px">
                Share this link with anyone to view and comment on a draft
                video. Anyone with access to the link will be able to preview
                the video.
              </Box>

              <Stack
                height="35px"
                borderRadius="5px"
                pl="7px"
                direction="row"
                border="1px solid gray"
              >
                <Box fontSize="15px" pt="4px">
                  lumen5.com/user/kaustubhbadve7/untitled-video-ozy0g/
                </Box>
                <Box pl="10px" pt="4px">
                  <CopyIcon />
                </Box>
                <Box pt="4px" fontSize="15px" color="gray.500">
                  Copy link
                </Box>
              </Stack>
              <Stack
                mb="30px"
                direction="row"
                justifyContent="center"
                alignItems="center"
                height="60px"
                borderRadius="6px"
                mt="30px"
                border="1px solid gray"
                borderLeft="4px solid blue"
              >
                <Box mr="20px">
                  <b>Upgrade</b> to remove Lumen5 credit scene{" "}
                  <QuestionOutlineIcon />
                </Box>
                <Button
                  ml="30px"
                  _hover={{ color: "white", backgroundColor: "#1606ad" }}
                  backgroundColor="white"
                  fontSize="13px"
                  fontWeight="550"
                  color="#5b4af6"
                  borderRadius="30px"
                  border="1px solid #5b4af6"
                  width="80px"
                  pr="8px"
                  pl="8px"
                >
                  Upgrade
                </Button>
              </Stack>

              <video src={final} autoPlay controls />
            </ModalBody>

            <ModalFooter>
              <Box fontSize="15px">
                {" "}
                <span>
                  <i class="fa-solid fa-music"></i>
                </span>{" "}
                Music : Better Tommorow{" "}
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

 

    </Box>

{logoutbox && 
  <div  className="dropdown-menu1" style={{position:"absolute",top:"8%" ,left:"89%",width:"200px",zIndex:"1"}}  aria-labelledby="learn-dropdown">
 
  <Link className="dropdown-item1" to="#">
   <Button onClick={HandleLogout}>Logout</Button>  
  </Link>
 </div>}
 
     </Box>


  );
};

export default NavbarBlogConversion;
