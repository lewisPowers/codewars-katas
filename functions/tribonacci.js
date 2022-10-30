import frontend from '/modules/frontendModule.js';

function tribonacci(signature,n){
  signature = signature.slice();
  if (n <= 3) {
    signature.length = n;
    return signature;
  }
  let moreToAdd = n - 3;

  while (moreToAdd) {
    signature.push(addLastThree(signature));
    moreToAdd--;
  }
  return signature;

  function addLastThree(arr) {
    let last = arr.length - 1;
    return arr[last] + arr[last - 1] + arr[last - 2];
  }
}


tribonacci.newName = "Tribonacci Sequence";
// tribonacci.inputWidth = 8;
tribonacci.kyu = 6 ;
tribonacci.info = `Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.`;
tribonacci.link = 'https://www.codewars.com/kata/556deca17c58da83c00002db';

frontend(tribonacci, [1,1,1], 10) // ==> [1,1,1,3,5,9,17,31,57,105]