import React, { Component } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    this.loadTodos();
  }

  loadTodos = async () => {
    const response = await fetch(`http://localhost:8080/api/todos`);
    const todos = await response.json();
    this.setState({ todos: todos });
  };

  addTodo = async (text) => {
    const response = await fetch(`http://localhost:8080/api/todos`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const json = response.json();
    return json;
  };

  updateTodo = async (todo) => {
    const response = await fetch(`http://localhost:8080/api/todos/${todo.id}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const json = await response.json();
    return json;
  };

  clearCompleted = async (text) => {
    const response = await fetch(`http://localhost:8080/api/todos`, {
      method: "DELETE",
      mode: "cors",
    });
    const deletedTodos = await response.json();
    return deletedTodos;
  };

  onClickTodo = async (id) => {
    const todo = this.state.todos.find((t) => t.id === id);
    const updated = await this.updateTodo({ ...todo, done: !todo.done });
    this.setState((state) => ({
      todos: state.todos.map((t) => (t.id === id ? updated : t)),
    }));
  };

  onAddTodo = async (text) => {
    const todo = await this.addTodo(text);
    this.setState((state) => ({
      todos: [...state.todos, todo],
    }));
  };

  onClearCompleted = async () => {
    const deletedTodos = await this.clearCompleted();
    const wasDeleted = ({ id }) => deletedTodos.find(t => t.id === id);
    this.setState((state) => ({
      todos: state.todos.filter((t1) => !wasDeleted(t1)),
    }));
  };

  render() {
    return (
      <>
        <header>
          <h1>Todos</h1>
        </header>
        <main>
          <AddTodoForm
            onSubmit={this.onAddTodo}
            onClearCompleted={this.onClearCompleted}
          />
          <TodoList todos={this.state.todos} onClick={this.onClickTodo} />
        </main>
      </>
    );
  }
}
