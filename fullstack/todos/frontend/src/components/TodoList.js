import React from "react";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todos";

const useTodoMethods = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.todosLoading);
  const error = useSelector((state) => state.error);
  return [
    todos,
    loading,
    error,
    (todo) => dispatch(updateTodo({ ...todo, done: !todo.done })),
    (todo) => dispatch(deleteTodo(todo.id)),
  ];
};

const TodoList = () => {
  const [todos, loading, error, toggleDone, deleteTodo] = useTodoMethods();

  const _delete = (todo) => (e) => {
    e.stopPropagation();
    deleteTodo(todo);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>ERROR: {error.error.toString()}</div>;
  }
  return (
    <ul className="todolist">
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className={todo.pending}
            onClick={() => toggleDone(todo)}
          >
            <input
              type="checkbox"
              checked={todo.done}
              readOnly
              disabled={todo.pending}
            />
            <span className={todo.done ? "done" : ""}>{todo.text}</span>
            <span className="spacer"></span>
            <span
              role="img"
              aria-label="cross"
              aria-labelledby="dont know"
              className="remove"
              onClick={_delete(todo)}
            >
              &#x274C;
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
