let base1 = {
  principios() {
    console.log(`Soy ${this.name} y quiero forrar-me como sea!`);
  }
};
let base2 = {
  principios() {
    console.log(`Soy ${this.name} y quiero salvar el planeta...`);
  }
};

let fulanito = {
  name: "Fulanito",
  __proto__: base1
};
fulanito.principios();

// Algo pasa en su vida...

fulanito.__proto__ = base2;
fulanito.principios();
