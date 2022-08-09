import { CheckIcon } from "@chakra-ui/icons";
import { Box, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import BtnComponent from "./BtnComponent";

const PricingCard = ({
  title,
  description,
  cost,
  costDescription,
  btnLabel,
  includeHeading,
  sizeGiven,
  status,
  includeList,
}) => {
  return (
    <Box h={"65%"}>
      <Box
        textAlign={"left"}
        h={"100%"}
        w={"100%"}
        border={"1px solid #dddee6"}
        borderRadius={"10px"}
        padding={"10px 20px 40px"}
        marginBottom={"40px"}
        justifyContent={"center"}
        margin={"auto"}
      >
        <Box>
          <Text
            mt={"50px"}
            fontWeight={"600"}
            fontSize={"22px"}
            lineHeight={"22px"}
            color={"black"}
          >
            {title}
          </Text>
          <Text mt={"10px"} fontSize="13px" lineHeight="18px">
            {description}
          </Text>
        </Box>
        <Box mt={"50px"} mb={"60px"}>
          <Text
            fontWeight={"650"}
            fontSize={"25px"}
            color={"black"}
            lineHeight={"22px"}
          >
            {cost}
            {title === "Community" || title === "Enterprise" ? (
              ""
            ) : (
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                USD
              </span>
            )}
          </Text>
          <Text mt={"10px"} fontSize={"12px"} lineHeight="18px">
            {costDescription}
          </Text>
        </Box>
        <Box mb={"30px"}>
          <BtnComponent
            label={btnLabel}
            sizeGiven={sizeGiven}
            status={status}
          />
        </Box>
      </Box>
      <Box textAlign={"left"}>
        <Heading m={"35px 10px 10px 10px"} as="h6" size="xs">
          {includeHeading}:
        </Heading>
        <List spacing={2} ml={"20px"}>
          {includeList.map((item, index) => (
            <ListItem>
              <Box mb={"-8px"}>
                <ListIcon key={index} as={CheckIcon} color="green.500" />
                <span style={{ fontSize: "13px" }}> {item.title}</span>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PricingCard;
