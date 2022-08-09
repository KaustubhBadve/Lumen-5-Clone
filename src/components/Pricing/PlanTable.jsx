import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
} from "@chakra-ui/react";
import BtnComponent from "./BtnComponent";
import { CheckIcon } from "@chakra-ui/icons";
import styles from "./Pricing.module.css";
import { useSelector } from "react-redux";

const PlanTable = () => {
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <TableContainer>
      <Table justifyContent={"center"} margin={"auto"}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>
              <Box>
                <Text
                  fontSize="25px"
                  textTransform={"none"}
                  color={"black"}
                  fontWeight={"470"}
                >
                  Community
                </Text>
                <Box justifyContent={"center"} margin={"auto"}>
                  <Text
                    fontSize="14px"
                    textTransform={"none"}
                    color={"gray.500"}
                    fontWeight={"400"}
                    m={"15px 0 25px"}
                  >
                    forever free
                  </Text>
                </Box>
                <BtnComponent
                  label={isAuth ? "Current Plan" : "Get Started"}
                  btnsize={"50px"}
                />
              </Box>
            </Th>
            <Th>
              <Box>
                <Text
                  fontSize="25px"
                  textTransform={"none"}
                  color={"black"}
                  fontWeight={"470"}
                >
                  Starter
                </Text>
                <Box justifyContent={"center"} margin={"auto"}>
                  <Text
                    fontSize="14px"
                    textTransform={"none"}
                    color={"gray.500"}
                    fontWeight={"400"}
                    m={"15px 0 25px"}
                  >
                    $79USD/month
                  </Text>
                </Box>
                <BtnComponent label={isAuth ? "Upgrade" : "Get Started"} />
              </Box>
            </Th>
            <Th>
              <Box>
                <Text
                  fontSize="25px"
                  textTransform={"none"}
                  color={"black"}
                  fontWeight={"470"}
                >
                  Professional
                </Text>
                <Box justifyContent={"center"} margin={"auto"}>
                  <Text
                    fontSize="14px"
                    textTransform={"none"}
                    color={"gray.500"}
                    fontWeight={"400"}
                    m={"15px 0 25px"}
                  >
                    $199 USD/month
                  </Text>
                </Box>
                <BtnComponent
                  label={isAuth ? "Upgrade" : "Get Started"}
                  status={"active"}
                />
              </Box>
            </Th>
            <Th>
              <Box>
                <Text
                  fontSize="25px"
                  textTransform={"none"}
                  color={"black"}
                  fontWeight={"470"}
                >
                  Enterprise
                </Text>
                <Box justifyContent={"center"} margin={"auto"}>
                  <Text
                    fontSize="14px"
                    textTransform={"none"}
                    color={"gray.500"}
                    fontWeight={"400"}
                    m={"15px 0 25px"}
                  >
                    Let's talk!
                  </Text>
                </Box>
                <BtnComponent label={"Learn More"} />
              </Box>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text
                label={"Usage"}
                textAlign={"start"}
                fontWeight={"600"}
                fontSize={"20px"}
              >
                Usage
              </Text>
            </Td>
          </Tr>

          <Tr>
            <Td>
              <Text textAlign={"start"}>Videos per month</Text>
            </Td>
            <Td>Unlimited</Td>
            <Td>Unlimited</Td>
            <Td>Unlimited</Td>
            <Td>Unlimited</Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Saved templates</Text>
            </Td>
            <Td>1</Td>
            <Td>1</Td>
            <Td>3</Td>
            <Td>Custom</Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Workspaces</Text>
            </Td>
            <Td>1</Td>
            <Td>1</Td>
            <Td>3</Td>
            <Td>Custom</Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Instant videos</Text>
            </Td>
            <Td>1</Td>
            <Td>1</Td>
            <Td>10</Td>
            <Td>Custom</Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Team members</Text>
            </Td>
            <Td>1</Td>
            <Td>1</Td>
            <Td>1</Td>
            <Td>Custom</Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Brand kits</Text>
            </Td>
            <Td>0</Td>
            <Td>1</Td>
            <Td>3</Td>
            <Td>Custom</Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Translations</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          {/* second */}
          <Tr>
            <Td>
              <Text textAlign={"start"} fontWeight={"600"} fontSize={"20px"}>
                Rendering
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Resolution</Text>
            </Td>
            <Td>720p</Td>
            <Td>1080p</Td>
            <Td>1080p</Td>
            <Td>1080p</Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Landscape</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Square</Text>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Vertical</Text>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          {/* third */}
          <Tr>
            <Td>
              <Text textAlign={"start"} fontWeight={"600"} fontSize={"20px"}>
                Branding
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Branded outro</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Popular templates</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Custom outro</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Custom fonts</Text>
            </Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Custom colors</Text>
            </Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Watermark upload</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Upload your own fonts</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Custom templates</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          {/* Media */}
          <Tr>
            <Td>
              <Text textAlign={"start"} fontWeight={"600"} fontSize={"20px"}>
                Media
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>
                Millions of free—to—use videos and images
              </Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Upload your own videos & photos</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Upload your own audio tracks</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Unlimited premium media</Text>
            </Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Exclusive media marketplace</Text>
            </Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>25/month</Td>
            <Td>Custom </Td>
          </Tr>

          <Tr>
            <Td>
              <Text textAlign={"start"}>Record your own voiceover</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Icons</Text>
            </Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Upload your own custom icons</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>

          {/* team management */}
          <Tr>
            <Td>
              <Text textAlign={"start"} fontWeight={"600"} fontSize={"20px"}>
                Team management
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Brand management</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Team permissions</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Workspace management</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Two—factor authentication</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Single sign—on</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          {/* support */}
          <Tr>
            <Td>
              <Text textAlign={"start"} fontWeight={"600"} fontSize={"20px"}>
                Support
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Help center access</Text>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Email support</Text>
            </Td>
            <Td>—</Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Customized support</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text textAlign={"start"}>Invoiced billing</Text>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>— </Td>
            <Td>
              <Box as={CheckIcon} color="green.300"></Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PlanTable;
