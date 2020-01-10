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
    "oso"
  ],
  currentGame: [],
  player: [],
  restart: true
};

function clearGame() {
  game.currentGame = [];
  game.count = 0;
  addCount();
}

function newGame() {
  clearGame();
}

// function showMoves() {
//   var i = 0;
//   var moves = setInterval(function() {
//     playGame(game.currentGame[i]);
//     i++;
//     if (i >= game.currentGame.length) {
//       clearInterval(moves);
//     }
//   }, 1000);

//   clearPlayer();
// }

function showMoves() {
  var i = 0;
  var moves = setInterval(function() {
    playGame(game.currentGame[i]);
    let b = document.getElementById(game.currentGame[i]);
    b.classList.add("circleColor");
    setTimeout(function() {
      b.classList.remove("circleColor");
    }, 600);
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
  setTimeout(function() {
    document.getElementById(field).classList.remove("circleColor");
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
    if (game.restart) {
      alert("Erroneo, volvamos a empezar :D");
      newGame();
    } else {
      alert("Intentar de nuevo");
      showMoves();
    }
  } else {
    console.log("Bien");
    var check = game.player.length === game.currentGame.length;
    if (check) {
      if (game.count == 100) {
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

//NIVEL IMPRESO EN EL DOM CON ANIMACION

function addCount() {
  game.count++;
  document
    .getElementById("clickNumber")
    .classList.add("animated", "fadeOutRights");

  setTimeout(function() {
    document.getElementById("clickNumber").classList.remove("fadeOutRight");
    document.getElementById("clickNumber").classList.add("fadeInLeft");
    $("#clickNumber").html(game.count);
  }, 20);

  generateMove();
}

newGame();
