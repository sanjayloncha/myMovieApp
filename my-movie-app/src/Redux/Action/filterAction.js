
const filterAction = (item,dispatch)=>{
    dispatch({
        type : "Filter",
        payload : item
    })
}

export default filterAction ;