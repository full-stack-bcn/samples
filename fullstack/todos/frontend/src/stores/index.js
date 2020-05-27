import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "../reducers";
import api from "../api";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const todosStore = createStore(
  todosReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);
