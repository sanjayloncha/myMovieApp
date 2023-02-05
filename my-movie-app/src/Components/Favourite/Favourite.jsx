import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Text,
  Box,
  Image,
  GridItem,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import filterAction from "../../Redux/Action/filterAction";

export default function Favourite() {
  let [state, setState] = useState(true);
  let dispatch = useDispatch();
  let data = useSelector((store) => {
    return store.favourites;
  });

  let remove = (id) => {
    let filteredList = data.filter((e) => {
      return e.imdbID != id;
    });
    filterAction(filteredList, dispatch);
  };

  return (
    <div>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gridGap={3}
      >
        {data.length != 0
          ? data.map((item, id) => {
              return (
                <GridItem
                  maxW="sm"
                  borderWidth="1px"
                  rounded="lg"
                  boxShadow="0 0 10px black"
                  overflow="hidden"
                  p="2"
                  m="20px auto"
                  key={id}
                >
                  <Image
                    src={item.Poster}
                    w="100%"
                    h="320px"
                    margin={"auto"}
                    boxShadow={"0 0 10px black"}
                    borderRadius={"2px"}
                  />
                  <Box p="5">
                    <Text fontWeight="bold">{item.Title}</Text>
                    <Text>{item.Year}</Text>
                    <Flex
                      w="80%"
                      m="auto"
                      gap={10}
                      marginTop="10px"
                      justifyContent={"space-between"}
                    >
                      <Button p="20px">
                        <Link to={`/view/${item.Title}`}>View</Link>
                      </Button>
                      {/* <Spacer /> */}
                      <Button
                        p="20px"
                        _hover={{
                          background: "white",
                          color: "green.500",
                          fontWeight: "bold",
                        }}
                        bg="green.500"
                        color="white"
                        onClick={() => remove(item.imdbID)}
                      >
                        Remove
                      </Button>
                    </Flex>
                  </Box>
                </GridItem>
              );
            })
          : null}
      </Grid>
      {data.length == 0 ? (
        <Box w={["90%","60%","50%"]} m="auto">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy6o9Zxvma0Col4J5ufcAXZx6yo9isGyRyw&usqp=CAU"
            w="50%"
            bg="whiteAlpha.200"
            margin={"20px auto"}
            borderRadius={"2px"}
          />
          <Button
            p="10px"
            w={["70%","60%","40%"]}
            background="red"
            color="white"
            _hover={{
              background: "white",
              color: "red",
              fontWeight: "bold",
            }}
          >
            <Link to="/">Search movie !</Link>
          </Button>
        </Box>
      ) : null}
    </div>
  );
}
