import frontend from '/modules/frontendModule.js';

function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a,b) => a < b ? -1 : a > b ? 1 : 0 ))]
}

mergeArrays.newName = 'Merge Two Arrays';
mergeArrays.inputWidth = 11;
mergeArrays.link = '';
mergeArrays.kyu = null;
mergeArrays.info = 'Create a single array from all of the unique values of two arrays.';
