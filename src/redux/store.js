import {  legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers/index";

// ******************** второй параметр нужен для redux-devtools *********************
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())