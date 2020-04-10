import './styles.css';

const create = (type, className) => {
  const elem = document.createElement(type);
  if (className) {
    elem.classList.add(className);
  }
  return elem;
};

export default class View {
  constructor() {
    this.root = document.getElementById("root");
    this.root.append(this._buildTitle(), this._buildForm(), this._buildList());
  }

  _buildTitle() {
    const h1 = create("h1");
    h1.textContent = "Todo List";
    return h1;
  }

  _buildForm() {
    const form = create("form");
    const input = create("input");
    input.type = "text";
    const submit = create("button");
    submit.textContent = "Add Todo";
    form.append(input, submit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.on.add) {
        this.on.add(input.value);
        input.value = "";
      }
    });
    return form;
  }

  _buildList() {
    let tmpText = "";
    this.ul = create("ul", "todo-list");

    this.ul.addEventListener('input', (e) => {
      if (e.target.contentEditable === "true") {
        tmpText = e.target.innerText;
      }
    });
    this.ul.addEventListener("click", (e) => {
      if (e.target.type === "submit") {
        if (this.on.remove) {
          const i = parseInt(e.target.parentElement.id);
          this.on.remove(i);
        }
      }
    });
    this.ul.addEventListener("change", (e) => {
      if (e.target.type === "checkbox") {
        if (this.on.toggle) {
          const i = parseInt(e.target.parentElement.id);
          this.on.toggle(i);
        }
      }
    })
    this.ul.addEventListener('focusout', (e) => {
      if (tmpText && this.on.edit) {
        const i = parseInt(e.target.parentElement.id);
        this.on.edit(i, tmpText);
        tmpText = "";
      }
    })

    return this.ul;
  }

  _buildTodo(todo, i) {
    const li = create("li");
    li.id = `${i}`;

    const checkbox = create("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    const text = create("span");
    text.contentEditable = true;
    if (todo.done) {
      text.classList.add("done");
    }
    text.textContent = todo.text;

    const delButton = create("button", "delete");
    delButton.innerHTML = "&#x274C;";

    li.append(checkbox, text, delButton);
    return li;
  }

  on(eventName, callback) {
    this.on[eventName] = callback;
  }

  render(todos) {
    this.ul.textContent = '';
    this.ul.append(...todos.map(this._buildTodo.bind(this)));
  }
}
