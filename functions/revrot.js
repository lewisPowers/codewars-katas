import frontend from '/modules/frontendModule.js';

function revrot(str, sz) {
  if (sz <= 0 || str == '') return '';
  let rotate = function(substr) {
    return substr.slice(1).concat(substr[[0]]);
  }
  let reverse = function(substr) {
    return substr.split('').reverse().join('')
  }
  let chunks = function() {
    let arr = [];
    if (typeof str !== 'string') str = str.toString()
    let copy = str.slice()
    while (copy.length >= sz) {
      let substr = copy.slice(0, sz);
      arr.push(substr);
      copy = copy.slice(sz)
    }
    return arr;
  }
  let isSumOfDigitsCubedDivibleByTwo = function(substr)  {
    let sum = substr.split('').map(char => {
      return Math.pow(char, 3);
    }).reduce((a, c) => {
      return a + c;
    }, 0);
    return sum % 2 === 0 ? true : false;
  }

  let chunkArr = chunks();
  return chunkArr.map(substr => {
    if (isSumOfDigitsCubedDivibleByTwo(substr)) return reverse(substr);
    return rotate(substr);
  }).join('');
}

revrot.kyu = 6;
revrot.newName = 'Reverse or Rotate?';
revrot.inputWidth = 12;
revrot.link = 'https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991';
revrot.info = `The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.`;


frontend(revrot, "123456987654", 6) // ==> "234561876549"
