function nextSmaller(n) {
  // 531 ==> compare last two digits
  // if last digit is smaller than previous digit, swap and return?
  // if not, move up one and recurse

  let numStr = n.toString();
  for (let i = numStr.length - 1; i > 0; i--) {
    let current = numStr[i];
    let previous = numStr[i - 1];
    if (current < previous && current !== '0') {
      let arr = numStr.split('')
      arr[i] = previous;
      arr[i - 1] = current;
      return Number(arr.join(''))
    }

  }
  return -1;

  // let baseCase = n.toString();
  // let cases = [ baseCase ];

  // if (baseCase.length < 2 || allDigitsAreSame(baseCase)) return -1;
  // while (cases.length < 2 || cases.lastIndexOf(baseCase) === cases.indexOf(baseCase)) {
  //   pushNPossibilities(cases[cases.length - 1]);
  // }

  // cases.sort();
  // let nextSmallest = cases[cases.indexOf(baseCase) - 1]
  // if (cases.length === 1 || nextSmallest === undefined || nextSmallest[0] === '0') return -1;
  // return Number(nextSmallest);

  // function pushNPossibilities(numStr) {
  //   let arr = splitNumStrIntoArr(numStr);
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     let swap = arr[i];
  //     arr[i] = arr[i + 1];
  //     arr[i + 1] = swap;
  //     cases.push(joinNumStrings(arr))
  //   }
  // }

  // function splitNumStrIntoArr(numberStr) {
  //   return numberStr.split('');
  // }

  // function joinNumStrings(array) {
  //   return array.join(''); // keep it a string!
  // }

  // function allDigitsAreSame(numStr) {
  //   return splitNumStrIntoArr(baseCase).every((char, i, arr) => char === arr[0])
  // }

}
debugger;
nextSmaller(4436414253)

// should work for 4436414253 - Expected: 4436414235, instead got: 4364414253

// https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

// 4 kyu
// Next smaller number with the same digits

// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.
// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."