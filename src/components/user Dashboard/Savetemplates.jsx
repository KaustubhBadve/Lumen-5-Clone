import React from 'react'
import { Box,Text,Button} from '@chakra-ui/react'

const Savetemplates = () => {
  return (
    <div>
      <Box marginLeft="280px" marginTop="230px" width="800px" height="10px">
        <Text fontSize="30px">Your saved templates will appear here</Text>
        <Text fontSize="20px" color="grey">
          Speed up your workflow by saving a video outline with all your
          branding to reuse again and again. Make a new saved template now, or
          save an outline from an existing video!
        </Text>
        <Button
          width="180px"
          height="50px"
          fontSize="15px"
          _hover={{ bg: "green", bg: "rgb(40,50,138)" }}
          border="1px solid #5b4af6"
          color="white"
          backgroundColor="rgb(88,70,246)"
          marginTop="5px"
          borderRadius="60px"
        >
          New Saved Template
        </Button>
        <img src="https://storage.googleapis.com/lumen5-site-images/empty-st.png" alt="" />
      </Box>
    </div>
  );
}

export default Savetemplates