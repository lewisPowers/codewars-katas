import frontend from '/modules/frontendModule.js';

function mathRound(number) {
  let [intStr, decStr] = number.toString().split('.');
  let int = Number(intStr);
  if (decStr != undefined) {
    let firstDec = Number(decStr[0]);
    if (firstDec >= 5) int++;
  }
  return int;
};

mathRound.newName = 'Math.round Issues';
mathRound.link = 'https://www.codewars.com/kata/5267faf57526ea542e0007fb';
mathRound.kyu = 5;
mathRound.info = `Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()`;


frontend(mathRound, .4); //==>  -->  0
// mathRound(.5); ==>  -->  1


// CODEWARS FORMATTING
// Math.round = function(number) {
//   let [intStr, decStr] = number.toString().split('.');
//   let int = Number(intStr);
//   if (decStr != undefined) {
//     let firstDec = Number(decStr[0]);
//     if (firstDec >= 5) int++
//   }
//   return int;
// };

