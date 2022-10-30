import frontend from '/modules/frontendModule.js';

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}


twoDecimalPlaces.newName = "Formatting decimal places #0";
// twoDecimalPlaces.inputWidth = 8;
twoDecimalPlaces.kyu = 8 ;
twoDecimalPlaces.info = `Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.`;
twoDecimalPlaces.link = 'https://www.codewars.com/kata/5641a03210e973055a00000d';

frontend(twoDecimalPlaces, 4.659725356) // ==> 4.66