import React from "react";
import { Divider, useColorModeValue } from "@chakra-ui/react";

const Frame = ({ frameColor }: { frameColor?: string }) => {
  const color = frameColor || (useColorModeValue("red", "#735F32"));

  return (
    <>
      <Divider
        borderRadius={10}
        bg={color}
        width="10px"
        h="100px"
        position="absolute"
        top={0}
        left={0}
      ></Divider>
      <Divider
        borderRadius={10}
        bg={color}
        h="10px"
        w="100px"
        position="absolute"
        top={0}
        left={0}
      ></Divider>
      <Divider
        borderRadius={10}
        bg={color}
        width="10px"
        h="100px"
        position="absolute"
        bottom={0}
        right={0}
      ></Divider>
      <Divider
        borderRadius={10}
        bg={color}
        width="100px"
        h="10px"
        position="absolute"
        bottom={0}
        right={0}
      ></Divider>
    </>
  );
};

export default Frame;
