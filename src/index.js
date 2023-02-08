import "./css/styles.css";
import Player from "./scripts.js";

let newPlayer1 = new Player(0, 0, 0);
let newPlayer2 = new Player(0, 0, 0);

$(document).ready(function () {
  $("#player1-roll").click(function (event) {
    event.preventDefault();
    newPlayer1.RollDice();
    if (newPlayer1.currentScore === 1) {
      $("#player2-roll").show();
      $("#player2-hold").show();
      $("#player1-roll").hide();
      $("#player1-hold").hide();
    }
    newPlayer1.AddRoundScore();
    $("#p1-current-score").html(newPlayer1.currentScore);
    $("#p1-round-score").html(newPlayer1.roundScore);
    console.log(newPlayer1);
  });

  $("#player2-roll").click(function (event) {
    event.preventDefault();
    newPlayer2.RollDice();
    if (newPlayer2.currentScore === 1) {
      $("#player1-roll").show();
      $("#player1-hold").show();
      $("#player2-roll").hide();
      $("#player2-hold").hide();
    }
    newPlayer2.AddRoundScore();
    $("#p2-current-score").html(newPlayer2.currentScore);
    $("#p2-round-score").html(newPlayer2.roundScore);
    console.log(newPlayer2);
  });

  $("#player1-hold").click(function (event) {
    event.preventDefault();
    $("#player2-roll").show();
    $("#player2-hold").show();
    $("#player1-roll").hide();
    $("#player1-hold").hide();
    newPlayer1.AddTotalScore();
    $("#p1-total-score").html(newPlayer1.totalScore);
    $("#big-roller").html(
      newPlayer1.BigRoller(newPlayer1.totalScore, newPlayer2.totalScore)
    );
    newPlayer1.roundScore = 0;
  });

  $("#player2-hold").click(function (event) {
    event.preventDefault();
    $("#player1-roll").show();
    $("#player1-hold").show();
    $("#player2-roll").hide();
    $("#player2-hold").hide();
    newPlayer2.AddTotalScore();
    $("#p2-total-score").html(newPlayer2.totalScore);
    $("#big-roller").html(
      newPlayer2.BigRoller(newPlayer2.totalScore, newPlayer1.totalScore)
    );
    newPlayer2.roundScore = 0;
  });
});
