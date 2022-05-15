import { SET_PIZZAS, SET_LOADED } from "./actionTypes"
import axios from "axios";


export const setLoaded = payload => ({
    type: SET_LOADED,
    payload: payload
})

export const fetchPizzas = (sortBy, category) => dispatch => {
    // dispatch(setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then( ({data}) => {
      dispatch(setPizzas(data))
    });
}

export const setPizzas = (data) => {
    return {
        type: SET_PIZZAS,
        payload: data
    }
}