import frontend from '/modules/frontendModule.js';

function noBoringZeros(n) {
  let digitArr = n.toString().split('');
  while (digitArr[digitArr.length - 1] === '0') digitArr.pop();
  return Number(digitArr.join(''));
}

noBoringZeros.newName = 'No zeros for heros';
noBoringZeros.kyu = 8;
noBoringZeros.link = 'https://www.codewars.com/kata/570a6a46455d08ff8d001002';
noBoringZeros.inputWidth = 10;
noBoringZeros.info = `Return number after removing all trailing zeros`;

frontend(noBoringZeros, 987000000)
