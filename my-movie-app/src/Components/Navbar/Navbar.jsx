import React,{useState} from "react";
import {NavLink } from "react-router-dom";
import { Text, Flex,Spacer,Box,Button } from "@chakra-ui/react";

export default function Navbar() {
  const [theme,setTheme] = useState("light") ;
  const activeLink = {
    textDecoration : "underline",
  }

  return (
    <Box bg="blue.500" color="white"   >
      <Flex w="80%" m="auto"  >
        <Text fontSize={["20px", "25px"]} p="10px" >
          <NavLink to="/" style={({isActive})=>{
            return isActive?activeLink:null
          }} >Home</NavLink>
        </Text>
        <Spacer />
        <Text fontSize={["20px", "25px"]} p="10px" >
          <NavLink to="/favourite" style={({isActive})=>{
            return isActive?activeLink:null
          }} >Favourite</NavLink>
        </Text>
      </Flex>
    </Box>
  );
}
