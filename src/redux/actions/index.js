import { SHOW } from "./actionTypes";

export const getApi = () => {
    return(dispatch) => {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((result) => dispatch({type: SHOW, payload: result}))
    }
    
}