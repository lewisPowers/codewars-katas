import frontend from '/modules/frontendModule.js';

function binToDec(bin){
  return Number(`0b${bin}`);
}

binToDec.newName = 'Convert Binary to Decimal';
binToDec.inputWidth = 9;
binToDec.info = 'Converts a binary number (given as a string) to a decimal number.';
binToDec.link = 'https://www.codewars.com/kata/57a5c31ce298a7e6b7000334';
frontend(binToDec, 11);