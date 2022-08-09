import { Stack,Box,useColorModeValue,Text,Heading} from '@chakra-ui/react'
import { TimeIcon,CalendarIcon,RepeatIcon } from '@chakra-ui/icons';
import React from 'react'

const Analytics = () => {
  return (
    <div>
      <Text fontSize="40px" textAlign="left" margin="50px" >Analytics Overview</Text>
      <Stack direction="row">
        <Stack
       direction="row" gap="5px"
      >

        <hr style={{ backgroundColor: "#dddde6" }} />
        <Stack gap="20px"  direction="row">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            border={"2px solid #dddee6"}
            rounded={"md"}
            overflow={"hidden"}
            width={"350px"}
            height={"200px"}
            // backgroundColor={"rgb(88,70,246)"}
          >
            <Stack direction="row" gap="80px">
              <Text
              fontSize="22px"
              // fontWeight="30"
              justifyContent="center"
              textAlign="left"
              marginLeft="15px"
              color="grey"
              text
            >
              Videos Published

            </Text>
            <Box >
              <CalendarIcon fontSize="40px" marginTop="20px" color="blue"/>
            </Box>
            </Stack>
            <Box>
              <Text
              fontSize="30px"
              // fontWeight="30"
              justifyContent="center"
              textAlign="left"
              marginLeft="15px"
              color="black"
              text
              >
                0
              </Text>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Stack
       direction="row" gap="5px" marginTop="200px"
      >

        <hr style={{ backgroundColor: "#dddde6" }} />
        <Stack gap="20px"  direction="row">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            border={"2px solid #dddee6"}
            rounded={"md"}
            overflow={"hidden"}
            width={"350px"}
            height={"200px"}
            // backgroundColor={"rgb(88,70,246)"}
          >
            <Stack direction="row" gap="80px">
              <Text
              fontSize="22px"
              // fontWeight="30"
              justifyContent="center"
              textAlign="left"
              marginLeft="15px"
              color="grey"
              text
            >
              Creation Time Spent

            </Text>
            <Box >
              <TimeIcon fontSize="40px" marginTop="20px" color="rgb(92,214,110)"/>
            </Box>
            </Stack>
            <Box>
              <Text
              fontSize="25px"
              // fontWeight="30"
              justifyContent="center"
              textAlign="left"
              marginLeft="15px"
              color="grey"
              text
              >
                Not enough data
              </Text>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Stack
       direction="row" gap="5px" marginTop="50px"
      >

        <hr style={{ backgroundColor: "#dddde6" }} />
        <Stack gap="20px"  direction="row">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            border={"2px solid #dddee6"}
            rounded={"md"}
            overflow={"hidden"}
            width={"350px"}
            height={"200px"}
            // backgroundColor={"rgb(88,70,246)"}
          >
            <Stack direction="row" gap="80px">
              <Text
              fontSize="22px"
              // fontWeight="30"
              justifyContent="center"
              textAlign="left"
              marginLeft="15px"
              color="grey"
              text
            >
              Credits remaning in billing cycle

            </Text>
            <Box >
              <RepeatIcon fontSize="30px" marginTop="10px" color="rgb(255,218,154)"/>
            </Box>
            </Stack>
            <Box>
              <Text
              fontSize="30px"
              // fontWeight="30"
              justifyContent="center"
              textAlign="left"
              marginLeft="15px"
              color="black"
              text
              >
                0
              </Text>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Stack
       direction="row" gap="5px" marginTop="50px"
      >

        <hr style={{ backgroundColor: "#dddde6" }} />
        <Stack gap="20px"  direction="row">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            border={"2px solid #dddee6"}
            rounded={"md"}
            overflow={"hidden"}
            width={"350px"}
            height={"200px"}
            // backgroundColor={"rgb(88,70,246)"}
          >
            <Stack direction="row" gap="80px">
              <Text
              fontSize="28px"
              // fontWeight="80"
              justifyContent="center"
              textAlign="left"
              marginLeft="15px"
              color="black"
              text
            >
              Time Member Video Count
              <hr/>

            </Text>
            </Stack>
            <Box>
              <Text
              fontSize="20px"
              // fontWeight="30"
              justifyContent="center"
              textAlign="left"
              margin ="15px"
              color="black"
              text
              >
                User
              </Text>
            </Box>
          </Box>
        </Stack>
      </Stack>


      </Stack>
      
    </div>
  );
}

export default Analytics