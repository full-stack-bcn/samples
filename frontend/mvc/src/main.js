import Model from "./model";
import View from "./view";
import Presenter from "./presenter";

// Create the three main components (MVP)
const model = new Model();
const view = new View();
const presenter = new Presenter(model, view);

// Make these objects accessible through the browser console
window.model = model;
window.view = view;
window.presenter = presenter;
