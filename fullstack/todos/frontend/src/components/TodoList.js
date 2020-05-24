import React, { Component } from "react";
import "./TodoList.css";

export default class TodoList extends Component {
  render() {
    const { todos, onClick } = this.props;
    return (
      <ul className="todolist">
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => onClick(todo.id)}>
            <input type="checkbox" checked={todo.done} readOnly />
            <span className={todo.done ? "done" : ""}>{todo.text}</span>
          </li>
        ))}
      </ul>
    );
  }
}
