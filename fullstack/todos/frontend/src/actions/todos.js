import types from "./types";

import { v4 as uuidv4 } from "uuid";

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export const loadTodos = () => async (dispatch, getState, api) => {
  dispatch({ type: types.LOAD_STARTED });
  try {
    const todos = await api.loadTodos();
    if (todos.error) {
      dispatch({ type: types.LOAD_FAILED, payload: { error: todos.error } });
    } else {
      dispatch({ type: types.LOAD_SUCCEEDED, payload: todos });
    }
  } catch (e) {
    console.log("Error", e);
    dispatch({ type: types.LOAD_FAILED, payload: { error: e } });
  }
};

export const addTodo = (text) => async (dispatch, getState, api) => {
  const unusedId = uuidv4();
  dispatch({ type: types.ADD_STARTED, payload: { id: unusedId, text } });
  try {
    const addedTodo = await api.addTodo(text);
    dispatch({
      type: types.ADD_SUCCEEDED,
      payload: { id: unusedId, addedTodo: addedTodo },
    });
  } catch (e) {
    dispatch({ type: types.ADD_FAILED, payload: { id: unusedId, error: e } });
  }
};

export const updateTodo = (todo) => async (dispatch, getState, api) => {
  dispatch({ type: types.UPDATE_STARTED, payload: todo.id });
  try {
    const updatedTodo = await api.updateTodo(todo);
    dispatch({ type: types.UPDATE_SUCCEEDED, payload: updatedTodo });
  } catch (e) {
    console.log(e);
    dispatch({ type: types.UPDATE_FAILED, payload: { todo, error: e } });
  }
};

export const deleteTodo = (id) => async (dispatch, getState, api) => {
  dispatch({ type: types.DELETE_STARTED, payload: id });
  try {
    const deletedTodo = await api.deleteTodo(id);
    dispatch({ type: types.DELETE_SUCCEEDED, payload: deletedTodo });
  } catch (e) {
    dispatch({ type: types.DELETE_FAILED, payload: { id, error: e } });
  }
};

export const clearCompleted = () => async (dispatch, getState, api) => {
  dispatch({ type: types.CLEAR_CHECKED_STARTED });
  try {
    const deletedTodos = await api.clearCompleted();
    dispatch({ type: types.CLEAR_CHECKED_SUCCEEDED, payload: deletedTodos });
  } catch (e) {
    dispatch({ type: types.CLEAR_CHECKED_FAILED, payload: { error: e } });
  }
};
