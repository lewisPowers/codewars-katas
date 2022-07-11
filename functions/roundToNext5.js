import frontend from '/modules/frontendModule.js';

function roundToNext5(n){
  if (n % 5 === 0) return n;
  let remainder = n % 5;
  let roundUp = n < 0 ? remainder * -1 : 5 - remainder;
  return n + roundUp;
}

roundToNext5.kyu = 7;
roundToNext5.link = 'https://www.codewars.com/kata/55d1d6d5955ec6365400006d';
roundToNext5.newName = 'Round up to the next multiple of 5';
roundToNext5.info = `Given an integer as input, this function will round it to the next (meaning, "higher") multiple of 5.`;

frontend(roundToNext5, -13)