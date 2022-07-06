import frontend from '/modules/frontendModule.js';

// Checks a word for repeating characters, case insensitive;
function isIsogram(str){
  str = str.toLowerCase();
  let isMultiple = function(char) {
    if (isMultiple[char]) return isMultiple[char];
    isMultiple[char] = true;
    return false;
  }
  for (let char of str) {
    if (isMultiple(char)) return false;
  }
  return true;
}
//     "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

isIsogram.newName = "Isograms"
isIsogram.kyu = 7;
isIsogram.link = 'https://www.codewars.com/kata/54ba84be607a92aa900000f1';
isIsogram.inputWidth = 16;
isIsogram.info = `An isogram is a word that has no repeating letters, consecutive or non-consecutive. This function determines whether a string is an isogram. Input string contains only letters. Function ignores letter case.`;
frontend(isIsogram, "Dermatoglyphics")
