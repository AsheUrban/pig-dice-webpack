
// Business Logic for Player ------

function Player() {
  this.totalScore = 0;
  this.currentScore = 0;
}

let newPlayer1 = new Player(0, 0);
let newPlayer2 = new Player(0, 0);

Player.prototype.RollDice = function (max) {
  this.currentScore = Math.ceil(Math.random() * 6);
}

Player.prototype.AddTotalScore = function () {
  if (this.currentScore != 1) {
    this.totalScore += this.currentScore; 
  } else {
// this.TotalScore = this.TotalScore
  }
}

Player.prototype.BigRoller = function (player1TotalScore, player2TotalScore) {
  if (newPlayer1.totalScore > newPlayer2.totalScore) {
    return "player 1 is a Big Roller!";
  } else if (newPlayer1.totalScore < newPlayer2.totalScore) {
    return "player 2 is a Big Roller!";
  } else {
    return "You're both BIG LOSERS (don't take me to DEI)";
  }
}

// UI Logic

$(document).ready(function () {
  $("#button1").click(function(event) {
    event.preventDefault();
    newPlayer1.RollDice();
    newPlayer1.AddTotalScore();
    $("#p1score").html(newPlayer1.totalScore);
    console.log(newPlayer1);
  });

$("#button2").click(function(event) {
  event.preventDefault();
  newPlayer2.RollDice();
  newPlayer2.AddTotalScore();
  $("#p2score").html(newPlayer2.totalScore);
  console.log(newPlayer2);
});

$("#button3").click(function(event){
  event.preventDefault();
  $("#big-roller").html(newPlayer1.BigRoller(newPlayer1.totalScore, newPlayer2.totalScore));
  newPlayer1.totalScore = 0;
  newPlayer2.totalScore = 0;
  $("#p1score").html(newPlayer1.totalScore);
  $("#p2score").html(newPlayer2.totalScore);
});
});
