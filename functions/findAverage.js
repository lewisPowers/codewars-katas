import frontend from '/modules/frontendModule.js';

function findAverage(nums) {
  return nums.reduce((total, curr) => total + curr ) / nums.length;
}

findAverage.newName = 'Grasshopper - Array Mean';
findAverage.link = 'https://www.codewars.com/kata/55d277882e139d0b6000005d';
findAverage.kyu = 8;
// findAverage.inputWidth = 4;
findAverage.info = `Find the mean (average) of a list of numbers in an array.`;

frontend(findAverage, [1, 3, 5, 7]); // == 4

// formatted from codewars:
// var findAverage = function (nums) {
//   return nums.reduce((total, curr) => total + curr ) / nums.length;
// }



