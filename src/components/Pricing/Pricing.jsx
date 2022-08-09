import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BtnComponent from "./BtnComponent";
import CustomerReview from "./CustomerReview";
import PlanTable from "./PlanTable";
import PricingCard from "./PricingCard";
import styles from "./Pricing.module.css";
import FrequentQues from "./FrequentQues";
import pricingImg from "./pricing.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Pricing = () => {
  const [billMonthly, setBillMonthly] = useState(true);
  const [billYearly, setBillYearly] = useState(false);
  const isAuth = useSelector((state) => state.isAuth);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (isAuth) navigate("/dashboard");
    else navigate("/auth/signup");
  };
  const handleBillMonthly = () => {
    setBillMonthly(true);
    setBillYearly(false);
  };
  const handleBillYearly = () => {
    setBillMonthly(false);
    setBillYearly(true);
  };
  
  return (
    <Box align="center" justify="center" mt={"150px"}>
      <Box maxW={"100%"}>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          w={"100%"}
        >
          <Text
            textAlign={"center"}
            fontSize={"calc(1.25625rem + 0.075vw)"}
            fontWeight="400"
            lineHeight={"1.33"}
            letterSpacing="normal"
          >
            PRICING
          </Text>
        </Box>
        <Box
          w={"50%"}
          justifyContent={"center"}
          margin={"auto"}
          alignItems={"center"}
        >
          <Text
            textAlign={"center"}
            pt={"20px"}
            fontSize={"calc(1.35625rem + 1.275vw)"}
            fontWeight="650"
            lineHeight={"50px"}
            letterSpacing="0.1px"
          >
            Plans for your video content creation strategy
          </Text>
        </Box>
        <Box
          justifyContent={"center"}
          margin={"auto"}
          h={"63px"}
          border={"1px solid #48505e"}
          w={"253px"}
          borderRadius={"30px"}
          mt={"50px"}
          mb={"80px"}
        >
          <Flex align="center" justify="center">
            <ButtonGroup variant="outline" spacing={"-0.1"} cursor={"pointer"}>
              <Button
                borderRadius={"30px"}
                border={"none"}
                fontWeight={"400"}
                h={"61px"}
                fontSize={"20px"}
                onClick={handleBillMonthly}
                className={
                  billMonthly ? styles.stybillActive : styles.stybillDeactive
                }
                _hover={"backgroundColor:"}
                transition={"all ease-in-out .01s"}
              >
                Bill monthly
              </Button>
              <Button
                borderRadius={"30px"}
                border={"none"}
                fontWeight={"400"}
                h={"61px"}
                fontSize={"20px"}
                onClick={handleBillYearly}
                className={
                  billYearly ? styles.stybillActive : styles.stybillDeactive
                }
                _hover={"backgroundColor:"}
                transition={"all ease-in-out .01s"}
              >
                Bill yearly
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </Box>
      <HStack
        justifyContent={"center"}
        mt="30px"
        margin={"auto"}
        gap={"5px"}
        w={"95%"}
        h={"600px"}
      >
        <Box h={"100%"} w={"14%"}>
          <PricingCard
            sizeGiven={"100%"}
            title="Community"
            description="For casual creators and video enthusiasts"
            cost="$0"
            costDescription="forever free"
            btnLabel={isAuth ? "Current Plan" : "Get Started"}
            includeHeading="What's included "
            billMonthly={billMonthly}
            includeList={[
              { title: "Unlimited videos" },
              { title: "Contains Lumen5 watermark" },
              { title: "720 video resolution" },
            ]}
          />
        </Box>
        <Box h={"100%"} w={"14%"}>
          <PricingCard
            sizeGiven={"100%"}
            title="Starter"
            description="For the individual content creator"
            cost={billMonthly ? "$79" : "$59"}
            costDescription="per month, billed yearly"
            btnLabel={isAuth ? "Upgrade" : "Get Started"}
            includeHeading="Everything in Free, plus"
            includeList={[
              { title: "No Lumen5 branding" },
              { title: "50M stock photos & videos" },
              { title: "Custom colors & styles" },
              { title: "1080p video resolution" },
            ]}
          />
        </Box>

        <Box h={"100%"} w={"14%"}>
          <PricingCard
            sizeGiven={"100%"}
            title="Professional"
            description="For the professional video storyteller"
            cost={billMonthly ? "$199" : "$149"}
            costDescription="per month, billed yearly"
            btnLabel={isAuth ? "Upgrade" : "Get Started"}
            status={"active"}
            includeHeading="Everything in Starter, plus"
            includeList={[
              { title: "50M stock photos & videos" },
              { title: "Custom watermarks" },
              { title: "Upload your own fonts" },
              { title: "Multiple saved templates" },
              { title: "Multiple brand kits" },
            ]}
          />{" "}
        </Box>
        <Box h={"100%"} w={"14%"}>
          <PricingCard
            sizeGiven={"100"}
            title="Enterprise"
            description="For marketing & communication team"
            cost="Custom"
            costDescription="per month, billed yearly"
            btnLabel="Learn More"
            includeHeading="Everything in Professional, plus"
            includeList={[
              { title: "Lumen5 design team" },
              { title: "Bespoke branded templates" },
              { title: "Dedicated customer success" },
              { title: "Teams & collaboration" },
              { title: "Enterprise-level security" },
            ]}
          />
        </Box>
      </HStack>
      <Box justifyContent={"center"} m={"40px 0px 40px"}>
        <Box>
          <Text mb={"90px"} fontSize="23px" textAlign={"center"}>
            Over 6 million videos created by thousands of businesses
          </Text>
        </Box>

        <HStack
          w={"100%"}
          align="center"
          mb={"80px"}
          justify={"center"}
          gap={"10px"}
        >
          <Box>
            {/* scroll */}
            <BtnComponent label={"Compare Plan"} />
          </Box>
          <Box>
            <Text fontWeight={"bold"}> or</Text>
          </Box>

          <Box>
            <BtnComponent status={"active"} label={"Get Started Today"} />
          </Box>
        </HStack>
      </Box>
      {/* Customer REview */}
      <CustomerReview />
      {/* Choose plan table  */}
      <Box h={"auto"} w={"100%"}>
        <VStack
          h={"auto"}
          maxW={"1260px"}
          justifyContent={"center"}
          margin={"auto"}
        >
          <Box>
            <Text
              letterSpacing={"0.7px"}
              fontSize="30px"
              fontWeight={"440"}
              m={"40px 0px 25px"}
            >
              Choose the plan that's right for you
            </Text>
          </Box>
          <PlanTable />
        </VStack>
      </Box>
      {/* frequent question */}
      <Container maxW={"60%"}>
        <Box justifyContent={"center"} margin={"auto"}>
          <Text
            fontSize="25px"
            textAlign={"center"}
            fontWeight={"500"}
            mt={"80px"}
            mb={"10px"}
          >
            A few frequently asked questions
          </Text>
        </Box>
        <FrequentQues />
      </Container>
      <Box justifyContent={"center"} margin={"auto"}>
        <Image
          ml={"370px"}
          mt={"120px"}
          mb={"-410px"}
          src={pricingImg}
          onClick={handleSignUp}
        />
      </Box>
    </Box>
  );
};

export default Pricing;
