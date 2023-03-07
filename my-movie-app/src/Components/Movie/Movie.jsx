import React, { useState } from "react";
import { Grid, Box, Select, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

export default function Movie() {
  let [sortMovie, setSort] = useState("high_to_low");
  let storeData = useSelector((storeData) => storeData.searchedMovie);

  const sort = (e) => {
    setSort(e.target.value);
    if (sortMovie === "high_to_low") {
      sortMovie = storeData.sort((a, b) => a.Year - b.Year);
    }
    if (sortMovie === "low_to_high") {
      sortMovie = storeData.sort((a, b) => b.Year - a.Year);
    }
  };


  return (
    <Flex direction="column">
      <Box float="right" >
        <Select
          placeholder="Sort"
          w={["25%","20%","10%"]}
          h="30px"
          float="right"
          mr={["50px","70px","50px"]}
          onChange={sort}
        >
          <option value="low_to_high">old first</option>
          <option value="high_to_low">latest first</option>
        </Select>
      </Box>
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
              return <Card item={item} id={id} key={id} />;
            })}
          </Grid>
        ) : null}
      </Box>
    </Flex>
  );
}
