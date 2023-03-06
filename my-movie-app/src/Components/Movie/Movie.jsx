import React, { useState } from "react";
import { Grid,Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

export default function Movie() {

  let storeData = useSelector((storeData)=>storeData.searchedMovie) ;

  return (
    <Box>
      {storeData.length !== 0 ? (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gridGap={5}
        >
          {storeData.map((item, id) => {
            return (
              <Card item={item} id={id} key={id} />
            );
          })}
        </Grid>
      ) : null}
    </Box>
  );
}
