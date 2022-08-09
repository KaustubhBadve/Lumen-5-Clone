import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";

const Payment = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otpcheck");
  };
  let email = localStorage.getItem("email");
  return (
    <Container maxW={"60%"} h={"auto"}>
      <HStack
        h={"100%"}
        align={"center"}
        margin={"50px"}
        justifyContent={"center"}
      >
        {/* box 1 */}
        <Box
          ml={"20px"}
          mt={"10px"}
          paddingLeft={"30px"}
          w={"50%"}
          paddingRight={"120px"}
          h={"700px"}
        >
          <Box h={"80px"} className={styles.imgBackWrapper}>
            <Flex>
              <Box onClick={navigate("/pricing")} className={styles.backBtnDiv}>
                <Image
                  src={
                    "https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
                  }
                  h={"100px"}
                  w={"100px"}
                  className={styles.img}
                />
              </Box>
              <Box className={styles.overlay} onClick={navigate("/pricing")}>
                <Text
                  mt={"-58px"}
                  fontSize={"13px"}
                  fontWeight={"600"}
                  color={"#9d9d9d"}
                >
                  Back
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box h={"420px"} mt={"20px"}>
            <Box>
              <Text fontSize={"15px"} fontWeight={"600"} color={"#9d9d9d"}>
                Subscribe to Starter - v2 (Annual)
              </Text>
              <Flex w={"300px"}>
                <Box w={"auto"}>
                  <Text fontSize={"35px"} fontWeight={"600"}>
                    $708.00
                  </Text>
                </Box>
                <Box w={"20%"} paddingLeft={"10px"}>
                  <Text
                    mt={"5px"}
                    fontSize={"15px"}
                    color={"#9d9d9d"}
                    fontWeight={"600"}
                  >
                    per year
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex mt={"40px"} justifyContent={"space-between"}>
                <Text fontSize={"15px"} fontWeight={"600"} color={"#515151"}>
                  Starter - v2 (Annual)
                </Text>
                <Text fontSize={"15px"} fontWeight={"600"} color={"#515151"}>
                  $708.00
                </Text>
              </Flex>
              <Text mt={"-1px"} fontSize={"13px"} color={"#b3b3b3"}>
                Billed Yearly
              </Text>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"} m={"30px 0px 10px "}>
                <Text fontSize={"15px"} fontWeight={"600"} color={"#515151"}>
                  Subtotal
                </Text>
                <Text fontSize={"15px"} fontWeight={"600"} color={"#515151"}>
                  $708.00
                </Text>
              </Flex>
              <hr
                style={{
                  background: "#9d9d9d",
                  color: "#9d9d9d",
                  borderColor: "#9d9d9d",
                  height: "1px",
                }}
              ></hr>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"} m={"10px 0 20px"}>
                <Text color={"#b3b3b3"} fontSize={"15px"} fontWeight={"460"}>
                  Tax{" "}
                </Text>
                <Text color={"#b3b3b3"} fontSize={"15px"} fontWeight={"460"}>
                  $0.00
                </Text>
              </Flex>
              <hr
                style={{
                  background: "#9d9d9d",
                  color: "#9d9d9d",
                  borderColor: "#9d9d9d",
                  height: "1px",
                }}
              ></hr>
            </Box>
            <Box mt={"10px"}>
              <Flex justifyContent={"space-between"}>
                <Text fontSize={"15px"} fontWeight={"600"} color={"#515151"}>
                  Total due today
                </Text>
                <Text>$708.00</Text>
              </Flex>
            </Box>
          </Box>
        </Box>

        {/* box 2 */}
        <Box paddingLeft={"70px"} w={"50%"} paddingRight={"50px"} h={"700px"}>
          <form onSubmit={handleSubmit}>
            <Box mt={"40px"}>
              <Text
                fontSize={"20px"}
                mb={"10px"}
                fontWeight={"550"}
                color={"#9d9d9d"}
              >
                Pay with card
              </Text>
              <InputGroup>
                <InputLeftAddon children="Email" />
                {/* placeholder and value of login email  TODO*/}
                <Input
                  type="email"
                  defaultValue={email}
                  placeholder=""
                  required
                />
              </InputGroup>
            </Box>
            <Box>
              <Text
                color={"#8b8b8b"}
                mt={"20px"}
                fontSize={"12px"}
                fontWeight={"600"}
              >
                Card Information
              </Text>
              <Box>
                <InputGroup>
                  <Input
                    borderBottomLeftRadius={"0px"}
                    borderBottomRightRadius={"0px"}
                    placeholder="1234 1234 1234 1234"
                    required
                    maxLength={16}
                  />

                  <InputRightElement
                    w={"120px"}
                    gap={"3px"}
                    children={
                      <>
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
                          }
                        />
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
                          }
                        />
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
                          }
                        />
                        <Image
                          src={
                            "https://js.stripe.com/v3/fingerprinted/img/unionpay-8a10aefc7295216c338ba4e1224627a1.svg"
                          }
                        />
                      </>
                    }
                  />
                </InputGroup>

                <HStack spacing={"0px"}>
                  <Input
                    borderTop={"none"}
                    borderTopLeftRadius={"0px"}
                    borderTopRightRadius={"0px"}
                    borderBottomRightRadius={"0px"}
                    placeholder="MM / YY"
                    required
                    maxLength={5}
                  />
                  <Input
                    borderTop={"none"}
                    borderTopLeftRadius={"0px"}
                    borderTopRightRadius={"0px"}
                    borderBottomLeftRadius={"0px"}
                    placeholder="CVC"
                    required
                    maxLength={3}
                  />
                </HStack>
              </Box>
            </Box>
            <Box>
              <Text
                mt={"20px"}
                fontSize={"12px"}
                fontWeight={"600"}
                color={"#8b8b8b"}
              >
                Name on Card
              </Text>
              <Input />
            </Box>
            <Box>
              <Text
                mt={"20px"}
                fontSize={"12px"}
                fontWeight={"600"}
                color={"#8b8b8b"}
              >
                Country or region
              </Text>

              <Select placeholder="India">
                <option value="Afghanistan">Afghanistan</option>
                <option value="Comoros">Comoros </option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Chile">Chile</option>
                <option value="Chad">Chad</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Jordan">Jordan</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Serbia">Serbia</option>
                <option value="India">India</option>
                <option value="Singapore">Singapore</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Albania">Albania</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </Select>
            </Box>
            <Box
              mt={"17px"}
              borderRadius={"10px"}
              border={" 1px solid #dedede"}
              padding={"10px"}
            >
              <Checkbox>
                <Text marginLeft={"4px"} fontSize={"15px"} color={"#8b8b8b"}>
                  Save my info for 1-click checkout
                </Text>
                <Text
                  letterSpacing={"0.4px"}
                  marginLeft={"4px"}
                  fontSize={"12px"}
                  color={"#b3b3b3"}
                >
                  Pay faster on Lumen5 Technologies and thousands of sites.
                </Text>
              </Checkbox>
            </Box>
            <Box mt={"30px"} mb={"20px"}>
              <Button
                backgroundColor={"#5846f6"}
                color={"#b3b3b3"}
                w={"100%"}
                type="submit"
              >
                Subscribe
              </Button>
            </Box>
            <Box>
              <Text
                lineHeight={"14px"}
                color={"#b3b3b3"}
                fontSize={"13px"}
                textAlign={"center"}
              >
                By confirming your subscription, you allow Lumen5 Technologies
                Ltd to charge your card for this payment and future payments in
                accordance with their terms. You can always cancel your
                subscription.
              </Text>
            </Box>
          </form>
        </Box>
      </HStack>
    </Container>
  );
};

export default Payment;
