import React from "react";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>Todos</h1>
      <TodoList />
    </Provider>
  );
}

export default App;
