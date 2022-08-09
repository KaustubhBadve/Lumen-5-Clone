import React from 'react'
import {Box,Text,Stack} from '@chakra-ui/react'
import {Link} from 'react-scroll'


const SidebarTempSelc = () => {
  return (
    <Box width="300px" height="100vh" pt="50px">
        <Stack pl="30px" direction="column" textAlign="left">
    <Link spy={true} activeClass='activeClass' to="Intro" smooth={true}><Text _hover={{color:"black"}} cursor="pointer" fontSize="22px" fontWeight="500" color="#838d9e">Recent templates</Text></Link> 
    <Link spy={true} to="Modern" smooth={true}> <Text _hover={{color:"black"}} cursor="pointer"  fontSize="22px" fontWeight="500" color="#838d9e">Modern</Text></Link>
    <Link spy={true} to="P" smooth={true}> <Text _hover={{color:"black"}} cursor="pointer"  fontSize="22px" fontWeight="500" color="#838d9e">Professional</Text></Link>
    <Link spy={true} to="Dynamic" smooth={true}> <Text _hover={{color:"black"}} cursor="pointer"  fontSize="22px" fontWeight="500" color="#838d9e">Dynamic</Text></Link>
    <Link spy={true} to="GEOMETRIC" smooth={true}> <Text _hover={{color:"black"}} cursor="pointer"  fontSize="22px" fontWeight="500" color="#838d9e">Geometric</Text></Link>
    <Link spy={true} to="Rounded" smooth={true}> <Text _hover={{color:"black"}} cursor="pointer"  fontSize="22px" fontWeight="500" color="#838d9e">Rounded</Text></Link>
    <Link spy={true} to="GRADIENTS" smooth={true}> <Text _hover={{color:"black"}} cursor="pointer"  fontSize="22px" fontWeight="500" color="#838d9e">Gradients</Text></Link>
     </Stack>
    </Box>
  )
}

export default SidebarTempSelc