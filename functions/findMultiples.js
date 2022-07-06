import frontend from '/modules/frontendModule.js';

function findMultiples(baseInt, limitInt) {
  if (baseInt < 1 || limitInt < 1) return 'enter positive integers only please';
  if (limitInt <= baseInt) return 'limit must be higher than base'
  let arr = [];
  for (let i = baseInt; i <= limitInt; i = i + baseInt) arr.push(i);
  return arr;
}

findMultiples.newName = 'Find Multiples of a Number';
findMultiples.kyu = 8;
findMultiples.link = 'https://www.codewars.com/kata/58ca658cc0d6401f2700045f';
findMultiples.inputWidth = 7;
findMultiples.info = `A program that takes a value, baseInt, and returns a list of its multiples up to another value, limitInt. If limitInt is a multiple of baseInt, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.`;

frontend(findMultiples, 2, 6); // ==> [2, 4, 6]

