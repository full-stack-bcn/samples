import React, { Component } from "react";
import "./AddTodoForm.css";

export default class AddTodoForm extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
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
            onClick={this.props.onClearCompleted}
          />
        </p>
      </form>
    );
  }
}
