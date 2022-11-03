import frontend from '/modules/frontendModule.js';

function orderWeight(strng) {
  function getWeight(numStr) {
    return numStr.split('').reduce((total, curr) => total + Number(curr), 0);
  }

  function createObjArr(string) {
    return string.split(' ').map(val =>  {
      return { [val]: getWeight(val) }
    } )
  }

  function sorter(a, b) {
    if (a[Object.keys(a)[0]] === b[Object.keys(b)[0]]) {
      a = Object.keys(a)[0];
      b = Object.keys(b)[0];
    } else {
      a = a[Object.keys(a)[0]];
      b = b[Object.keys(b)[0]];
    }
    return a < b ? -1 : a > b ? 1 : 0;
  }

  return createObjArr(strng).sort(sorter).map(obj => Object.keys(obj)[0]).join(' ');
}

orderWeight.newName = 'Weight for Weight';
orderWeight.kyu = 5;
orderWeight.link = 'https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript';
// orderWeight.inputWidth = 11;
orderWeight.info = `My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?`;

frontend(orderWeight, "103 123 4444 99 2000") // ==>  "2000 103 123 4444 99"

// orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") ==> "11 11 2000 10003 22 123 1234000 44444444 9999"




