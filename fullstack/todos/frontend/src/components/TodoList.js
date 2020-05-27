import React, { Component } from "react";
import "./TodoList.css";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todos";

class TodoList extends Component {
  render() {
    const {
      todos,
      todosLoading,
      todosError,
      toggleDone,
      deleteTodo,
    } = this.props;

    const _delete = (todo) => (e) => {
      e.stopPropagation();
      deleteTodo(todo);
    };

    if (todosLoading) {
      return <div>Loading...</div>;
    }
    if (todosError) {
      return <div>ERROR: {todosError.toString()}</div>;
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
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  todosLoading: state.todosLoading,
  todosError: state.todosError,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDone: (todo) => dispatch(updateTodo({ ...todo, done: !todo.done })),
  deleteTodo: (todo) => dispatch(deleteTodo(todo.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
