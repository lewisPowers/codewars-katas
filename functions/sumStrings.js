import frontend from '/modules/frontendModule.js';

function sumStr(a,b) {
  return (toNum(a) + toNum(b)).toString();
  function toNum(str) {
    return str === '' ? 0 : Number(str);
  }
}

sumStr.inputWidth = 9;
sumStr.link = 'https://www.codewars.com/kata/5324945e2ece5e1f32000370';
sumStr.info = 'Given the string representations of two integers, this function returns the string representation of the sum of those integers.';
sumStr.kyu = 4;
sumStr.newName = 'Sum Strings as Numbers';

frontend(sumStr, '123', '444')
