import frontend from '/modules/frontendModule.js';

function mathCeil(number) {
  let [int, dec] = number.toString().split('.').map(numStr => Number(numStr));
  if (dec > 0) int++;
  return int;
}

mathCeil.newName = 'Math.ceil Issues';
mathCeil.link = 'https://www.codewars.com/kata/5267faf57526ea542e0007fb';
mathCeil.kyu = 5;
mathCeil.info = `Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()`;


frontend(mathCeil, 0.4); //==>  -->  1
// mathCeil(0.5); ==>  -->  1
// mathCeil(0.00000001); ==>  -->  1


// CODEWARS FORMATTING
// Math.ceil = function(number) {
//   let [int, dec] = number.toString().split('.').map(numStr => Number(numStr));
//   if (dec > 0) int++;
//   return int;
// };
