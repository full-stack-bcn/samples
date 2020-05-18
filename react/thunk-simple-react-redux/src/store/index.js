import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middlewares";

const initialState = { articles: [] } ; 
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [forbiddenWordsMiddleware];

export const store = createStore(
  rootReducer,
  initialState,
  storeEnhancers(applyMiddleware(...middleware))
);