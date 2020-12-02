import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const input = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input.current.value);
    dispatch(addTodo(input.current.value));
    input.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={input} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
