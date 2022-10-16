import frontend from '/modules/frontendModule.js';

function findDigit(num, nth){
  if (nth <= 0) return -1;
  let reversedDigits = num.toString().split('').reverse().map(digit => parseInt(digit)).filter(num => !isNaN(num));
  if (nth > reversedDigits.length) return 0;
  return reversedDigits[nth - 1];
}

findDigit.newName = 'Find Nth Digit of a Number';
findDigit.kyu = 7;
findDigit.link = 'https://www.codewars.com/kata/577b9960df78c19bca00007e';
// findDigit.inputWidth = 7;
findDigit.info = `Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).`;

frontend(findDigit, 5673, 4) // ==> 5





