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
  Spacer
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
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gridGap={3} >
        {data.length != 0 ? (
          data.map((item, id) => {
            return (
              <GridItem
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                boxShadow="0 0 10px black"
                overflow="hidden"
                p="2"
                m="30px auto"
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
                  <Flex w="80%" m="auto" p="20px" >
                    <Button>
                      <Link to={`/view/${item.Title}`}>View</Link>
                    </Button>
                    <Spacer />
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
