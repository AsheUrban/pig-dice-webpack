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
    expect(newPlayer.AddRoundScore(1)).toEqual();
  });

  test('should add round score to total score', () => {
    const newPlayer = new Player()
    newPlayer.roundScore = 5;
    expect(newPlayer.AddTotalScore(5)).toEqual();
  });

  
});

