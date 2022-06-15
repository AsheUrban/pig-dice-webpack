
// Business Logic for Player ------

function Player() {
  this.score = 0;
  this.lastroll2 = 0;
}

// Business Logic for Dice

function rollDice() {
  return Math.floor(Math.random() * 7);
} 
// rollDice(); = 1-6// this is currentScore

