import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import EmptyBox from "./EmptyBox";
import FilledBox from "./FilledBox";
import FilledboxCombine from "./FilledboxCombine";

const ImportUrl = ({ setimagePrior }) => {
  const [inpValue, setinpValue] = useState("");
  const [boxChange, setboxChange] = useState(false);

  const HandleInport = () => {
    if (inpValue === "https://blog.masaischool.com/") {
      setboxChange(true);
    }
  };

  return (
    <Box width="490px" border="1px solid #dddee6" borderLeft="none">
      <Box borderBottom="1px solid #dddee6" height="75px">
        <Stack pt="20px" mr="20px" direction="row" alignItems="center">
          <span style={{ fontSize: "18px" }}>
            <i className="fa-solid fa-file-circle-plus"></i>
          </span>
          <Input
            onChange={(e) => setinpValue(e.target.value)}
            width="75%"
            placeholder="Paste a URL to your blog/article"
            variant="flushed"
          />
            <Button
              _hover={{ color: "white", backgroundColor: "#1606ad" }}
              backgroundColor="#5846f6"
              fontSize="13px"
              fontWeight="550"
              color="white"
              borderRadius="30px"
              border="1px solid #5b4af6"
              width="80px"
              pr="8px"
              onClick={HandleInport}
              pl="8px"
              disabled={inpValue.length==0}
            >
              IMPORT
            </Button>
        </Stack>

        {boxChange ? <FilledboxCombine /> : <EmptyBox />}

        <Stack direction="row">
          <Box
            border="1px solid #dddee6"
            fontSize="14px"
            pt="6px"
            pl="20px"
            color="gray"
            width="65%"
            height="40px"
          >
            Use A.I to generate a summary{" "}
            <span style={{ marginLeft: "20px" }}>
              <i className="fa-solid fa-angle-up"></i>
            </span>
          </Box>
          <Button
            onClick={() => setimagePrior(true)}
            _hover={{ color: "white", backgroundColor: "#1606ad" }}
            backgroundColor="#5846f6"
            fontSize="14px"
            color="white"
            borderRadius="30px"
            border="1px solid #5b4af6"
            disabled={boxChange === false}
            width="120px"
            pr="10px"
            pl="10px"
            pt="4px"
          >
            Convert to video
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ImportUrl;
