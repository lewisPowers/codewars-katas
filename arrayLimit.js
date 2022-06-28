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
smallEnough.link = 'https://www.codewars.com/kata/57cc981a58da9e302a000214';
smallEnough.info = 'Given an array of numbers and a limit value, will return true if ALL values are less than or equal to the limit value.';
let testArr = [1,2,3];
frontend(smallEnough, testArr, 3);
