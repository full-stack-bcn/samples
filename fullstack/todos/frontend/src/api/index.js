
const BASE_URL = "http://localhost:8080";

export const loadTodos = async () => {
  const response = await fetch(`${BASE_URL}/api/todos`);
  const todos = await response.json();
  return todos;
};

export const addTodo = async (text) => {
  const response = await fetch(`${BASE_URL}/api/todos`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const addedTodo = response.json();
  return addedTodo;
};

export const updateTodo = async (todo) => {
  const response = await fetch(`${BASE_URL}/api/todos/${todo.id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await response.json();
  return updatedTodo;
};

export const deleteTodo = async (id) => {
  console.log("Delete", id);
  const response = await fetch(`${BASE_URL}/api/todos/${id}`, {
    method: "DELETE",
    mode: "cors",
  });
  const deletedTodo = await response.json();
  console.log("Finish delete", deletedTodo);
  return deletedTodo;
}

export const clearCompleted = async (text) => {
  const response = await fetch(`http://localhost:8080/api/todos`, {
    method: "DELETE",
    mode: "cors",
  });
  const deletedTodos = await response.json();
  return deletedTodos;
};

export default {
  loadTodos,
  addTodo,
  updateTodo,
  clearCompleted,
  deleteTodo,
};
