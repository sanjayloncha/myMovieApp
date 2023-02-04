
const filterAction = (item,dispatch)=>{
    console.log(item) ;
    dispatch({
        type : "Filter",
        payload : item
    })
}

export default filterAction ;