import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTodos } from "./actions/todos";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <>
        <header>
          <h1>Todos</h1>
        </header>
        <main>
          <AddTodoForm />
          <TodoList />
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadTodos: () => dispatch(loadTodos()),
});

export default connect(null, mapDispatchToProps)(App);
