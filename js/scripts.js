
// Business Logic for Player ------

function Player() {
  this.totalScore = 0;
  this.currentScore = 0;
}

let newPlayer1 = new Player(0, 0);
let newPlayer2 = new Player(0, 0);

Player.prototype.RollDice = function (max) {
  this.currentScore = Math.floor(Math.random() * 7);
}


