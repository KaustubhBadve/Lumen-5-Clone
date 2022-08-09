import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export  function AllvideosCard() {
  return (
    <Center >
      <Box
        // maxW={"550px"}
        // w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        border={"1px solid #dddee6"}
        rounded={"md"}
        overflow={"hidden"}
        width={"300px"}
        height={"300px"}
        fontSize="30px"
      >
        <Stack
          textAlign={"center"}
          p={0}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={1}
            px={2}
            color={"green.500"}
            rounded={"full"}
          >
            Hobby
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <img width="300px"  src="https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1b.png" alt="" />
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={1}>
          <List spacing={1}>
            <ListItem fontSize="19px">
              <ListIcon  as={CheckIcon} color="green.400" />
              Untitled Videos
            </ListItem>
            <ListItem fontSize="19px">
              <ListIcon as={CheckIcon} color="green.400" />
              Create Good Videos
            </ListItem>
            <ListItem fontSize="19px">
              <ListIcon as={CheckIcon} color="green.400" />
              50 identified users
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              All features
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Start your trial
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
export default AllvideosCard
