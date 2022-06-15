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
  this.currentId += 1; //should this just asign two ids?
  return this.currentId;
};

ScoreCard.prototype.findPlayer = function(id) {
  if (this.players[id] != undefined) {
    return this.players[id];
  }
  return false;
}

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

function rollDice() {
  return Math.floor(Math.random() * 7);
} 
// rollDice(); = 1-6// this is currentScore

// UI Logic ------

let scoreCard = new ScoreCard();

function showScore(playerId) {
  const player = ScoreCard.findPlayer(playerId);
  $("#show-score").show();
  $("#btn").click(function(){
    
  });
}

$('#displayRollDice').empty();
