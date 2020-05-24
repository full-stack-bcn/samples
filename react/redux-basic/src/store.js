import { createStore } from "redux";

const ADD_ARTICLE = 'ADD_ARTICLE';

export const addArticle = payload => ({ type: ADD_ARTICLE, payload });

function rootReducer(prevState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...prevState, articles: [ ...prevState.articles, action.payload ]};
  }
  return prevState;
}

const initialState = { articles: [] } ; 

export const store = createStore(
  rootReducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__() 
);

