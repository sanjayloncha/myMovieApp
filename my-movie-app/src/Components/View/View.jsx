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
    if (e.Title === movie.id) {
      return e;
    }
  });

  return (
    <Box w={["80%","70%","50%","40%"]} h="80vh" m="auto" boxShadow="0 0 10px black"  >
      <Image
        src={singleMovie[0].Poster}
        w="90%"
        h="70%"
        margin={"20px auto"}
        p="10px 5px"
        borderRadius={"2px"}
      />
      <Box p="5">
        <Text fontSize={["20px", "20px", "30px"]} fontWeight="bold">{singleMovie[0].Title}</Text>
        <Text fontSize={["20px", "20px", "30px"]} p="10px"  >{singleMovie[0].Year}</Text>
      </Box>
    </Box>
  );
}
