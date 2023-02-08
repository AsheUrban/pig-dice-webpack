# _Two Day Project: Pig Dice_

#### Contributors: _Manuel Raygoza_ _Donovan Weber_ & _Ashe Urban_

#### Refractored to use webpack by: _Ashe Urban_

## Technologies Used

* _JavaScript_
* _JQuery_
* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_


## Description

#### _A game of chance!_

_Write a program where two users can play Pig dice against each other. Start with your business logic, and once it is completed move onto your user interface logic._

_Make sure that your user interface and business logics are clearly separated, and practice separation of concerns when designing your user interface function._

_Link to lesson:_ https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/game-of-choice-two-day-project

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
