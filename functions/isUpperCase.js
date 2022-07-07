// String.prototype.isUpperCase = function() {
//   for (let char of this) {
//     let code = char.charCodeAt(0)
//     if ( code >= 97 && code <= 122 ) return false;
//   }
//   return true;
// }

import frontend from '/modules/frontendModule.js';

function isUpperCase(string) {
  for (let char of string) {
    let code = char.charCodeAt(0);
    if ( code >= 97 && code <= 122 ) return false;
  }
  return true;
}

isUpperCase.newName = 'Is the String Uppercase?'
isUpperCase.link = 'https://www.codewars.com/kata/56cd44e1aa4ac7879200010b';
isUpperCase.kyu = 8;
isUpperCase.inputWidth = 15;
isUpperCase.info = `Function that checks whether the string is ALL CAPS`;

frontend(isUpperCase, 'ACSKLDFJSgSKLDFJSKLDFJ') // == false
