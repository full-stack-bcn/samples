const BASE_URL = "http://localhost:8080";

const _apiCall = async (method, path, payload) => {
  let options = { method, mode: "cors" };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const response = await fetch(`${BASE_URL}/api${path}`, options);
  const result = await response.json();
  return result;
};

export const loadTodos = () => _apiCall("GET", "/todos");
export const addTodo = (text) => _apiCall("POST", "/todos", { text });
export const updateTodo = (todo) => _apiCall("PUT", `/todos/${todo.id}`, todo);
export const deleteTodo = (id) => _apiCall("DELETE", `/todos/${id}`);
export const clearCompleted = () => _apiCall("DELETE", "/todos");

export default {
  loadTodos,
  addTodo,
  updateTodo,
  clearCompleted,
  deleteTodo,
};
