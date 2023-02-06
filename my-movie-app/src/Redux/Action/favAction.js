
const favAction = (item, dispatch) => {
    dispatch({
        type : "FAVOUTIRE",
        payload : item
    })
}

export default favAction;