import frontend from '/modules/frontendModule.js';

function addLength(str) {
  return str.split(' ').map(word => {
    let len = word.length;
    return `${word} ${len}`;
  })
}

addLength.newName = 'Length of Each Word';
addLength.inputWidth = 20;
addLength.info = 'Enter a sentence and the function will return an array with each word and its length.';
addLength.link = 'https://www.codewars.com/kata/559d2284b5bb6799e9000047';
frontend(addLength, 'word length per each');
//   What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.