// Business Logic for ScoreCard ------

function ScoreCard () {
  this.players = {};
  this.currentId = 0;
}

ScoreCard.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};

ScoreCard.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// ScoreCard.prototype.findPlayer = function(id) {
//   if (this.players[id] != undefined) {
//     return this.players[id];
//   }
//   return false;
// }

// ScoreCard.prototype.deletePlayer = function(id) {
//   if (this.players[id] === undefined) {
//     return false;
//   }
//   delete this.players[id];
//   return true; 
// };

// Business Logic for Player ------

function Player(firstName, totalScore) {
  this.firstName = firstName;
  this.totalScore = totalScore;
}

// Player.prototype.update = function() {
//   return this.totalScore + currentScore;
// }

// Business Logic for Dice

function rollDice(max) {
  return Math.floor(Math.random() * max);
}

function rollTheDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
  console.log(randomeNumber);
}
