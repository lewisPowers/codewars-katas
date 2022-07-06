import frontend from '/modules/frontendModule.js';

function distinct(a) {
  return [...new Set(a)];
}

distinct.kyu = 8;
distinct.link = 'https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118';
distinct.inputWidth = 20;
distinct.newName = 'Remove duplicates from list';
distinct.info = `A function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence stays the same.`;

frontend(distinct, [1,1,2]) // ==> [1,2]
