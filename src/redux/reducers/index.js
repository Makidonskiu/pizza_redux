import {combineReducers} from 'redux'
import { filters as filterReducer } from "./filters";
import { pizzas as pizzasReducer } from "./pizzas";
import { carts as cartReducer } from "./carts";

export const rootReducer = combineReducers({
    filterReducer,
    pizzasReducer,
    cartReducer
})