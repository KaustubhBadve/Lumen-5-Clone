import React from 'react'
import NavbarTempSelc from './NavbarTempSelc'
import SidebarTempSelc from './SidebarTempSelc'
import TemplateSelection from './TemplateSelection'
import {Stack} from '@chakra-ui/react'
const TempSelection = () => {
  return (
    <div>
        <NavbarTempSelc/>
        <Stack direction="row">
        <SidebarTempSelc/>
        <TemplateSelection/>
        </Stack>
       
    </div>
  )
}

export default TempSelection