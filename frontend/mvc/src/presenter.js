export default class Presenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.setPresenter(this);
    this.model.onChange(this.onModelChange.bind(this));

    this.view.render(this.model.todos);
  }

  // Computation 1: Translate events to changes in the model
  onAdd(text) {
    if (text) {
      this.model.add(text);
    }
  }
  onRemove(i) {
    this.model.remove(i);
  }
  onToggle(i) {
    this.model.toggle(i);
  }
  onEdit(i, text) {
    this.model.edit(i, text);
  }

  // Computation 2: Produce a visual representation of the model
  onModelChange() {
    // Preprocess the data that the view will  show?
    this.view.render(this.model.todos);
  }
}
