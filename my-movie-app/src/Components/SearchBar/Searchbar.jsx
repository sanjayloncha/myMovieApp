import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";
import myAction from "../../Redux/Action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";

export default function SearchBar() {
  let storeData = useSelector((data) => {
    return data.searchedMovie;
  });

  let dispatch = useDispatch();
  let debounce = () => {
    let tId;
    return function () {
      if (tId) clearTimeout(tId);
      tId = setTimeout(function () {
        let movie = document.getElementById("searchBox").value;
        getData(movie);
      }, 2000);
    };
  };

  let getData = async (movie) => {
    let url = `http://www.omdbapi.com/?S=${movie}&apikey=24c8bcdb`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (
        data.Error === "Movie not found!" ||
        data.Error === "Too many results."
      ) {
        console.log("Opps movie not Found");
      } else {
        myAction(data.Search, dispatch);
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
            w={400}
            onKeyUp={debounce()}
          />
        </InputGroup>
      </Box>

      {storeData.length !== 0 ? <Movie /> : null}

    </>
  );
}
