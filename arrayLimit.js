  // 7 kyu
  // Small enough? - Beginner
  //   You will be given an array and a limit value.
  //   You must check that all values in the array are below or
  //   equal to the limit value. If they are, return true.
  //   Else, return false.

  // You can assume all values in the array are numbers. -->
import frontend from '/modules/frontendModule.js';

function smallEnough(a, limit){
  return a.every(num => num <= limit );
}

smallEnough.newName = 'Are All Values Within the Limit?';
smallEnough.inputWidth = 11;
let testArr = [1,2,3];
frontend(smallEnough, testArr, 3);
