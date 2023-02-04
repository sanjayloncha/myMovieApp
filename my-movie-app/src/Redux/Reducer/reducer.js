const initialData = {
    favourites: [],
    searchedMovie : [] 
}

const myReducer = (store = initialData, action) => {
    if (action.type === "SEARCHMOVIE") {
        return (
            store = {
                ...store,
                searchedMovie: action.payload
            }
        )
    }
    return store;
}

export default myReducer;