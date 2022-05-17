import { SET_PIZZAS, SET_LOADED} from '../actions/actionTypes';

const initialState = {
  items: [],
  isLoaded: false
};

export const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS: 
      return { 
        ...state, 
        items: action.payload,
        isLoaded : true,
       };
    
    case SET_LOADED: 
      return { 
        ...state, 
        items: action.payload
       };
    
    default:
      return state;
  }
};