import React from "react";
import { Link,NavLink } from "react-router-dom";
import { Text, Flex,Spacer,Box } from "@chakra-ui/react";
import navStyle from "./NavBar.module.css" ;

export default function Navbar() {
  return (
    <Box bg="green.500" color="white"   >
      <Flex w="80%" m="auto"  >
        <Text fontSize="4xl">
          <NavLink to="/" activeClassName={navStyle.selected} >Home</NavLink>
        </Text>
        <Spacer />
        <Text fontSize="4xl">
          <NavLink to="/favourite" activeClassName={navStyle.selected} >Favourite</NavLink>
        </Text>
      </Flex>
    </Box>
  );
}
