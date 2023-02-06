import React, { useState, useEffect } from "react";
import { GridItem, Button, Text, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import favAction from "../../Redux/Action/favAction";

export default function Card({ item, id }) {
  let [state, setState] = useState(false);
  let dispatch = useDispatch();
  let storeData = useSelector((data) => {
    return data.favourites;
  });
  let add = (item) => {
    favAction(item, dispatch);
  };

  let a = storeData.find(el=>el===item) ;

  return (
      <GridItem
        maxW="sm"
        boxShadow={"0 0 10px black"}
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        p="5"
        m="20px auto"
        key={id}
      >
        <Image
          src={item.Poster}
          alt="Image not found"
          w="100%"
          h="320px"
          margin={"auto"}
          boxShadow={"0 0 5px black"}
          borderRadius={"2px"}
        />
        <Box p="5">
          <Text fontWeight="bold">{item.Title}</Text>
          <Text>{item.Year}</Text>
          <Button
            _hover={{
              background: "white",
              color: "green.500",
              fontWeight: "bold",
            }}
            marginTop="10px"
            bg="green.500"
            color="white"
            isDisabled={ a ? true : false}
            onClick={() => add(item)}
          >
            {a ? "Added" : "Add to Favourite"}
          </Button>
        </Box>
      </GridItem>
  );
}
