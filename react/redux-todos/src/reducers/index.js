import { types } from "../actions";

const initialState = {
  todos: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = action.payload;
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        }),
      };
    case types.REMOVE_CHECKED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.done),
      };
    default:
      return state;
  }
};
