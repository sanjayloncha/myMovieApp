
const favAction = (item, dispatch) => {
    // console.log(item) ;
    dispatch({
        type : "FAVOUTIRE",
        payload : item
    })
}

export default favAction;