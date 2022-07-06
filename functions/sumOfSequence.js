import frontend from '/modules/frontendModule.js';

function sequenceSum(begin, end, step) {
  let sum = 0;
  for (let i = begin; i <= end; i += step) sum += i;
  return sum;
};


sequenceSum.link = 'https://www.codewars.com/kata/586f6741c66d18c22800010a';
sequenceSum.newName = 'Sum of a Sequence';
sequenceSum.kyu = 7;
sequenceSum.inputWidth = 4;
sequenceSum.info = `Returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function returns 0`

frontend(sequenceSum, 2, 6, 2)

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)