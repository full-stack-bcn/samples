import Model from "./model";
import View from "./view";

const Controller = (model, view) => {
  view.render(model.todos);

  view.on('add', (text) => model.add(text));
  view.on('remove', (i) => model.remove(i));
  view.on('toggle', (i) => model.toggle(i));
  view.on('edit', (i, newText) => model.edit(i, newText));

  model.onChange(() => {
    view.render(model.todos);
  });
};

Controller(new Model(), new View());
