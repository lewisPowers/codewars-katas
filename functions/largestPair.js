import frontend from '/modules/frontendModule.js';

function largestPairSum (numbers) {
  numbers = numbers.slice();
  let largestNums = numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  largestNums.push(...numbers.splice(numbers.indexOf(Math.max(...numbers)), 1) );
  return largestNums.reduce((a, b) => a + b);
}

largestPairSum.newName = 'Largest Pair Sum In Array';
largestPairSum.link = 'https://www.codewars.com/kata/556196a6091a7e7f58000018';
largestPairSum.kyu = 7;
largestPairSum.info = `Given a sequence of numbers, find the largest pair sum in the sequence.`;

// frontend(largestPairSum, [10, 14, 2, 23, 19]); //==>  -->  42
frontend(largestPairSum, [-100, -29, -24, -19, 19]); //==>  -->  0
// let test3 = [87, -78, 66, 91, 93, 43, -52, -65, 100, -63, 53, -43, 58, -47, -43]
// frontend(largestPairSum, test3); //==>  -->  193