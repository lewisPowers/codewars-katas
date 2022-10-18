import frontend from '/modules/frontendModule.js';

function numbersOfLetters(integer) {
  let currentValue = parseIntString(integer);
  let array = [ currentValue ];
  currentValue = parseIntString(currentValue.length);
  while (array[array.length - 1] !== currentValue) {
    array.push(currentValue);
    currentValue = parseIntString(currentValue.length);
  }

  return array;

  function parseIntString(int) {
    const numbers = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      0: 'zero'
    }
    let numStr = int.toString();
    return numStr.split('').map(digit => numbers[digit]).join('');
  }

}

numbersOfLetters.newName = 'Numbers of Letters of Numbers';
numbersOfLetters.link = 'https://www.codewars.com/kata/599febdc3f64cd21d8000117';
numbersOfLetters.info = `If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:`

numbersOfLetters.kyu = 6;
frontend(numbersOfLetters, 60); // ==> ["sixzero", "seven", "five", "four"]
