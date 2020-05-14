import { types } from "./types";

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  payload: id,
})

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  payload: id,
})

export const removeChecked = () => ({
  type: types.REMOVE_CHECKED,
})