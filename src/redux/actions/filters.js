import { SET_SOR_BY, SET_CATEGORY } from "./actionTypes"

export const setSortBy = (data) => {
    return {
        type: SET_SOR_BY,
        payload: data
    }
}

export const setCategory = (data) => {
    return {
        type: SET_CATEGORY,
        payload: data
    }
}