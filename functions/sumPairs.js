// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements.
// Be sure your code doesn't time out.

import frontend from '/modules/frontendModule.js'

function sum_pairs(nums, sum, split = 1){
  if (split === nums.length) return undefined;
  for (let i = 0, j = i + split; i < nums.length - 1; i++, j++){
    if (nums[i] + nums[j] === sum) return [ nums[i], nums[j] ];
  }
  return sum_pairs(nums, sum, split + 1);
}

sum_pairs.newName = 'Sum of Pairs';
sum_pairs.link = 'https://www.codewars.com/kata/54d81488b981293527000c8f';
sum_pairs.info = 'Given a list of integers and a single sum value, this function returns the first two values (parse from the left please) in order of appearance that add up to form the sum.';
sum_pairs.kyu = 5;
sum_pairs.inputWidth = 11;
frontend(sum_pairs, [4, 3, 2, 3, 4], 6)
