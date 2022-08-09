import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ReviewCard = ({ img, title, writter }) => {
  return (
    <Box padding={"5px"} h={"auto"} width={"33.33%"}>
      <Box h={"100px"}>
        <Box
          top={"60px"}
          left={"50%"}
          w={"80px"}
          h={"80px"}
          m={" 50px 40px 50px 150px"}
          textAlign={"center"}
          borderRadius={"50%"}
          background={"#fff"}
          lineHeight={"80px"}
          boxShadow={"0 0 0 5px #f6f6f6"}
          padding={"3px"}
        >
          <Image w={"80"} borderRadius={"50px"} src={img} />
        </Box>
      </Box>
      <Box background={"white"} padding={"33px"}>
        <Text textAlign="center" fontSize="16px">
          "{title}"
        </Text>
        <Text
          textAlign="center"
          fontSize="12px"
          textTransform={"uppercase"}
          mt={"17px"}
          color="gray"
        >
          {writter}
        </Text>
      </Box>
    </Box>
  );
};

export default ReviewCard;
