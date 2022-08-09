import React from "react";
import {useNavigate} from "react-router-dom"
import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AllvideosCard from "./AllvideosCard";

const Allvideos = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Heading fontSize="32px" fontWeight="500" textAlign="left" margin="20px">
        All Videos
      </Heading>

      <Stack
        direction="row"
        gap="5px"
        marginTop="50px"
      >
        <hr style={{ backgroundColor: "#dddde6" }} />
        <Stack gap="20px" direction="row">
          <Box
            onClick={() => navigate("/selectTemplate")}
            cursor="pointer"
            bg={useColorModeValue("white", "gray.800")}
            border={"1px solid #dddee6"}
            rounded={"md"}
            overflow={"hidden"}
            width={"300px"}
            height={"300px"}
            backgroundColor={"rgb(88,70,246)"}
          >
            <Text
              fontSize="80px"
              fontWeight="30"
              color="white"
              display="flex"
              justifyContent="center"
              marginTop="50px"
            >
              +
            </Text>
            <Text
              fontSize="40px"
              fontWeight="30"
              color="white"
              textAlign="center"
              marginTop="50px"
            >
              New Videos
            </Text>
          </Box>
          <AllvideosCard />
        </Stack>
      </Stack>
    </div>
  );
};

export default Allvideos;
