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
    if(action.type === "FAVOUTIRE"){
        return (
            store = {
                ...store ,
                favourites : [...store.favourites,action.payload]
            }
        )
    }
    if(action.type === "Filter"){
        return (
            store = {
                ...store,
                favourites : action.payload
            }
        )
    }
    return store;
}

export default myReducer;