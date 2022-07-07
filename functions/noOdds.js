import frontend from '/modules/frontendModule.js';

function noOdds( values ){
  return values.filter( val => val % 2 === 0 )
}

frontend(noOdds, [1, 2, 3, 4, 5, 6, 7, 8])