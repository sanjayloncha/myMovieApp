import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import myAction from "../../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import { useEffect } from "react";

export default function SearchBar() {
  const [flag, setFlag] = useState(true);
  const [movie, setMovie] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setFlag(true);
    const getData = setTimeout(() => {
      myAction(movie, dispatch, setFlag);
    }, 1500);
    return () => clearTimeout(getData);
  }, [movie]);

  return (
    <>
      <Box px={6} py={4}>
        <InputGroup size="md" alignItems="center">
          <Input
            type="text"
            id="searchBox"
            placeholder="Search your favourite movie..."
            w={[300, 400, 600]}
            m="auto"
            onChange={(e) => {
              setMovie(e.target.value);
            }}
            value={movie}
          />
        </InputGroup>
      </Box>
      {flag ? 
        
          movie.length !== 0 ?  (<Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8305169321565.5b7d0cbe717fe.gif"
            w="300px"
          />
        </Box>) : <Stack w="70%" m="auto">
          <Skeleton height="120px" />
          <Skeleton height="120px" />
          <Skeleton height="120px" />
        </Stack>
        
       : (
        <Movie />
      )}
    </>
  );
}
