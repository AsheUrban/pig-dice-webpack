// import { TestScheduler } from 'jest';
import Player from './../src/scripts.js';

describe('Player', () => {

  test("should correctly create a player object with three variables", () =>  {
    const player = new Player(0,0,0);
    expect (player.totalScore).toEqual(0);
    expect (player.roundScore).toEqual(0);
    expect (player.currentScore).toEqual(0);
})

  // test('should generate a random number between 1 and 6', () => {
  //   const newPlayer = new Player(0)
  //   expect(newPlayer.rollDice()).toEqual(number);
  // });
  
});