<<<<<<< HEAD
var game = {
    possibilities: [
        "zorro",
        "caballo",
        "gallina",
        "panda",
        "rana",
        "mapache",
        "unicornio",
        "perro",
        "conejo"
    ],
    currentGame: [],
    points: 0
};

/* var random = Math.random();
var multiplicacion = random * 9;
var floor = Math.floor(multiplicacion);
console.log(`Número random: ${random}`);
console.log(`Random multiplicado: ${multiplicacion}`);
console.log(`Posición del arreglo: ${floor}`);
game.currentGame.push(game.possibilities[floor]);
console.log("possibilities", game.possibilities);
console.log("currentGame", game.currentGame);
//alert(game.currentGame.length);
console.log(game.currentGame.length);
 */

var random = Math.random();
var multiplicacion = random * 9;
var floor = Math.floor(multiplicacion);
console.log(`Número random: ${random}`);
console.log(`Random multiplicado: ${multiplicacion}`);
console.log(`Posición del arreglo: ${floor}`);

var actualPosition = game.possibilities[floor];
console.log(actualPosition, "es el actual");
console.log(typeof actualPosition);

function uno() {
    var itemActual = document.getElementById(actualPosition);
    itemActual.classList.add("circleColor");
    setTimeout(function() {
        itemActual.classList.remove("circleColor");
    }, 500);
}

uno();

game.currentGame.push(actualPosition);
console.log("possibilities", game.possibilities);
console.log("currentGame, actual:", game.currentGame);
//alert(game.currentGame.length);
=======
var game = {
    possibilities: [
        "zorro",
        "caballo",
        "gallina",
        "panda",
        "rana",
        "mapache",
        "unicornio",
        "perro",
        "conejo"
    ],
    currentGame: [],
    points: 0
};

/* var random = Math.random();
var multiplicacion = random * 9;
var floor = Math.floor(multiplicacion);
console.log(`Número random: ${random}`);
console.log(`Random multiplicado: ${multiplicacion}`);
console.log(`Posición del arreglo: ${floor}`);

game.currentGame.push(game.possibilities[floor]);
console.log("possibilities", game.possibilities);
console.log("currentGame", game.currentGame);
//alert(game.currentGame.length);
console.log(game.currentGame.length);
 */

var random = Math.random();
var multiplicacion = random * 9;
var floor = Math.floor(multiplicacion);
console.log(`Número random: ${random}`);
console.log(`Random multiplicado: ${multiplicacion}`);
console.log(`Posición del arreglo: ${floor}`);

var actualPosition = game.possibilities[floor];
console.log(actualPosition, "es el actual");
console.log(typeof actualPosition);


function uno() {
    var itemActual = document.getElementById(actualPosition);
    itemActual.classList.add("circleColor");
    setTimeout(function() {
        itemActual.classList.remove("circleColor");
    }, 750);
}

uno();

game.currentGame.push(actualPosition);
console.log("possibilities", game.possibilities);
console.log("currentGame, actual:", game.currentGame);
//alert(game.currentGame.length);
>>>>>>> b852fe1db80d852ad8ee30230700b68c7c5a4337
console.log("level:", game.currentGame.length);