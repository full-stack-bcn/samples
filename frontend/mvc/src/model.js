
export default class Model {
  constructor() {
    const stored = localStorage.getItem('todos');
    this.todos = (stored ? JSON.parse(stored) : []);
  }

  onChange(callback) {
    this._onChange = callback;
  }

  _commit() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    if (this._onChange) this._onChange();
  }

  add(text) {
    this.todos.push({ text, done: false });
    this._commit();
  }
  remove(i) {
    this.todos.splice(i, 1);
    this._commit();
  }
  edit(i, newText) {
    this.todos[i].text = newText;
    this._commit();
  }
  toggle(i) {
    this.todos[i].done = !this.todos[i].done;
    this._commit();
  }
}

