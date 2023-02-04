import React, { useState } from "react";
import Card from "../Card/Card";
import { Grid, GridItem, Button, Text, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import favAction from "../../Redux/Action/favAction";

export default function Movie() {
  let [disable, setDisable] = useState(false);
  let dispatch = useDispatch();
  let storeData = useSelector((data) => {
    return data.searchedMovie;
  });
  // console.log(storeData) ;

  let add = (item) => {
    favAction(item, dispatch);
    // setDisable(true);
  };

  return (
    <div>
      {storeData.length != 0 ? (
        <Grid templateColumns={["repeat(3,1fr),repeat(2,1fr),repeat(1,1fr)"]}>
          {storeData.map((item, id) => {
            
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
                  <Button colorScheme="blue" isDisabled={disable} onClick={()=>add(item)}>
                    Add to Favourite
                  </Button>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      ) : null}
    </div>
  );
}
