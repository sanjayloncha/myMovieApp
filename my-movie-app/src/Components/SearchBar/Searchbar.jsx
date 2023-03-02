import React, { useState } from "react";
import { Box, Input, InputGroup, Image } from "@chakra-ui/react";
import myAction from "../../Redux/Action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";

export default function SearchBar() {
  const [flag, setFlag] = useState(false);
  const [movie, setMovie] = useState("");
  // const storeData = useSelector((data) => {
  //   return data.searchedMovie;
  // });

  const dispatch = useDispatch();
  const debounce = () => {
    let timerID;
    return function () {
      setFlag(true);
      if (timerID) clearTimeout(timerID);
      timerID = setTimeout(function () {
        if (movie.length != 0) {
          getData(movie);
        } else {
          setFlag(false);
        }
      }, 2000);
    };
  };

  let getData = async (movie) => {
    let url = `http://www.omdbapi.com?S=${movie}&apikey=24c8bcdb`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (
        data.Error === "Movie not found!" ||
        data.Error === "Too many results."
      ) {
        console.log("Opps movie not Found");
        setFlag(false);
      } else {
        setFlag(false);
        myAction(data.Search, dispatch);
        setMovie("");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            onKeyUp={debounce()}
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
