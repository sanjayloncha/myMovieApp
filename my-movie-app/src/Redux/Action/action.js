import axios from "axios";

const myAction = (data, dispatch) => {
    if (data.length === 0) {
        getMovieData(dispatch, "trending");
    }
    if (typeof (data) !== "object") {
        console.log(data);
        getMovieData(dispatch, data);
    }
}

let getMovieData = async (dispatch, movie) => {
    let url = `https://www.omdbapi.com/?s=${movie}&type=movie&apikey=24c8bcdb`;
    try {
        const response = await axios.get(url);
        let data = response.data.Search ;
        console.log(response);

        if (
            data.Error === "Movie not found!" ||
            data.Error === "Too many results."
        ) {
            console.log("Opps movie not Found");
        } else {
            dispatch({
                type: "SEARCHMOVIE",
                payload: data
            })
        }
    } catch (error) {
        alert("Error occured!");
    }


}

export default myAction;