import frontend from '/modules/frontendModule.js';

function sum(digits) {
  if (!digits) return '';
  let digitsArr = digits.toString().split('');
  let sum = digitsArr.reduce((a, c) => {
    return a + Number(c);
  }, 0);
  return digitsArr.join(' + ').concat(' = ', sum)
}

sum.newName = 'Sum of Digits';
sum.kyu = 7;
sum.link = '';
sum.inputWidth = 20;
sum.info = `This program sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.
Digits can be a number, a string, or undefined. In case of undefined, returns an empty string ''.
To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.`;

frontend(sum, "64323") // ==> "6 + 4 + 3 + 2 + 3 = 18"
