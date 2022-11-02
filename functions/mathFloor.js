import frontend from '/modules/frontendModule.js';

function mathFloor(number) {
  let [intStr] = number.toString().split('.');
  return Number(intStr);
};

mathFloor.newName = 'Math.floor Issues';
mathFloor.link = 'https://www.codewars.com/kata/5267faf57526ea542e0007fb';
mathFloor.kyu = 5;
mathFloor.info = `Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()`;


frontend(mathFloor, .4); //==>  -->  0
// mathFloor(.5); ==>  -->  0


// CODEWARS FORMATTING
// Math.floor = function(number) {
//   let [intStr] = number.toString().split('.');
//   return Number(intStr)
// };
