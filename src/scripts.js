export default function Player(totalScore, roundScore, currentScore) {
  this.totalScore = 0;
  this.roundScore = 0;
  this.currentScore = 0;
}

let newPlayer1 = new Player(0, 0, 0);
let newPlayer2 = new Player(0, 0, 0);

Player.prototype.RollDice = function (max) {
  this.currentScore = Math.ceil(Math.random() * 6);
}

Player.prototype.AddRoundScore = function (currentScore, roundScore) {
  if (this.currentScore != 1) {
    this.roundScore += this.currentScore;
  }
  if (this.currentScore === 1) {
    this.roundScore = 0;
  } else {
    return this.roundScore;
  }
};

Player.prototype.AddTotalScore = function (roundScore, totalScore) {
  if (this.roundScore != 0) {
    this.totalScore += this.roundScore;
  } else {
  }
};

Player.prototype.BigRoller = function (totalScore) {
  if (newPlayer1.totalScore >= 100) {
    return "player 1 is a Big Roller!";
  } else if (newPlayer2.totalScore >= 100) {
    return "player 2 is a Big Roller!";
  } else {
  }
}

