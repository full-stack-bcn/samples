
function WallStreetShark() {}
WallStreetShark.prototype.principios = function() {
  console.log(`Soy ${this.name} y quiero forrar-me como sea!`)
}

function TreeHugger() {}
TreeHugger.prototype.principios = function() {
  console.log(`Soy ${this.name} y quiero salvar el planeta...`)
}

let fulanito = new WallStreetShark()
fulanito.name = 'Fulanito'

fulanito.principios();

// Algo pasa en su vida...

Object.setPrototypeOf(fulanito, TreeHugger.prototype)
fulanito.principios();



