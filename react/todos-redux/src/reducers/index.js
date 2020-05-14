import { types } from "../actions";

const initialState = {
  todos: [{ id: 0, text: "test", done: false }],
};

let lastID = 0;

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: ++lastID, text: action.payload, done: false },
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
