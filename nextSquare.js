import frontend from '/modules/frontendModule.js';

function findNextSquare(sq) {
  if ( Math.sqrt(sq) !== Math.trunc(Math.sqrt(sq) ) ) return -1;
  return Math.pow(Math.sqrt(sq) + 1, 2);
}

findNextSquare.newName = 'Find the Next Square';
findNextSquare.inputWidth = 9;
findNextSquare.info = 'Enter a number that is a perfect square and the function returns the very next perfect square.';
findNextSquare.link = 'https://www.codewars.com/kata/56269eb78ad2e4ced1000013';
frontend(findNextSquare, 121);

// console.log('Find the Next Square: ', findNextSquare(121), findNextSquare(122), findNextSquare(319225), findNextSquare(625), findNextSquare(15241383936))
