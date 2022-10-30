import frontend from '/modules/frontendModule.js';

function Xbonacci(signature,n){
  signature = signature.slice();
  if (n <= signature.length) {
    signature.length = n;
    return signature;
  }
  let origLen = signature.length;
  let moreToAdd = n - origLen;
  while (moreToAdd) {
    signature.push(addXLastNums(signature, origLen))
    moreToAdd--;
  }
  return signature;

  function addXLastNums(arr, xLen) {
    let result = 0;
    let last = arr.length - 1;
    while (xLen > 0) {
      result += arr[last];
      last--;
      xLen--;
    }
    return result;
  }
}


Xbonacci.newName = "Xbonacci Sequence";
// Xbonacci.inputWidth = 8;
Xbonacci.kyu = 6 ;
Xbonacci.info = `If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.`;
Xbonacci.link = 'https://www.codewars.com/kata/556e0fccc392c527f20000c5';

frontend(Xbonacci, [0,1], 10) // ==> [0,1,1,2,3,5,8,13,21,34]