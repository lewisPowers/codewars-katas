import frontend from '/modules/frontendModule.js';

function hexToDec(hexString){
  return parseInt(hexString, 16);
}

hexToDec.newName = 'Hex to Decimal'
hexToDec.inputWidth = 4;
hexToDec.link = 'https://www.codewars.com/kata/57a4d500e298a7952100035d';
hexToDec.kyu = 8;
hexToDec.info = `This function converts hex number (given as a string) to a decimal number.`
frontend(hexToDec, '10');

// EXAMPLE
  //   assert.strictEqual(hexToDec("1"), 1);
  // assert.strictEqual(hexToDec("a"), 10);
  // assert.strictEqual(hexToDec("10"), 16);
  // assert.strictEqual(hexToDec("FF"), 255);
  // assert.strictEqual(hexToDec("-C"), -12);
