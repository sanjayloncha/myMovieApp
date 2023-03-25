import axios from "axios";

const myAction = async (data, dispatch,fn) => {
  data = data || "trending"
  let url = `https://www.omdbapi.com/?s=${data}&type=movie&apikey=24c8bcdb`;
  try {
    const response = await axios.get(url);
    let data = response.data.Search;

    if (
      data.Error === "Movie not found!" ||
      data.Error === "Too many results."
    ) {
      console.log("Opps movie not Found");
    } else {
      console.log(response) ;
      dispatch({
        type: "SEARCHMOVIE",
        payload: data,
      });
      fn(false) ;
    }
  } catch (error) {
    alert("Error occured!");
  }
};

export default myAction;