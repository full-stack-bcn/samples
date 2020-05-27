import types from "../actions/types";

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STARTED: {
      return {
        ...state,
        todos: [],
        todosLoading: true,
        error: null,
      };
    }
    case types.LOAD_SUCCEEDED: {
      return {
        ...state,
        todos: action.payload,
        todosLoading: false,
        error: null,
      };
    }
    case types.LOAD_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        todosLoading: false,
        error: {
          action: types.LOAD_FAILED,
          error,
        },
      };
    }

    case types.ADD_STARTED: {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, text, done: false, pending: "adding" }],
        error: null,
      };
    }
    case types.ADD_SUCCEEDED: {
      const { id, addedTodo } = action.payload;
      const _substituteFake = (todo) => {
        return todo.id === id ? addedTodo : todo;
      };
      return {
        ...state,
        todos: state.todos.map(_substituteFake),
        error: null,
      };
    }
    case types.ADD_FAILED: {
      const { id, error } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== id),
        error: {
          action: types.ADD_FAILED,
          error,
        },
      };
    }

    case types.UPDATE_STARTED: {
      const id = action.payload;
      const _setUpdating = (todo) => {
        return todo.id === id ? { ...todo, pending: "updating" } : todo;
      };
      return {
        ...state,
        todos: state.todos.map(_setUpdating),
      };
    }
    case types.UPDATE_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error: {
          action: types.UPDATE_FAILED,
          error,
        },
      };
    }
    case types.UPDATE_SUCCEEDED: {
      const updatedTodo = action.payload;
      const _update = (todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      };
      return {
        ...state,
        todos: state.todos.map(_update),
      };
    }

    case types.DELETE_STARTED: {
      const id = action.payload;
      const _setDeleting = (todo) => {
        return todo.id === id
          ? { ...todo, pending: "deleting" }
          : todo;
      };
      return {
        ...state,
        todos: state.todos.map(_setDeleting),
      };
    }
    case types.DELETE_FAILED: {
      const { id, error } = action.payload;
      const _clearError = (todo) => {
        if (todo.id === id) {
          return { id: todo.id, text: todo.text, done: todo.done };
        }
        return todo;
      };
      return {
        ...state,
        todos: state.todos.map(_clearError),
        error: {
          action: types.DELETE_FAILED,
          error,
        },
      };
    }
    case types.DELETE_SUCCEEDED: {
      const deletedTodo = action.payload;
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== deletedTodo.id),
      };
    }

    case types.CLEAR_CHECKED_STARTED: {
      const _setUpdating = (todo) => {
        return todo.done ? { ...todo, pending: "deleting" } : todo;
      };
      return {
        ...state,
        todos: state.todos.map(_setUpdating),
      };
    }
    case types.CLEAR_CHECKED_FAILED: {
      const _clearLoading = (todo) => {
        const { id, text, done } = todo;
        return { id, text, done };
      };
      return {
        ...state,
        todos: state.todos.map(_clearLoading),
      };
    }
    case types.CLEAR_CHECKED_SUCCEEDED: {
      const deletedTodos = action.payload;
      const _notDeleted = (todo) => {
        return !deletedTodos.find((t) => t.id === todo.id);
      };
      return {
        ...state,
        todos: state.todos.filter(_notDeleted),
      };
    }

    default:
      return state;
  }
};
