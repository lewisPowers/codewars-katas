import frontend from '/modules/frontendModule.js';

function move (position, roll) {
  return roll * 2 + position;
}

move.newName = 'Grasshopper - Terminal game move function';
move.kyu = 8;
move.link = 'https://www.codewars.com/kata/563a631f7cbbc236cf0000c2';
move.info = `In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.`;

frontend(move, 3, 6) // ==> 15