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
  player:[],
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

function uno() {

    var floor = Math.floor(Math.random()*9);
    var actualPosition = game.possibilities[floor];

//console.log(`Número random: ${random}`);
//console.log(`Random multiplicado: ${multiplicacion}`);
//console.log(`Posición del arreglo: ${floor}`);
//console.log(actualPosition, "es el actual");

  var itemActual = document.getElementById(actualPosition);
  itemActual.classList.add("circleColor");
  setTimeout(function() {
    itemActual.classList.remove("circleColor");
  }, 500);

  //console.log("possibilities", game.possibilities);
//console.log("currentGame, actual:", game.currentGame);
//alert(game.currentGame.length);


  return game.currentGame.push(actualPosition),
  console.log("nivel:", game.currentGame.length),
  console.log(game.currentGame);
}

uno();

function addToPlayer(id){
    var i = id
    game.player.push(i)
    compare()
}

function compare(){
    if(JSON.stringify(game.player) == JSON.stringify(game.currentGame)){
        return console.log("bien")
    }else{
            return console.log("mal")

        }
    }