import frontend from '/modules/frontendModule.js';

function findNextSquare(sq) {
  if ( Math.sqrt(sq) !== Math.trunc(Math.sqrt(sq) ) ) return -1;
  return Math.pow(Math.sqrt(sq) + 1, 2);
}

findNextSquare.newName = 'Find the Next Square';
findNextSquare.inputWidth = 9;
frontend(findNextSquare, 121);

// console.log('Find the Next Square: ', findNextSquare(121), findNextSquare(122), findNextSquare(319225), findNextSquare(625), findNextSquare(15241383936))
