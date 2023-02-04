import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom" ;
import {
  Grid,
  Button,
  Text,
  Box,
  Image,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import filterAction from "../../Redux/Action/filterAction";

export default function Favourite() {
  let dispatch = useDispatch();
  let data = useSelector((store) => {
    return store.favourites;
  });
  // console.log(data);
  let remove = (id) => {
    // console.log(id);
    let filteredList = data.filter((e) => {
      return e.imdbID != id;
    });
    filterAction(filteredList, dispatch);
    // console.log(filteredList);
  };

  return (
    <div>
      <h1>Welcome to fav component</h1>
      <Grid templateColumns="repeat(3,1fr)">
        {data.length != 0 ? (
          data.map((item, id) => {
            return (
              <GridItem
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                p="5"
                m="5"
                key={id}
              >
                <Image
                  src={item.Poster}
                  w="40%"
                  margin={"auto"}
                  boxShadow={"0 0 10px black"}
                  borderRadius={"2px"}
                />
                <Box p="5">
                  <Text fontWeight="bold">{item.Title}</Text>
                  <Text>{item.Year}</Text>
                  <Flex>
                  <Button><Link to={`/view/${item.Title}`} >View</Link></Button>
                    <Button
                      colorScheme="blue"
                      onClick={() => remove(item.imdbID)}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Box>
              </GridItem>
            );
          })
        ) : (
          <h1>No data available...</h1>
        )}
      </Grid>
    </div>
  );
}
