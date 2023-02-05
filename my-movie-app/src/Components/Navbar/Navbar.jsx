import React from "react";
import {NavLink } from "react-router-dom";
import { Text, Flex,Spacer,Box } from "@chakra-ui/react";

export default function Navbar() {
  let activeLink = {
    color : "black"
  }
  return (
    <Box bg="green.500" color="white"   >
      <Flex w="80%" m="auto"  >
        <Text fontSize={["2xl", "3xl", "4xl"]} p="10px" >
          <NavLink to="/" style={({isActive})=>{
            return isActive?activeLink:null
          }} >Home</NavLink>
        </Text>
        <Spacer />
        <Text fontSize={["2xl", "3xl", "4xl"]} p="10px" >
          <NavLink to="/favourite" style={({isActive})=>{
            return isActive?activeLink:null
          }} >Favourite</NavLink>
        </Text>
      </Flex>
    </Box>
  );
}
