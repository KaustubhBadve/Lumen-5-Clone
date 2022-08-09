import React from 'react'
import { Box,Heading,Stack,Text } from '@chakra-ui/react'
import SampleTemplatesLayout from './VideoComponents/SampleTemplatesLayout'



const TemplateSelection = () => {
  return (

    <Box height="100vh" overflow="scroll" cursor="pointer" width="100%" pl="100px" textAlign="left" pt="45px" pr="60px">
    <Heading mb="10px">Choose a template</Heading>
    <Text fontSize="23px" fontWeight="600">Recommended color, font, and style combos, curated and ready to use.</Text>
    
    <Text fontSize="20px" mt="50px" pb="10px" id='Intro' fontWeight="600">RECENTLY USED</Text>
    <hr style={{backgroundColor:"#dddde6"}}/>

    <Stack gap="20px" mt="23px" direction="row">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Thumbnail_4a.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Preview_4a.m4v"}
        label={"Tracer"}
        />

<SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1b.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1.mp4"}
        label={"Origin"}
        />
    </Stack>


    <Text fontSize="20px" id='Modern' mt="50px" pb="10px" fontWeight="600">MODERN</Text>
    <hr style={{backgroundColor:"#dddde6"}}/>

    <Stack  mt="23px" direction="column">
      <Stack gap="20px" direction="row">
      <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1b.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1.mp4"}
        label={"Origin"}
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
         
        <Stack direction="row" gap="20px">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Saturate_v2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Saturate_v1.mp4"}
        label={"Tracer"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Odyssey_2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Odyssey_2.mp4"}
        label={"Memory"}
        />
        </Stack>  

       

    </Stack>

    <Text fontSize="20px" id='P' mt="50px" pb="10px" fontWeight="600">PROFESSIONAL</Text>
    <hr style={{backgroundColor:"#dddde6"}}/>

    <Stack  mt="23px" direction="column">
      <Stack gap="20px" direction="row">
      <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Magnifique/Preview/magnifique_Landscape_Preview.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Magnifique/Preview/magnifique_Preview_Music1.mp4"}
        label={"Magnifique"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Unity_landscape.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Unity_landscape.mp4"}
        label={"Unity"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Notice_PreviewV2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Notice-Preview-Resized.m4v"}
        label={"Notice"}
        />
        </Stack>
         
        <Stack direction="row" gap="20px">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Vault/Preview/Vault_Preview_Landscape.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Vault/Preview/Vault_Preview_Landscape_V2.mp4"}
        label={"Vault"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Feather_2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Feather.mp4"}
        label={"Feather"}
        />

<SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Vivid_v2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Vivid_v2.mp4"}
        label={"Vivid"}
        />
        </Stack>  

       

    </Stack>

    <Text fontSize="20px" id='Dynamic' mt="50px" pb="10px" fontWeight="600">DYNAMIC</Text>
    <hr style={{backgroundColor:"#dddde6"}}/>

    <Stack  mt="23px" direction="column">
      <Stack gap="20px" direction="row">
      <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Looper/Preview/New/Looper_Landscape_Preview.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1.mp4"}
        label={"Looper"}
        />

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
        </Stack>
         
        <Stack direction="row" gap="20px">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Curly/Preview/Curly_Prev_Land_v2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Saturate_v1.mp4"}
        label={"Curly"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Boldly/Preview/Boldly_Prev_Land_v2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Odyssey_2.mp4"}
        label={"Boldly"}
        />
        </Stack>  

       

    </Stack>


    <Text fontSize="20px" id='GEOMETRIC' mt="50px" pb="10px" fontWeight="600">GEOMETRIC</Text>
    <hr style={{backgroundColor:"#dddde6"}}/>

    <Stack  mt="23px" direction="column">
      <Stack gap="20px" direction="row">
      <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Aether/Previews/Aether_Landscape_Preview.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Aether/Previews/Aether_Landscape_Preview_V3.mp4"}
        label={"Aether"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Contour/Preview/Prev_Contour_Land_v1.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Contour/Preview/Prev_Contour_Land_v1.mp4"}
        label={"Contour"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Vertex/Preview/Vertex-preview_thumb.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Vertex/Preview/Vertex-preview_2.m4v"}
        label={"Vertex"}
        />
        </Stack>
         
        <Stack direction="row" gap="20px">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2_v2.mp4"}
        label={"Smart"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Ascend.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Ascend.mp4"}
        label={"Ascend"}
        />
        </Stack>  

       

    </Stack>


    <Text fontSize="20px" id='Rounded' mt="50px" pb="10px" fontWeight="600">ROUNDED</Text>
    <hr style={{backgroundColor:"#dddde6"}}/>

    <Stack  mt="23px" direction="column">
      <Stack gap="20px" direction="row">
      <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/prev_eclipse_landscape.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/prev_eclipse_landscape3.mp4"}
        label={"Eclipse"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Billow/Preview/Billow_thumbnailver4.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Billow/Preview/Billow-new_3.m4v"}
        label={"Billow"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Orbit/Previews/Preview_Orbit_Land_v2c.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Orbit/Previews/Preview_Orbit_Land_v2c.mp4"}
        label={"Orbit"}
        />
        </Stack>
         
        <Stack direction="row" gap="20px">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Circuit/Preview/Circuit_thumbnail_2.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Circuit/Preview/Preview_Circuit_02.m4v"}
        label={"Circuit"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Brilliant_v2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Brilliant_v2.mp4"}
        label={"Brilliant"}
        />
        </Stack>  

       

    </Stack>


    <Text fontSize="20px" id='GRADIENTS' mt="50px" pb="10px" fontWeight="600">GRADIENTS</Text>
    <hr style={{backgroundColor:"#dddde6"}}/>

    <Stack  mt="23px" direction="column">
      <Stack gap="20px" direction="row">
      <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Foresight/Preview/Prev_Foresight_Land.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Foresight/Preview/Prev_Foresight_Land.mp4"}
        label={"Foresight"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Polaris_landscape.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Polaris_landscape2.mp4"}
        label={"Polaris"}
        />

        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-prod-lottie/Flux/Preview/V3/Flux_Landscape_Preview_v2.png"}
        video={"https://storage.googleapis.com/lumen5-prod-lottie/Flux/Preview/V3/Flux_Landscape_Preview_v2.mp4"}
        label={"Flux"}
        />
        </Stack>
         
        <Stack direction="row" gap="20px">
        <SampleTemplatesLayout 
        imgp={"https://storage.googleapis.com/lumen5-site-images/Prev_Fresh_2.png"}
        video={"https://storage.googleapis.com/lumen5-site-images/Prev_Fresh_2_v2.mp4"}
        label={"Fresh"}
        />
        </Stack>  

       

    </Stack>
    </Box>
  )
}

export default TemplateSelection