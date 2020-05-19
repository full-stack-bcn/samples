import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middlewares";
import thunk from "redux-thunk";

const initialState = { articles: [], remoteArticles: [] } ; 
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [forbiddenWordsMiddleware, thunk];

export const store = createStore(
  rootReducer,
  initialState,
  storeEnhancers(applyMiddleware(...middleware))
);