// import { TestScheduler } from 'jest';
import Player from './../src/scripts.js';

describe('Player', () => {

  test("should correctly create a player object with three variables", () =>  {
    const player = new Player(0,0,0);
    expect (player.totalScore).toEqual(0);
    expect (player.roundScore).toEqual(0);
    expect (player.currentScore).toEqual(0);
})

  test('should generate a random number between 1 and 6', () => {
    const newPlayer = new Player(0)
    expect(newPlayer.RollDice()).toEqual();
  });
  
  test('should add current score to round score', () => {
    const newPlayer = new Player()
    expect(newPlayer.AddRoundScore(0)).toEqual(0);
  });

  test('should add current score to round score', () => {
    const newPlayer = new Player()
    expect(newPlayer.AddRoundScore(0)).toEqual(0);
  });

  test('should add current score to round score', () => {
    const newPlayer = new Player()
    newPlayer.currentScore = 1;
    expect(newPlayer.AddRoundScore()).toEqual();
  });

  test('should add round score to total score', () => {
    const newPlayer = new Player()
    newPlayer.roundScore = 5;
    expect(newPlayer.AddTotalScore()).toEqual();
  });
  
  // test('should determine if player1 is a winner based on score of 10 or greater', () => {
  //   const newPlayer1 = new Player()
  //   newPlayer1.totalScore >= 10;
  //   expect(newPlayer1.BigRoller()).toEqual("player 1 is a Big Roller!");
  // });

  // test('should determine if player2 is a winner based on score of 100 or greater', () => {
  //   const newPlayer2 = new Player()
  //   newPlayer2.totalScore >= 10;
  //   expect(newPlayer2.BigRoller()).toEqual("player 2 is a Big Roller!");
  // });

  
});

