import { observable, action } from "mobx";

class Model {
  @observable count = 0;

  @action increment = () => this.count++;
  @action decrement = () => this.count--;
}

export default new Model();
