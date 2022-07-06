import frontend from '/modules/frontendModule.js';

function removeSmallest(numbers) {
  if (numbers.length <= 1) return [];
  let copy = numbers.slice();
  let lowest = Infinity;
  numbers.forEach((num) => {
    if (num < lowest) lowest = num;
  })
  copy.splice(copy.indexOf(lowest), 1);
  return copy;
}

removeSmallest.newName = 'Remove the minimum';
removeSmallest.kyu = 7;
removeSmallest.link = 'https://www.codewars.com/kata/563cf89eb4747c5fb100001b';
removeSmallest.inputWidth = 10;
removeSmallest.info = `Given an array of integers, this function removes the smallest value.`

frontend(removeSmallest, [5,3,2,1,4])

// Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]