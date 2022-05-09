import { SET_PIZZAS } from "./actionTypes"

export const setPizzas = (data) => {
    return {
        type: SET_PIZZAS,
        payload: data
    }
}