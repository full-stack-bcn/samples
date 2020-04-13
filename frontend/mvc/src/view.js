import "./styles.css";

// Create a DOM element with a certain type and an optional class
const _make = (type, className) => {
  const elem = document.createElement(type);
  if (className) {
    elem.classList.add(className);
  }
  return elem;
};

export default class View {
  constructor() {
    const root = document.getElementById("root");
    root.append(this._buildTitle(), this._buildForm(), this._buildList());
    this.presenter = null;
  }

  setPresenter(presenter) {
    this.presenter = presenter;
  }

  _buildTitle() {
    const h1 = _make("h1");
    h1.textContent = "Todo List";
    return h1;
  }

  _buildForm() {
    const form = _make("form");
    const input = _make("input");
    input.type = "text";
    const submit = _make("button");
    submit.textContent = "Add Todo";
    form.append(input, submit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.presenter) {
        this.presenter.onAdd(input.value);
        input.value = "";
      }
    });
    return form;
  }

  _buildList() {
    let tmpText = "";
    this.ul = _make("ul", "todo-list");

    const elemIndex = (node) => parseInt(node.parentElement.id);

    this.ul.addEventListener("input", (e) => {
      if (e.target.contentEditable === "true") {
        tmpText = e.target.innerText;
      }
    });
    this.ul.addEventListener("click", (e) => {
      if (e.target.type === "submit") {
        if (this.presenter) {
          this.presenter.onRemove(elemIndex(e.target));
        }
      }
    });
    this.ul.addEventListener("change", (e) => {
      if (e.target.type === "checkbox") {
        if (this.presenter) {
          this.presenter.onToggle(elemIndex(e.target));
        }
      }
    });
    this.ul.addEventListener("focusout", (e) => {
      if (tmpText && this.presenter) {
        this.presenter.onEdit(elemIndex(e.target), tmpText);
        tmpText = "";
      }
    });

    return this.ul;
  }

  _buildTodo(todo, i) {
    const li = _make("li");
    li.id = `${i}`;

    const checkbox = _make("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    const text = _make("span");
    text.textContent = todo.text;
    text.contentEditable = true;
    if (todo.done) {
      text.classList.add("done");
    }

    const delButton = _make("button", "delete");
    delButton.innerHTML = "&#x274C;";

    li.append(checkbox, text, delButton);
    return li;
  }

  render(todos) {
    this.ul.textContent = "";
    this.ul.append(...todos.map(this._buildTodo.bind(this)));
  }
}
