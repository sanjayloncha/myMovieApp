import React from 'react' ;
import {useParams} from "react-router-dom" ;
import { useSelector } from 'react-redux';
import { Grid, GridItem, Button, Text, Box, Image } from "@chakra-ui/react";

export default function View() {
  let data = useSelector((storeData)=>{
    return storeData.favourites ;
  })

  let movie = useParams() ;
  let singleMovie = data.filter((e)=>{
    if(e.Title === movie.id ){
      return e ;
    }
  })

  return (
    <div>
      
      <GridItem
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                p="5"
                m="5"
              >
                <Image
                  src={singleMovie[0].Poster}
                  w="40%"
                  margin={"auto"}
                  boxShadow={"0 0 10px black"}
                  borderRadius={"2px"}
                />
                <Box p="5">
                  <Text fontWeight="bold">{singleMovie[0].Title}</Text>
                  <Text>{singleMovie[0].Year}</Text>
                </Box>
              </GridItem>
    </div>
  )
}
