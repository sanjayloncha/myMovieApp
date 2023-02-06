import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

export default function Movie() {

  let storeData = useSelector((data) => {
    return data.searchedMovie;
  });


  return (
    <div>
      {storeData.length != 0 ? (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gridGap={5}
        >
          {storeData.map((item, id) => {
            return (
              <Card item={item} id={id} />
            );
          })}
        </Grid>
      ) : null}
    </div>
  );
}
