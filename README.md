# _Two Day Project: Pig Dice_

#### Contributors: _Manuel Raygoza_ _Donovan Weber_ _Ashe Urban_

#### _A game of chance!_


## Technologies Used

* JavaScript
* JQuery
* HTML
* CSS
* Boostrap
* Markdown
* Git/hub

## Description

_See Brainstorm below_

_Link to lesson:_ https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/game-of-choice-two-day-project

## Tests
# _Describe: Roll()_

Test: "It should create player"
Code: 
Expected Output: player1 = {score, lastroll

Test: "It should return random number between 1-6 when button is submitted"
Code: rollDice();
Expected Output: player1 = random number between 1-6

Test: "It should add currentScore to RoundScore to find TotalScore. If currentScore is 1 is should 0 out RoundScore and not add anything to the totalScore."
Code: this.roundScore;
Expected Output: {currentScore, roundScore, totalScore}

## Setup/Installation Requirements

* _Clone or download this repository to your local_
* _Navigate to the top level of the directory_
* _Run npm install_
* _Then, npm run start_

## Known Bugs

* _Doesn't reset once someone wins/ no winner is determined._


## License

_MIT_

Copyright (c) _2022_ _Manuel Raygoza_ _Donovan Weber_ _Ashe Urban_

## Brainstorm

Easy: Computer always stops after second roll.
Hard: Computer uses strategy based on current total and rolled dice.
 
human player vs human player
 
let player1TotalScore = 0;
let player2TotalScore = 0;
 
create a new game (like addressBook)
create a object for players
  create player objects
    name:
    totalScore:
 
 
create function that creates a random number between 1 and 6 (math.random(1,7))
if number !=== 1, add value to currentScore
if number === 1, currentScore ===0; turn over; switch player
return internalTurnScore + player[?]TotalScore
 
create a "hold" function to add currentScore to player's totalScore
  reset internalTurnScore to 0
  switch player
 
 
create function to check if player's score >=100
check if player's score >=100 => WINNER
else keep playing
