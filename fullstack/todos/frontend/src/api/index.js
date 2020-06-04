const BASE_URL = "http://localhost:8080";

const _call = async (path, options) => {
  const response = await fetch(`${BASE_URL}/api${path}`, options);
  const result = await response.json();
  return result;
};

const _mutate = async (method, path, payload) => {
  let options = { method, mode: "cors" };
  if (method === "PUT" || method === "POST") {
    options = {
      ...options,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
  }
  return _call(path, options);
};

export const loadTodos = () => _call("/todos");
export const addTodo = (text) => _mutate("POST", "/todos", { text });
export const updateTodo = (todo) => _mutate("PUT", `/todos/${todo.id}`, todo);
export const deleteTodo = (id) => _mutate("DELETE", `/todos/${id}`);
export const clearCompleted = () => _mutate("DELETE", "/todos");

export default {
  loadTodos,
  addTodo,
  updateTodo,
  clearCompleted,
  deleteTodo,
};
