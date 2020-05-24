import { createStore, applyMiddleware, compose } from "redux";

const ADD_ARTICLE = 'ADD_ARTICLE';
export const addArticle = payload => ({ type: ADD_ARTICLE, payload });

function rootReducer ( prevState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...prevState, articles: [ ...prevState.articles, action.payload ]};
  }
  return prevState;
}

const forbiddenWords = ["spam", "money"];
export const forbiddenWordsMiddleware = 
  ({ dispatch }) => next => action => {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter( word =>  action.payload.title.includes(word) );
        if (foundWord.length) { return dispatch({ type: "FOUND_BAD_WORD" }); }
      }
      return next(action);
}

const initialState = { articles: [] } ; 
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [forbiddenWordsMiddleware];
export const store = createStore(
  rootReducer,
  initialState,
  storeEnhancers(applyMiddleware(...middleware))
);