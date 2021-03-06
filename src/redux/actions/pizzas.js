import { SET_PIZZAS, SET_LOADED } from "./actionTypes"
import axios from "axios";


export const setLoaded = val => ({
    type: SET_LOADED,
    payload: val
})

export const fetchPizzas = (sortBy, category) => dispatch => {
    dispatch(setLoaded(false))
    
    axios.get(`https://628a9ad77886bbbb37a9e118.mockapi.io/items?${category !== null ? `category=${category}` : ''}&sortBy=${sortBy.type}&orderBy=${sortBy.order}`)
    .then(( {data} ) => dispatch(setPizzas(data)));
}

export const setPizzas = (data) => {
    return {
        type: SET_PIZZAS,
        payload: data
    }
}