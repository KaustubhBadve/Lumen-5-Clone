import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import {
  ChatIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
  DragHandleIcon,
} from "@chakra-ui/icons";
const PriorImage = () => {
  return (
    <Box pt="20px">
      <Stack direction="row"  width="1200px" justifyContent="space-between">
        <Stack
          width="250px"
          _hover={{ backgroundColor: "gray.300" }}
          height="50px"
          color="gray.700"
          pl="10px"
          border="1px solid black"
          borderRadius="30px"
          direction="row"
          alignItems="center"
        >
          <Box>
            <i className="fa-solid fa-microphone"></i>
          </Box>

          <Button
            _hover={{ backgroundColor: "gray.300" }}
            fontSize="14px"
            p="14px"
          >
            Record your own voiceover
          </Button>
        </Stack>

        <Stack direction="row">
          <Box>
            <i className="fa-regular fa-clock"></i>
          </Box>
          <Text>00.07</Text>
          <ChevronDownIcon />
        </Stack>
      </Stack>

      <Stack justifyContent="center" direction="row" mt="140px">
        <Stack
          direction="column"
          justifyContent="center"
          gap="8px"
          color="gray"
          fontWeight="600"
          alignItems="center"
          width="50px"
          fontSize="20px"
        >
          <Box>
            <ChatIcon />
          </Box>
          <ChevronUpIcon />
          <Box>1</Box>
          <ChevronDownIcon />
          <Box>
            <i className="fa-regular fa-copy"></i>
          </Box>
          <DeleteIcon />
          <Box>
            <i className="fa-solid fa-circle-plus"></i>
          </Box>
        </Stack>

        <Box>
          <Image
            width="600px"
            src="https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Thumbnail_4a.png"
          />
        </Box>

        <Stack
          direction="column"
          justifyContent="center"
          gap="18px"
          ml="10px"
          fontSize="15px"
        >
          <Stack direction="row" alignItems="center">
            <Box>
              <i className="fa-solid fa-play"></i>
            </Box>
            <Box color="gray.600">Preview</Box>
          </Stack>

          <Stack direction="row" gap="8px" alignItems="center">
            <Box>
              <i className="fa-solid fa-clock"></i>
            </Box>
            <Box>-</Box>
            <Box color="gray.600">6s</Box>
            <Box>+</Box>
          </Stack>

          <Stack direction="row" alignItems="center">
            <DragHandleIcon />
            <Box color="gray.600">Swap Design</Box>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Box>
              <i className="fa-solid fa-shuffle"></i>
            </Box>
            <Box color="gray.600">Shuffle Colors</Box>
          </Stack>
        </Stack>
      </Stack>

      <Box fontSize="35px" display="flex" justifyContent="center" color="green.300" ml="-50px" mt="15px">
        <i className="fa-solid fa-circle-plus"></i>
      </Box>

      <Box display="flex" flexDirection="column"  width="800px"  justifyContent="center" m="auto">
      <Box fontSize="30px" color="gray.300" fontWeight="600">Outro</Box>
    
      <Box display="flex" alignContent="center" justifyContent="center"  pt="20px"  height="100px" border="3px grey" borderStyle="dashed">
        <Box borderRadius="30px" backgroundColor="gray.300" width="140px" pt="10px" display="flex" alignContent="center" justifyContent="center" height="50px">
          Show outro
        </Box>
      </Box>
      </Box>


    </Box>
  );
};

export default PriorImage;
