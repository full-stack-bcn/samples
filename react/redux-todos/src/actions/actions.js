import { types } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  payload: { id: uuidv4(), text, done: false },
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