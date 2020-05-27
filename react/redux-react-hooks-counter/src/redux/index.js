import { createStore } from 'redux';
import {INCREMENT, DECREMENT } from './actions';

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default createStore (
    counterReducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__() 
  );
