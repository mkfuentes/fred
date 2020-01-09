var game = {
  count: 0,
  possibilities: [
    "zorro",
    "rana",
    "gallina",
    "panda",
    "gato",
    "perro",
    "caballo",
    "mapache",
    "oso",

    "conejo"
  ],
  currentGame: [],
  player: [],
  strict: true
};

function clearGame() {
  game.currentGame = [];
  game.count = 0;
  addCount();
}

function newGame() {
  clearGame();
}

function showMoves() {
  var i = 0;
  var moves = setInterval(function() {
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
  }, 1000);

  clearPlayer();
}

function playGame(field) {
  console.log("este es el field", field);
  var circle = document.getElementsByClassName("circle");
  var arrayCircle = Array.from(circle);
  console.log(arrayCircle);

  arrayCircle.map(elemento => {
    if (elemento.classList.contains("circleColor")) {
      elemento.classList.remove("circleColor");
    }
  });

  document.getElementById(field).classList.add("circleColor");
  // a.classList.addClass("circleColor");
  // $(field).addClass("circleColor");
  setTimeout(function() {
    document.getElementById(field).classList.remove("circleColor");
    //$(field).removeClass("circleColor");
  }, 500);
  console.log("field1", field);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = id;
  console.log("field", field);
  game.player.push(field);
  playerTurn(field);
}

function playerTurn(x) {
  if (
    game.player[game.player.length - 1] !==
    game.currentGame[game.player.length - 1]
  ) {
    if (game.strict) {
      alert("Erroneo, volvamos a empezar :)");
      newGame();
    } else {
      alert("Intentar de nuevo");
      showMoves();
    }
  } else {
    console.log("Bien");
    var check = game.player.length === game.currentGame.length;
    if (check) {
      if (game.count == 20) {
        alert("Alcanzaste el máximo nivel, felicidades :D");
      } else {
        alert("¡Muy bien! Siguiente nivel :)");
        nextLevel();
      }
    }
  }
}

function nextLevel() {
  addCount();
}

function generateMove() {
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
  showMoves();
}

function addCount() {
  game.count++;
  $("#clickNumber").addClass("animated fadeOutRight");

  setTimeout(function() {
    $("#clickNumber")
      .removeClass("fadeOutRight")
      .html(game.count)
      .addClass("fadeInLeft");
  }, 20);

  generateMove();
}

newGame();
