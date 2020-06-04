import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearCompleted } from "../actions/todos";
import "./AddTodoForm.css";

const useAddTodo = () => {
  const dispatch = useDispatch();
  return [(text) => dispatch(addTodo(text))];
};

const useClearCompleted = () => {
  const dispatch = useDispatch();
  return [() => dispatch(clearCompleted())];
};

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const [addTodo] = useAddTodo();
  const [clearCompleted] = useClearCompleted();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <p>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
      </p>
      <p>
        <input type="button" value="Clear Completed" onClick={clearCompleted} />
      </p>
    </form>
  );
};

export default AddTodoForm;
