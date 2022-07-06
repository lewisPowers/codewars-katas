import frontend from '/modules/frontendModule.js';

function getChar(c){
  return String.fromCharCode(c);
}

getChar.newName = 'get character from ASCII Value';
getChar.kyu = 8;
getChar.link = 'codewars.com/kata/55ad04714f0b468e8200001c';
getChar.inputWidth = 4;
getChar.info = `Function takes a number and returns the corresponding ASCII char for that value.`;

frontend(getChar, 65) // => 'A'
