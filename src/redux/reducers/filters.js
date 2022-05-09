import { SET_SOR_BY } from '../actions/actionTypes';

const initialState = {
  category: 0,
  sortBy: 'popular',
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOR_BY: {
      return { ...state, sortBy: action.payload };
    }
    default:
      return state;
  }
};
