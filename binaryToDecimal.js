import frontend from '/frontendModule.js';

function binToDec(bin){
  return Number(`0b${bin}`);
}

binToDec.newName = 'Convert Binary to Decimal';
binToDec.inputWidth = 9;
frontend(binToDec, 11);