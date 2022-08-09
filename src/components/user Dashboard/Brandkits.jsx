import { Heading,Text,Box,Button} from '@chakra-ui/react'
import React from 'react'

const Brandkits = () => {
  return (
    <div style={{paddingLeft:"30px",paddingTop:"20px"}}>
      <Text fontSize="40px" textAlign="left">
        Brand Kits
      </Text>
      <br></br>
      <Text textAlign="left" fontSize="18px" color="grey">
        Create a custom brand kit to ensure your video always hits the right
        visual tone. Upload fonts, colors and a logo to any template.
      </Text>
      <Box marginLeft="450px" marginTop="100px">
        <img
          src="https://storage.googleapis.com/lumen5-site-images/brand_kit_empty_state.png"
          alt=""
        />
      </Box>
      <Box marginLeft="380px" marginTop="20px">
        <Text fontSize="30px">You currently have no brand kits.</Text>
        <Button
          width="130px"
          height="50px"
          fontSize="15px"
          _hover={{ bg: "green", bg: "rgb(40,50,138)" }}
          border="1px solid #5b4af6"
          color="white"
          backgroundColor="rgb(88,70,246)"
          marginTop="5px"
          borderRadius="60px"
        >
          New Brand Kit
        </Button>
      </Box>
    </div>
  );
}

export default Brandkits