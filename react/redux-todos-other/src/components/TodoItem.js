import React from "react";
import "./TodoItem.css";
import { toggleTodo, removeTodo } from "../actions";
import { connect } from "react-redux";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="item" onClick={() => toggleTodo(todo.id)}>
      <div>
        <input type="checkbox" checked={todo.done} readOnly />
        {todo.text}
      </div>
      <span role="img" aria-label="cross" aria-labelledby="dont know" className="remove" onClick={() => removeTodo(todo.id)}>
        &#x274C;
      </span>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
