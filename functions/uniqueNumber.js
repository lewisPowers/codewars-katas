// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
import frontend from '/modules/frontendModule.js';

function findUniq(arr) {
  let repeat = arr[0] === arr[1] ? arr[0] : arr[0] === arr[2] ? arr[0] : arr[1];
  for (let i = 0; i < arr.length; i++) if (arr[i] !== repeat) return arr[i];
  return null;
}

findUniq.newName = "Find the Unique Number";
findUniq.link = 'https://www.codewars.com/kata/585d7d5adb20cf33cb000235';
findUniq.info = 'There is an array with some numbers. All numbers are equal except for one. Try to find it!';
findUniq.inputWidth = 10;
findUniq.kyu = 6;
let array = [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1]
frontend(findUniq, array)

// OLD VERSION

// function findUniq(arr) {
//   let repeat;
//   let possibleStray;
//   if (arr[0] === arr[1]) repeat = arr[0];
//   if (!repeat) possibleStray = arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       repeat = arr[i]
//     } else if (possibleStray == repeat && arr[i] !== repeat) {
//       return arr[i];
//     }
//     if (repeat !== undefined && arr[i] !== repeat) return arr[i]

//   }
//   return null
// }
