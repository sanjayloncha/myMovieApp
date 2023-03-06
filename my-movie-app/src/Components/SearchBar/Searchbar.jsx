import React, { useState } from "react";
import { Box, Input, InputGroup, Image } from "@chakra-ui/react";
import myAction from "../../Redux/Action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import { useEffect } from "react";

export default function SearchBar() {
  const [flag, setFlag] = useState(false);
  const [movie, setMovie] = useState("");

  const movie_data = useSelector((storeData) => storeData.searchedMovie);

  const dispatch = useDispatch();
  const debounce = (e) => {
    if (e.key !== "Backspace" && e.key !== " ") {
      setFlag(true);
      let timerID;
      return function () {
        if (timerID) clearTimeout(timerID);
        timerID = setTimeout(() => {
          if (movie.length !== 0) {
            // console.log(movie);
            myAction(movie, dispatch);
            setFlag(false);
          } else {
            setFlag(false);
          }
        }, 2000);
      };
    }
  };
  useEffect(() => {
    myAction(movie_data, dispatch);
  }, []);

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
            onKeyUp={(e) => debounce(e)()}
            value={movie}
          />
        </InputGroup>
      </Box>
      {flag ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          {" "}
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8305169321565.5b7d0cbe717fe.gif"
            w="300px"
          />{" "}
        </Box>
      ) : null}
      {!flag && <Movie />}
    </>
  );
}
