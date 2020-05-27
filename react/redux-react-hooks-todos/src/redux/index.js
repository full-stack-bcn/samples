import { createStore, combineReducers } from 'redux';
import produce from 'immer';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'


function visibilityFilter( prevState = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return prevState
  }
}

function todos(prevState = [], action) {
  switch (action.type) {
    case ADD_TODO:
     return produce( prevState, draftState => { draftState.push({ text: action.text, completed: false }) } )
    case TOGGLE_TODO:
     return produce( prevState, draftState => { draftState[action.index].completed = !draftState[action.index].completed })
    default:
     return prevState
  }
}

const todoApp = combineReducers({ visibilityFilter, todos })
export default createStore ( todoApp, {}, window.__REDUX_DEVTOOLS_EXTENSION__());