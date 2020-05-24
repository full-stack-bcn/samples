import { types } from "./types";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = numbers + alphabet + alphabet.toUpperCase();
const genUUID = () => {
  let uuid = "";
  for (let i = 0; i < 10; i++) {
    uuid += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return uuid;
}

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  payload: { id: genUUID(), text, done: false },
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