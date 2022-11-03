import frontend from '/modules/frontendModule.js';

function snail(origArr) {
  if (origArr.length === 1) return origArr[0];
  let array = origArr.slice();
  let newArr = [];
  let rowIndex = 0;
  let colIndex = 0;
  let spliced;

  function flatten(arr) {
    while (Array.isArray(arr[0])) arr = arr[0];
    return arr;
  }

  function pushToArr(arr) {
    while (Array.isArray(arr[0])) arr = arr[0]
    // console.log(arr)
    arr.forEach(item => newArr.push(item))
  }

  function leftToRight(rowIdx) {
    if (array[rowIdx] == undefined) return;
    colIndex = array[rowIdx].length - 1;
    spliced = array.splice(rowIdx, 1);
    spliced = flatten(spliced)
    if (spliced.length) pushToArr(spliced);
    if (array.length) topToBottom(colIndex);
  }

  function topToBottom(columnIdx) {
    if (array[rowIndex][columnIdx] == undefined) return;
    for (let i = rowIndex; i < array.length; i++) {
      spliced = array[i].splice(columnIdx, 1)
      if (spliced.length) pushToArr(spliced)
    }
    rowIndex = array.length - 1;
    if (array.length) rightToLeft(rowIndex);
  }

  function rightToLeft(rowIdx) {
    if (array[rowIdx] == undefined) return;
    spliced = array.splice(rowIdx, 1);
    while (Array.isArray(spliced[0])) spliced = spliced[0]
    let reversed = spliced.reverse();
    if (spliced.length) pushToArr(reversed)
    colIndex = 0;
    if (array.length) bottomToTop(colIndex);
  }

  function bottomToTop(columnIdx) {
    if (array[columnIdx] == undefined) return;
    for (let i = array.length - 1; i >= 0; i--) {
      spliced = array[i].splice(columnIdx, 1)
      if (spliced.length) pushToArr(spliced)
    }
    rowIndex = 0;
  }

  while (array.length > 0) leftToRight(rowIndex);
  return newArr;
}

snail.link = 'https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript';
snail.kyu = 4;
snail.newName = 'Snail';
snail.info = `Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.`
snail.originalExampleArgs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
frontend(snail, test) // ==> [1,2,3,6,9,8,7,4,5]
// snail([
  // [ 1,  2,  3,  4,  5],
  // [ 6,  7,  8,  9, 10],
  // [11, 12, 13, 14, 15],
  // [16, 17, 18, 19, 20],
  // [21, 22, 23, 24, 25]
// ]) ==> [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

// CODEWARS FORMAT:
// snail = function(array) {
//   if (array.length === 1) return array[0];
//   array = array.slice();
//   let newArr = [];
//   let rowIndex = 0;
//   let colIndex = 0;
//   let spliced;

//   function flatten(arr) {
//     while (Array.isArray(arr[0])) arr = arr[0];
//     return arr;
//   }

//   function pushToArr(arr) {
//     while (Array.isArray(arr[0])) arr = arr[0]
//     console.log(arr)
//     arr.forEach(item => newArr.push(item))
//   }

//   function leftToRight(rowIdx) {
//     if (array[rowIdx] == undefined) return;
//     colIndex = array[rowIdx].length - 1;
//     spliced = array.splice(rowIdx, 1);
//     spliced = flatten(spliced)
//     if (spliced.length) pushToArr(spliced);
//     if (array.length) topToBottom(colIndex);
//   }

//   function topToBottom(columnIdx) {
//     if (array[rowIndex][columnIdx] == undefined) return;
//     for (let i = rowIndex; i < array.length; i++) {
//       spliced = array[i].splice(columnIdx, 1)
//       if (spliced.length) pushToArr(spliced)
//     }
//     rowIndex = array.length - 1;
//     if (array.length) rightToLeft(rowIndex);
//   }

//   function rightToLeft(rowIdx) {
//     if (array[rowIdx] == undefined) return;
//     debugger;
//     spliced = array.splice(rowIdx, 1);
//     while (Array.isArray(spliced[0])) spliced = spliced[0]
//     let reversed = spliced.reverse();
//     if (spliced.length) pushToArr(reversed)
//     colIndex = 0;
//     if (array.length) bottomToTop(colIndex);
//   }

//   function bottomToTop(columnIdx) {
//     if (array[columnIdx] == undefined) return;
//     for (let i = array.length - 1; i >= 0; i--) {
//       spliced = array[i].splice(columnIdx, 1)
//       if (spliced.length) pushToArr(spliced)
//     }
//     rowIndex = 0;
//   }

//   while (array.length) leftToRight(rowIndex);
//   return newArr;
// }

