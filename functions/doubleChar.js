import frontend from '/modules/frontendModule.js';

function doubleChar(str) {
  return str.split('').map(char => char + char).join('');
}

doubleChar.newName = 'Double Char';
doubleChar.link = 'https://www.codewars.com/kata/56b1f01c247c01db92000076';
doubleChar.kyu = 8;
doubleChar.inputWidth = 9;
doubleChar.info = `Given a string, this function returns a string in which each character (case-sensitive) is repeated once.`;

frontend(doubleChar, "Adidas") // ==> "AAddiiddaass"
