import React from 'react'


import { Box, Image, Text, Flex } from "@chakra-ui/react";

const Card = (props) => {
    console.log(props.item) ;
    let {title,year,Poster} = props.item ;
  return (
    <Flex
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      p="5"
      m="5"
    >
      <Image src={Poster} w="40%" />
      <Box p="5">
        <Text fontWeight="bold">{title}</Text>
        <Text>{year}</Text>
      </Box>
    </Flex>
  );
};

export default Card;