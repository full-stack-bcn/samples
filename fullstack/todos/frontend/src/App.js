import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodos } from "./actions/todos";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const useLoadTodos = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadTodos()));
};

const App = () => {
  useLoadTodos();

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
};

export default App;
