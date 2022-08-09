import React from 'react'
import { Heading,Text,Box,Button,Stack} from '@chakra-ui/react'
import SampleTemplatesLayout from '../Template Selection/VideoComponents/SampleTemplatesLayout'


const InstantVideos = () => {
  return (
    <div style={{paddingLeft:"30px",paddingTop:"20px"}}>

       <Text fontSize="40px" textAlign="left">
        Instant Videos
      </Text>
      <br></br>
      <Text textAlign="left" fontSize="18px" color="grey">
        These are intelligently crafted videos based on your blog posts.
      </Text>
      <Stack  mt="23px" direction="column">
      <Stack gap="20px" direction="row">
         <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Cosmo/Previews/Cosmos_landscape_thumb2.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Preview_4a.m4v"}
        label={"Cosmos"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Geek/Geek_thumbnail01.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Memory/Preview/Prev_Memory_Land_v1.mp4"}
        label={"Geek"}
        />

       <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Thumbnail_4a.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Preview_4a.m4v"}
        label={"Tracer"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Memory/Preview/Prev_Memory_Land_v1.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Memory/Preview/Prev_Memory_Land_v1.mp4"}
        label={"Memory"}
        />
      

        
        </Stack>
        <Stack gap="20px" direction="row">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Magnifique/Preview/magnifique_Landscape_Preview.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Preview_4a.m4v"}
        label={"Magnifique"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Unity_landscape.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Memory/Preview/Prev_Memory_Land_v1.mp4"}
        label={"Unity"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Notice_PreviewV2.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Preview_4a.m4v"}
        label={"Notice"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Vault/Preview/Vault_Preview_Landscape.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Memory/Preview/Prev_Memory_Land_v1.mp4"}
        label={"Vault"}
        />
      

        
        </Stack>
         {/* <Stack gap="20px" direction="row">
      
        </Stack> */}
         
       
        
       

       

    </Stack>
      

    </div>
  )
}

export default InstantVideos