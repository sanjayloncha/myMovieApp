
const myAction = (data,dispatch)=>{
    dispatch({
        type : "SEARCHMOVIE" ,
        payload : data
    })
}
export default myAction ;