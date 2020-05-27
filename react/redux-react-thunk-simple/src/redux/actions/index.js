import { ADD_ARTICLE } from "../types";
import axios from 'axios';

export const addArticle = payload => ({ type: ADD_ARTICLE, payload });


export const getData = () => async dispatch => {
      dispatch({ type: "LOADING_DATA" });
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({ type: "DATA_LOADED", payload: response.data });
      } catch(error){ 
        dispatch({ type: "ERROR_LOADING_DATA", payload: error.message })
      }
  }