import frontend from '/modules/frontendModule.js';


function rot13(message){
  function rotate(character) {
    let charCode = character.charCodeAt(0);
    let zCharCode = charCode <= 90 ? 90 : 122;
    return charCode + 13 > zCharCode ? String.fromCharCode(charCode - 13) : String.fromCharCode(charCode + 13);
  }
  function isLetter(code) {
    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
  }

  return message.split('').map(char => {
    let charCode = char.charCodeAt(0);
    if (isLetter(charCode)) char = rotate(char);
    return char;
  }).join('')
}

rot13.kyu = 5;
rot13.newName = 'Rot13';
// rot13.inputWidth = 12;
rot13.link = 'https://www.codewars.com/kata/530e15517bc88ac656000716';
rot13.info = `ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".`;


frontend(rot13, "test") // ==> "grfg"
// "Test" ==> "Grfg"



//
// The ASCII value of the lowercase alphabet is from 97 to 122.
// 122 ==> 97 98 99 100 101 102 103 104 105 106 107 108 109
//And, the ASCII value of the uppercase alphabet is from 65 to 90.

