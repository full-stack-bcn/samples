import { types } from "../actions";

const initialState = {
  todos: [],
};

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

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: genUUID(), text: action.payload, done: false },
        ],
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                done: !todo.done,
              }
            : todo
        ),
      };
    case types.REMOVE_CHECKED:
      return  {
        ...state,
        todos: state.todos.filter(todo => !todo.done),
      }
    default:
      return state;
  }
};
