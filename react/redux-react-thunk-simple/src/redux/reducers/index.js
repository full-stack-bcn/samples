import { ADD_ARTICLE } from "../types";
export default function rootReducer ( prevState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...prevState, articles: [ ...prevState.articles, action.payload ]};
  }
  if (action.type === "DATA_LOADED") {
    return { ...prevState, remoteArticles: [...prevState.remoteArticles, ...action.payload] };
  }
  return prevState;
}