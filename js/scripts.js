
// Business Logic for Player ------

function Player(totalScore, roundScore, currentScore) {
  this.totalScore = 0;
  this.roundScore = 0;
  this.currentScore = 0;
}

let newPlayer1 = new Player(0, 0, 0);
let newPlayer2 = new Player(0, 0, 0);

Player.prototype.RollDice = function (max) {
  this.currentScore = Math.ceil(Math.random() * 6);
}

Player.prototype.AddRoundScore = function () {
  if (this.currentScore != 1) {
    this.roundScore += this.currentScore;
  } if (this.currentScore === 1) { // || player holds
    this.roundScore = 0;
  } else {

  return this.roundScore;
  }
}

Player.prototype.AddTotalScore = function () {
  if (this.roundScore != 0) {
    this.totalScore += this.roundScore; 
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
    newPlayer1.AddRoundScore();
    $("#p1currentscore").html(newPlayer1.roundScore);
    console.log(newPlayer1);
  });
  
  $("#button2").click(function(event) {
    event.preventDefault();
    newPlayer2.RollDice();
    newPlayer2.AddRoundScore();
    $("#p2currentscore").html(newPlayer2.roundScore);
    console.log(newPlayer2);
  });

  $("#hold-player1-button").click(function(event) {
    event.preventDefault();
    newPlayer1.AddTotalScore();
    $("#p1score").html(newPlayer1.totalScore);
    newPlayer1.roundScore = 0
  });

  $("#button3").click(function(event){
    event.preventDefault();
    $("#big-roller").html(newPlayer1.BigRoller(newPlayer1.totalScore, newPlayer2.totalScore));
    newPlayer1.totalScore = 0;
    newPlayer2.totalScore = 0;
    $("#p1score").html(newPlayer1.totalScore);
    $("#p2score").html(newPlayer2.totalScore);
  });

  $("#hold-player2-button").click(function(event) {
    event.preventDefault();
    newPlayer2.AddTotalScore();
    $("#p2score").html(newPlayer2.totalScore);
    newPlayer2.roundScore = 0
  });
});
