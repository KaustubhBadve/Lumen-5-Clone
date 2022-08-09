import { ChatIcon, ChevronDownIcon, ChevronUpIcon, DeleteIcon, DragHandleIcon } from '@chakra-ui/icons'
import { Box,Button,Heading,Image,Input,Stack,Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import one from './Images/one.png'
import two from './Images/two.png'
import three from './Images/three.png'
import four from './Images/four.png'
import five from './Images/five.png'
import Six from './Images/Six.png'
import seven from './Images/seven.png'
import eight from './Images/eight.png'
import nine from './Images/nine.png'
import ten from './Images/ten.png'
import './Conversion.css'



const ImagesAfterConversion = () => {
  return (
   <Box height="95vh"  overflow="scroll">
    <Stack direction="row" mt="15px" width="1200px" justifyContent="space-between">
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
            p="10px"
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



      <Stack className='two' justifyContent="center" direction="row" mt="140px">
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
            src={one}
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
  

      <div className="threehover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>

      
      <Stack className='four' justifyContent="center" direction="row" mt="40px">
        <Stack
          direction="column"
          justifyContent="center"
          gap="8px"
          color="gray"
          fontWeight="600"
          alignItems="center"
          width="50px"
          fontSize="20px"
          className='AA'
        >
          <Box>
            <ChatIcon />
          </Box>
          <ChevronUpIcon />
          <Box>2</Box>
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
            src={two}
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

      <div className="fourhover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>

      <Stack className='five' justifyContent="center" direction="row" mt="40px">
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
          <Box>3</Box>
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
            src={three}
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

      <div className="fivehover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>

      <Stack className='six' justifyContent="center" direction="row" mt="40px">
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
          <Box>4</Box>
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
            src={four}
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

      <div className="fivehover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>


      <Stack className='six' justifyContent="center" direction="row" mt="40px">
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
          <Box>5</Box>
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
            src={five}
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

      <div className="sixhover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>

      <Stack className='seven' justifyContent="center" direction="row" mt="40px">
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
          <Box>6</Box>
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
            src={Six}
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

      <div className="sevenhover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>

      <Stack className='seven' cursor="pointer"  justifyContent="center" direction="row" mt="40px">
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
          <Box>7</Box>
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
            src={seven}
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

      <div className="sevenhover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>


      <Stack className='eight' cursor="pointer" justifyContent="center" direction="row" mt="40px">
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
          <Box>8</Box>
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
            src={eight}
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

      <div className="eighthover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>

      <Stack className='nine' cursor="pointer" justifyContent="center" direction="row" mt="40px">
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
          <Box>9</Box>
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
            src={nine}
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

      <div className="ninehover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>

        <Stack className='ten' cursor="pointer" justifyContent="center" direction="row" mt="40px">
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
            <Box>10</Box>
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
                src={ten}
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

      <div className="tenhover"  >
        <i className="fa-solid fa-circle-plus"></i>
      </div>
   </Box>
  )
}

export default ImagesAfterConversion