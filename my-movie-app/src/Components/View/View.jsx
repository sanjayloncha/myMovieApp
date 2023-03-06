import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text, Box, Image } from "@chakra-ui/react";

export default function View() {
  let data = useSelector((storeData) => {
    return storeData.favourites;
  });

  let movie = useParams();
  let singleMovie = data.filter((e) => {
    if (e.imdbID === movie.id) {
      return e;
    }
  });
  console.log(singleMovie) ;
  
  return (
    <Box w={["70%","50%","40%","20%"]} m="auto"    >
      <Image
        src={singleMovie[0].Poster}
        w="80%"
        h={["60%","60%","60%"]}
        margin={"20px auto"}
        borderRadius={"2px"}
      />
      <Box p="2">
        <Text textAlign="left" ml={["20px","20px"]} fontSize={["20px", "20px", "30px"]} fontWeight="bold">{singleMovie[0].Title}</Text>
        <Text textAlign="left" ml={["20px","20px"]} fontSize={["20px", "20px", "30px"]}   >{singleMovie[0].Year}</Text>
      </Box>
    </Box>
    
  );
}
