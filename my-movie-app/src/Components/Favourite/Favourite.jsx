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
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gridGap={3}
      >
        {data.length != 0
          ? data.map((item, id) => {
              return (
                <GridItem
                w="70%"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                m="20px auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                key={id}
                >
                  <Image
                    src={item.Poster}
                    h="250px"
                    borderRadius={"2px"}
                    margin={"15px auto"}
                    objectFit="contain"
                  />
                  <Box p="5" textAlign="left">
                    <Text ml="20px" fontWeight="bold">{item.Title}</Text>
                    <Text ml="20px" >{item.Year}</Text>
                    <Flex
                      w="90%"
                      m="auto"
                      gap={10}
                      marginTop="10px"
                      justifyContent={"space-between"}
                    >
                      <Button>
                        <Link to={`/view/${item.Title}`}>View</Link>
                      </Button>
                      {/* <Spacer /> */}
                      <Button
                        
                        _hover={{
                          background: "white",
                          color: "green.500",
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
        <Box w={["90%", "60%", "50%"]} m="auto">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy6o9Zxvma0Col4J5ufcAXZx6yo9isGyRyw&usqp=CAU"
            w="50%"
            bg="whiteAlpha.200"
            margin={"20px auto"}
            borderRadius={"10px"}
          />
          <Link to="/">
            <Button
              variant="unstyled"
              p="10px"
              w={["70%", "60%", "40%"]}
              background="red"
              color="white"
            >
              Search movie !
            </Button>
          </Link>
        </Box>
      ) : null}
    </div>
  );
}
