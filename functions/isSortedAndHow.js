import frontend from '/modules/frontendModule.js';

function isSortedAndHow(array) {
  let copy = array.slice()
  let sorted = function(isAsc) {
    return copy.sort((a, b) => {
      if (isAsc) return a - b;
      return b - a;
    })
  }
  let isSame = function(sortedArr) {
    for (let i = 0; i < array.length; i++) if (array[i] !== sortedArr[i]) return false;
    return true;
  }
  for (let i = 0; i < array.length; i++) {
    if (isSame(sorted(true))) return 'yes, ascending';
    if (isSame(sorted())) return 'yes, descending';
    return 'no';
  }
}

isSortedAndHow.kyu = 7;
isSortedAndHow.link = 'https://www.codewars.com/kata/580a4734d6df748060000045';
isSortedAndHow.inputWidth = 18;
isSortedAndHow.newName = 'Sorted? Yes? No? How?'
isSortedAndHow.info = `Method that accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise`

frontend(isSortedAndHow, [15, 7, 3, -8]) // ==> 'yes, descending'
