import frontend from '/modules/frontendModule.js';

function twoSort(arrOfStrings) {
  let sorted = arrOfStrings.sort( (a,b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  })
  return sorted[0].split('').map( (letter, i, arr) => {
    return i === arr.length - 1 ? letter : `${letter}***`;
  }).join('');
}

twoSort.link = 'https://www.codewars.com/kata/57cfdf34902f6ba3d300001e';
twoSort.newName = 'Sort and Star';
twoSort.kyu = 8;
twoSort.inputWidth = 10;
twoSort.info = `Given a vector of strings, this function will sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value will be a string, and have "***" between each of its letters.`;

frontend (twoSort,["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] )
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))
