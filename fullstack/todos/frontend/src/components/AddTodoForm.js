import React, { Component } from "react";
import "./AddTodoForm.css";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";
import { clearCompleted } from "../actions/todos";

class AddTodoForm extends Component {
  constructor() {
    super();
    this.state = { text: "" };
  }

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text) {
      this.props.addTodo(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Add Todo" />
        </p>
        <p>
          <input
            type="button"
            value="Clear Completed"
            onClick={this.props.clearCompleted}
          />
        </p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  clearCompleted: () => dispatch(clearCompleted()),
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
