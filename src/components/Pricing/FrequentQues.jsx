import { Box, Container, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const FrequentQues = () => {
  return (
    <Container
      maxW={"100%"}
      h={"400px"}
      paddingTop={"60px"}
      paddingBottom={"60px"}
    >
      <HStack h={"auto"} w={"100%"}>
        <Box h={"auto"} padding={"10px"} w={"55%"}>
          <Text textAlign={"left"} fontSize={"20px"}>
            What if I only need Lumen5 for a set amount of time?
          </Text>
          <Text textAlign={"left"} mt={"25px"} fontSize={"15px"}>
            That's fine! You can cancel your account anytime.
          </Text>
        </Box>
        <Box h={"auto"} padding={"10px"} w={"50%"}>
          <Text textAlign={"left"} fontSize={"20px"}>
            What happens to my videos if I cancel?
          </Text>
          <Text textAlign={"left"} mt={"25px"} fontSize={"15px"}>
            All the videos you create are yours to keep forever and ever.
          </Text>
        </Box>
      </HStack>
      {/* 2nd flex */}
      <HStack h={"auto"} w={"100%"} mt={"50px"}>
        <Box h={"auto"} padding={"10px"} w={"55%"}>
          <Text textAlign={"left"} fontSize={"20px"}>
            Do you have a non-profit discount?
          </Text>
          <Text textAlign={"left"} mt={"25px"} fontSize={"15px"}>
            We do. Contact us for more information.
          </Text>
        </Box>
        <Spacer />
        <Box h={"auto"} padding={"10px"} w={"50%"}>
          <Text textAlign={"left"} fontSize={"20px"}>
            How do I pay for my plan?
          </Text>
          <Text textAlign={"left"} mt={"25px"} fontSize={"15px"}>
            You can pay with Visa, Mastercard, and American Express. All prices
            are in USD. Invoiced billing is available on the Enterprise plan.
          </Text>
        </Box>
      </HStack>
    </Container>
  );
};

export default FrequentQues;
