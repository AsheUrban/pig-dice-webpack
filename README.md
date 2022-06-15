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

Test: "It should addPlayer and assign id"
Code: 
Expected Output: player1 = {firstName, totalScore: undefined, id: 1}

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* 

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
