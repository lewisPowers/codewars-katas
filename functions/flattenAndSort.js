import frontend from '/modules/frontendModule.js';

"use strict";

function flattenAndSort(array) {
  let copyArr = array.slice();

  function isArray(el) {
    return Array.isArray(el);
  }
  function flatten(arr, res = []) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i], res)
      } else {
        res.push(arr[i])
      }
    }
    return res;
  }
  function needsFlattening(arr) {
    return arr.some( (el) => isArray(el) )
  }
  while (needsFlattening(copyArr)) {
    copyArr = flatten(copyArr);
  }
  return copyArr.sort((a, b) => a - b );
}

flattenAndSort.link = 'https://www.codewars.com/kata/57ee99a16c8df7b02d00045f';
flattenAndSort.kyu = 7;
flattenAndSort.newName = 'Flatten and Sort an Array';
flattenAndSort.inputWidth = 27;
flattenAndSort.info = `Given a two-dimensional array of integers, this function returns the flattened version of the array with all the integers in the sorted (ascending) order.`;
frontend(flattenAndSort, [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])
// your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
