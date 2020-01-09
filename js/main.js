var game = {
  possibilities: [
    "#fox",
    "#caballo",
    "#gallina",
    "#panda",
    "#rana",
    "#mapache",
    "#unicornio",
    "#perro",
    "#conejo"
  ],
  currentGame: [],
  points: 0
};

var random = Math.random();
var multiplicacion = random * 9;
var floor = Math.floor(multiplicacion);
console.log(`Número random: ${random}`);
console.log(`Random multiplicado: ${multiplicacion}`);
console.log(`Posición del arreglo: ${floor}`);

game.currentGame.push(game.possibilities[floor]);
console.log(game.possibilities);
console.log(game.currentGame);
//alert(game.currentGame.length);
console.log(game.currentGame.length);
