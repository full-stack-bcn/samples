import { ADD_ARTICLE } from "../types/action-types";
import axios from 'axios';

export const addArticle = payload => ({ type: ADD_ARTICLE, payload });

export const getData = () => async dispatch => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({ type: "DATA_LOADED", payload: response.data });
      return 'done';
  }