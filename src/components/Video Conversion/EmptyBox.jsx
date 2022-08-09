import React from 'react'
import { Box, Textarea } from '@chakra-ui/react'



const EmptyBox = () => {
  return (
    <Box height="670px">
    <Textarea  height="620px" placeholder={` 👋 Welcome to Lumen5! \n 📝 PREPARE YOUR SCRIPT \n Paste the URL from your article or blog in the field \n above or copy/paste text directly in this text box \n \n 🏗️ BUILD YOUR VIDEO WITH SCENES \n Click the green (+) button or drag text and media \n into the editor to create new scenes. \n \n 🥳 POPULATE YOUR SCENES WITH MEDIA \n Drag images and videos from the media tab on to \n your scenes. Upload your own or select from our \n stock media library. \n \n Can't find right image? No worries - we offer \n many scene designs that convey your messege \n wit words and graphics only. `} p="11px" border="none" mt="20px" lineHeight="30px" aria-multiline={true}/>
  </Box>
  )
}

export default EmptyBox