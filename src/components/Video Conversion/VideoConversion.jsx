import React, { useState } from 'react'
import NavbarBlogConversion from './NavbarBlogConversion'
import SieBar from './SieBar'
import { Box,Heading,Stack,Text } from '@chakra-ui/react'
import ImportUrl from './ImportUrl'
import PriorImage from './PriorImage'
import ImagesAfterConversion from './ImagesAfterConversion'
import CombineAfterImgandLoading from './CombineAfterImgandLoading'

const VideoConversion = () => {
  const [imagePrior, setimagePrior] = useState(false)


  return (
    <Box height="85vh">
    <NavbarBlogConversion imagePrior={imagePrior}/>
    <Stack direction="row"> 
    <SieBar/>
    <ImportUrl setimagePrior={setimagePrior}/>
    {imagePrior ? <CombineAfterImgandLoading/> : <PriorImage/>}
    
    </Stack>

    </Box>
  )
}

export default VideoConversion