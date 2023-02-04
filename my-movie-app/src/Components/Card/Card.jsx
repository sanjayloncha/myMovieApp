import React, { useState } from "react";
import { Box, Image, Text, GridItem, Button } from "@chakra-ui/react";
import favAction from "../../Redux/Action/favAction";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {

  let [disable, setDisable] = useState(false);
  let dispatch = useDispatch();
  let add = () => {
    favAction(item, dispatch);
    setDisable(true);
    
  };

  let { Title, Year, Poster, imdbID } = item;
  return (
    <GridItem
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      p="5"
      m="5"
    >
      <Image
        src={Poster}
        w="40%"
        margin={"auto"}
        boxShadow={"0 0 10px black"}
        borderRadius={"2px"}
      />
      <Box p="5">
        <Text fontWeight="bold">{Title}</Text>
        <Text>{Year}</Text>
        <Button colorScheme="blue" isDisabled={disable} onClick={add}>
          Add to Favourite
        </Button>
      </Box>
    </GridItem>
  );
};

export default Card;
