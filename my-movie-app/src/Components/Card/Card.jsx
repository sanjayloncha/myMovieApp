import React from "react";
import { GridItem, Button, Text, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import favAction from "../../Redux/Action/favAction";

export default function Card({ item, id }) {
  let dispatch = useDispatch();
  let storeData = useSelector((data) => {
    return data.favourites;
  });
  let add = (item) => {
    favAction(item, dispatch);
  };
  let a = storeData.find((el) => el === item);

  return (
    <GridItem
      w="70%"
      rounded="lg"
      overflow="hidden"
      m="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      key={id}
    >
      <Image
        src={item.Poster}
        alt="Image not found"
        h="250px"
        margin={"15px auto"}
        objectFit="contain"
        borderRadius={"2px"}
      />
      <Box w="100%" textAlign="left" >
        <Text ml={["50px","20px"]} fontWeight="bold">{item.Title}</Text>
        <Text ml={["50px","20px"]} >{item.Year}</Text>
        <Button
          _hover={{
            background: "white",
            color: "green.500",
          }}
          w={["65%","80%"]}
          display="block"
          margin="10px auto"
          bg="green.500"
          color="white"
          isDisabled={a ? true : false}
          onClick={() => add(item)}
        >
          {a ? "Added" : "Add to Favourite"}
        </Button>
      </Box>
    </GridItem>
  );
}
