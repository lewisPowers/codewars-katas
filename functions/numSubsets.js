
function estSubsets(arr) {
// Create a set from the array given to us
// change set back into array
// run func to find all subsets:
  // let len = 1;
  // make new array with length of len; add it to a final array
let subsetOneIdx = 1;
let result = [];

while (subsetOneIdx <= arr.length) {

  for (let i = 0; i < arr.length; i = i + subsetOneIdx) {
    result.push(makeSubsetArr(i, subsetOneIdx))
  }
  subsetOneIdx++;
}
return result;

// while len is less than or equal to arr.length, iterate for loop to add subset arrays

function makeSubsetArr(start, length) {
  // slice arr
  // return spliced
  let copy = arr.slice();
  return copy.splice(start, length);
}

}

/*

est_subsets([1, 2, 3, 4]) == 15

est_subsets([1, 2, 3, 4, 5]) ==
  {{1}, {2}, {3}, {4}, [5], {1,2}, {1,3}, {1,4}, [1,5] {2,3}, {2,4}, [2,5], {3,4}, [3,5], {1,2,3}, {1,2,4}, [1,2,5], {1,3,4}, [1,3,5], {2,3,4}, [2,3,5], {1,2,3,4}, [1,2,4,5], [1,2,3,5], [1,3,4,5], [2,3,4,5], [1,2,3,4,5],} == 28 ? {}, is not counted)

est_subsets(['a', 'b', 'c', 'd', 'd']) == 15

 */