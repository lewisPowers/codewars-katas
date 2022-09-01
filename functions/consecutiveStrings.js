import frontend from '/modules/frontendModule.js';

function longestConsec(strarr, k) {
  let longest = '';
  for ( let i = 0; i < strarr.length - k + 1; i++ ) {
    let concatenated = concatStrings(i, k);
    if (concatenated.length > longest.length) longest = concatenated;
  }

  return longest;

  function concatStrings(startIndex, iterations) {
    let result = '';
    while (iterations > 0) {
      result += strarr[startIndex];
      iterations--;
      startIndex++;
    }
    return result;
  }
}

longestConsec.link = 'https://www.codewars.com/kata/56a5d994ac971f1ac500003e';
longestConsec.kyu = 6;
longestConsec.newName = "Consecutive Strings";
longestConsec.info = `Returns the first longest string consisting of k consecutive strings taken from the array.`
frontend(longestConsec, ["zone", "abigail", "theta", "form", "libe", "zas"], 2)
// ==> "abigailtheta"
