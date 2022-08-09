import React, { useState } from "react";
import { Box, Image, Button, Stack } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import "../Landingpage/Styles/Homepage.css";
import { useDispatch } from "react-redux";

import { logout } from "../../Redux/Action";



const NavbarTempSelc = () => {
  const navigate = useNavigate();
  const [logoutbox, setlogoutbox] = useState(false)

  
const dispatch=useDispatch()
  const HandleLogout=()=>{
    navigate("/")
    dispatch(logout())
  }

  let username = localStorage.getItem("name");
  return (
    <Box>
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #dddee6"
      p="13px"
  
    >
      <Stack direction="row" alignItems="center">
        <Image
          cursor="pointer"
          onClick={() => navigate("/selectTemplate")}
          width="110px"
          src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
        />
        <Button
          width="60px"
          onClick={() => navigate("/pricing")}
          height="20px"
          fontSize="11px"
          _hover={{ color: "white", bg: "#5b4af6" }}
          border="1px solid #5b4af6"
          color="#5b4af6"
        >
          UPGRADE
        </Button>
      </Stack>
      <Stack direction="row" borderLeft="1px solid #dddee6" pl="13px">
        <BellIcon fontSize="25px" color="#5d6575" />
        <Box
          borderRadius="50%"
          textAlign="center"
          width="30px"
          height="30px"
          onClick={()=>setlogoutbox(!logoutbox)}
          bg="#dddee6"
          cursor="pointer"
        >
          {username[0]}
        </Box>

       
      </Stack>
    </Box>

    {logoutbox && 
 <div  className="dropdown-menu1" style={{position:"absolute",top:"6%" ,left:"89%",width:"200px",zIndex:"1"}}  aria-labelledby="learn-dropdown">

 <Link className="dropdown-item1" to="#">
  <Button onClick={HandleLogout}>Logout</Button>  
 </Link>
</div>}
</Box>
    
  );
};

export default NavbarTempSelc;
