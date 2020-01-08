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
  ]
};

var random = Math.random();
var multiplicacion = random * 9;
var floor = Math.floor(multiplicacion);
console.log(`Número random: ${random}`);
console.log(`Random multiplicado: ${multiplicacion}`);
console.log(`Posición del arreglo: ${floor}`);
