import React from 'react'
import { Box,Heading,Stack,Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


const SieBar = () => {
  return (
   <Stack  direction="column" pl="20px" pt="20px" color="grey" borderRight="1px solid #dddee6" height="100vh" gap="14px" justifyItems="left" width="80px" fontSize="17px">
           <Stack direction="column">
            <HamburgerIcon color="#5846f6"/>
            <Text  color="#5846f6" fontSize="15px">Story</Text>
           </Stack>

           <Stack>
            <Box><i className="fa-solid fa-photo-film"></i></Box>
            <Text fontSize="15px">Media</Text>
           </Stack>

           <Stack>
            <Box><i className="fa-solid fa-icons"></i></Box>
            <Text fontSize="15px">Icons</Text>
           </Stack>

           <Stack>
            <Box><i className="fa-solid fa-music"></i></Box>
            <Text fontSize="15px">Music</Text>
           </Stack>

           <Stack>
            <Box><i className="fa-brands fa-accusoft"></i></Box>
            <Text fontSize="15px">Style</Text>
           </Stack>

           <Stack>
            <Box><i className="fa-brands fa-square-font-awesome-stroke"></i></Box>
            <Text fontSize="15px">Format</Text>
           </Stack>
           
   </Stack>
  )
}

export default SieBar