import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeChecked } from "../actions";
import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({ todos, addTodo, removeChecked }) => {
  const [text, setText] = useState("");

  const _onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <>
      <form onSubmit={_onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="What needs to be done..."
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <button onClick={removeChecked}>Remove Checked</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  removeChecked: () => dispatch(removeChecked()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
