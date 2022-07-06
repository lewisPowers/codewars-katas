import frontend from '/modules/frontendModule.js';

function minValue(values){
  return Number([...(new Set(values))].sort().join(''));
}

minValue.kyu = 7;
minValue.link = 'https://www.codewars.com/kata/5ac6932b2f317b96980000ca';
minValue.newName = 'Form The Minimum';
minValue.inputWidth = 20;
minValue.info = `Given a list of digits, this function returns the smallest number that could be formed from these digits, using the digits only once (ignores duplicates).`;

frontend(minValue, [1, 3, 1]) // ==> 13
