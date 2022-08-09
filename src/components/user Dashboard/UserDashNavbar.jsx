import React, { useState } from "react";
import { Box, Image, Button, Stack, Input } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Action";
import {Link} from 'react-router-dom'


const NavbarTempSelc = () => {
  const [logoutbox, setlogoutbox] = useState(false)

  const navigate=useNavigate()

  let username=localStorage.getItem("name")


  const dispatch=useDispatch()
  const HandleLogout=()=>{
    navigate("/")
    dispatch(logout())
  }

  return (
    <Box>
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #dddee6"
      p="15px"
    >
      <Stack
        direction="row"
        alignItems="center"
        width="50%"
        // border="1px solid red"
      >
        <Image
          width="150px"
          onClick={()=>navigate("/selectTemplate")}
          cursor="pointer"
          src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
        />
      </Stack>
      <Box
        borderLeft="1px solid #dddee6"
        pl="13px"
        width="22%"
        display="flex"
        alignContent="center"
        gap="10px"
      >
        <Box>
          <Input
            border="none"
            type="text"
            outline="none"
            placeholder="search your videos"
          />
        </Box>
        <Box>
        <Button
          width="80px"
          height="40px"
          fontSize="12px"
          _hover={{ color: "white", bg: "#5b4af6" }}
          border="1px solid #5b4af6"
          color="#5b4af6"
          borderRadius="20px"
          onClick={()=>navigate("/pricing")}
        >
          UPGRADE
        </Button>
        </Box>

        <Box  pt="4px">
        <BellIcon  fontSize="25px" color="#5d6575" />
        </Box>
        <Box textAlign="center" mt="3px" pt="3px" borderRadius="50%" width="30px" height="30px"  onClick={()=>setlogoutbox(!logoutbox)} cursor="pointer" bg="#dddee6">
          {username[0]}
        </Box>
      </Box>
    

    {logoutbox && 
 <div  className="dropdown-menu1" style={{position:"absolute",top:"6%" ,left:"89%",width:"200px",zIndex:"1"}}  aria-labelledby="learn-dropdown">

 <Link className="dropdown-item1" to="#">
  <Button onClick={HandleLogout}>Logout</Button>  
 </Link>
</div>}
</Box>
</Box>
  );
};


export default NavbarTempSelc;
