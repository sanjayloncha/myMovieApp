const myAction = (data, dispatch) => {
    if (data.length == 0) {
        getTrending(dispatch);
    }
}

let getTrending = async (dispatch) => {
    let url = `https://www.omdbapi.com/?s=trending&type=movie&apikey=24c8bcdb`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        dispatch({
            type: "SEARCHMOVIE",
            payload: data.Search
        })
    } catch (error) {
        alert("Error occured!");
    }
}

export default myAction;