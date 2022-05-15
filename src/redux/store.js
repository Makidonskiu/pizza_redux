import {  legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ******************** второй параметр нужен для redux-devtools *********************
export const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
    );